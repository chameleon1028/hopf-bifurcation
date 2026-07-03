/* ============================================================
   Supercritical Hopf Bifurcation – Interactive Visualizer
   Pure JavaScript · RK4 integration · Canvas animation
   ============================================================ */

(function() {
    'use strict';

    // ---------- DOM references ----------
    const canvas = document.getElementById('phaseCanvas');
    const ctx = canvas.getContext('2d');
    const lambdaSlider = document.getElementById('lambdaSlider');
    const lambdaDisplay = document.getElementById('lambdaDisplay');
    const playPauseBtn = document.getElementById('playPauseBtn');
    const resetBtn = document.getElementById('resetBtn');
    const clearBtn = document.getElementById('clearBtn');
    const eigenvalueDisplay = document.getElementById('eigenvalueDisplay');
    const realPartDisplay = document.getElementById('realPartDisplay');
    const stabilityBadge = document.getElementById('stabilityBadge');
    const stabilityDescription = document.getElementById('stabilityDescription');
    const limitCycleRow = document.getElementById('limitCycleRow');
    const limitCycleRadius = document.getElementById('limitCycleRadius');

    // ---------- Constants ----------
    const CANVAS_SIZE = 600;          // pixel width/height
    const SCALE = 100;                // pixels per world unit
    const CENTER_X = CANVAS_SIZE / 2;
    const CENTER_Y = CANVAS_SIZE / 2;
    const WORLD_MIN = -3;
    const WORLD_MAX = 3;
    const DIR_SPACING = 0.5;          // world units between direction arrows
    const ARROW_LENGTH = 26;          // canvas pixels for normalised arrow
    const ARROWHEAD_SIZE = 6;
    const RK4_DT = 0.04;             // time step
    const MAX_TRAIL = 500;           // trail points per particle

    // ---------- State ----------
    let lambda = parseFloat(lambdaSlider.value);
    let isPlaying = true;
    let animationId = null;
    let directionCache = null;
    let cacheLambda = null;

    // Particle / trajectory data
    const initialConditions = [
        { x: 0.25, y: 0.0, color: '#e74c3c' },   // red
        { x: 0.6,  y: 0.1, color: '#2980b9' },   // blue
        { x: 1.2,  y:-0.3, color: '#27ae60' },   // green
        { x: 2.0,  y: 0.5, color: '#f39c12' },   // orange
        { x:-0.5,  y: 0.55,color: '#8e44ad' },   // purple
        { x:-1.8,  y:-1.0, color: '#1abc9c' },   // teal
        { x: 0.15, y:-0.25,color: '#e67e22' },   // dark orange
        { x:-2.4,  y: 1.6, color: '#546e7a' }    // blue-grey
    ];

    let particles = [];

    // ---------- Coordinate transforms ----------
    function worldToCanvas(wx, wy) {
        return {
            cx: CENTER_X + wx * SCALE,
            cy: CENTER_Y - wy * SCALE
        };
    }

    function canvasToWorld(cx, cy) {
        return {
            x: (cx - CENTER_X) / SCALE,
            y: (CENTER_Y - cy) / SCALE
        };
    }

    function isInView(wx, wy) {
        return wx >= WORLD_MIN && wx <= WORLD_MAX && wy >= WORLD_MIN && wy <= WORLD_MAX;
    }

    // ---------- Vector field ----------
    function vectorField(x, y) {
        const r2 = x * x + y * y;
        return [
            lambda * x - y - x * r2,
            x + lambda * y - y * r2
        ];
    }

    // ---------- RK4 step ----------
    function rk4Step(x, y, dt) {
        const [k1x, k1y] = vectorField(x, y);
        const [k2x, k2y] = vectorField(x + 0.5*dt*k1x, y + 0.5*dt*k1y);
        const [k3x, k3y] = vectorField(x + 0.5*dt*k2x, y + 0.5*dt*k2y);
        const [k4x, k4y] = vectorField(x + dt*k3x, y + dt*k3y);
        return {
            x: x + (dt/6)*(k1x + 2*k2x + 2*k3x + k4x),
            y: y + (dt/6)*(k1y + 2*k2y + 2*k3y + k4y)
        };
    }

    // ---------- Direction field computation ----------
    function computeDirectionField() {
        if (cacheLambda === lambda && directionCache) {
            return directionCache;
        }
        const arrows = [];
        const start = -2.5, end = 2.5;
        for (let wx = start; wx <= end + 1e-6; wx += DIR_SPACING) {
            for (let wy = start; wy <= end + 1e-6; wy += DIR_SPACING) {
                const [vx, vy] = vectorField(wx, wy);
                const mag = Math.sqrt(vx*vx + vy*vy);
                if (mag < 1e-8) continue;
                const nx = vx / mag;
                const ny = vy / mag;
                const { cx, cy } = worldToCanvas(wx, wy);
                // canvas space direction (note y‑flip)
                const cvx = nx * SCALE;
                const cvy = -ny * SCALE;
                const cMag = Math.sqrt(cvx*cvx + cvy*cvy);
                const sf = ARROW_LENGTH / cMag;
                const endCx = cx + cvx * sf;
                const endCy = cy + cvy * sf;
                arrows.push({
                    cx, cy, endCx, endCy,
                    dirX: cvx / cMag,
                    dirY: cvy / cMag
                });
            }
        }
        directionCache = arrows;
        cacheLambda = lambda;
        return arrows;
    }

    // ---------- Drawing helpers ----------
    function drawGrid() {
        ctx.save();
        ctx.strokeStyle = '#e8e8e8';
        ctx.lineWidth = 0.7;
        for (let i = WORLD_MIN; i <= WORLD_MAX; i++) {
            const { cx } = worldToCanvas(i, 0);
            const { cy } = worldToCanvas(0, i);
            ctx.beginPath();
            ctx.moveTo(cx, 0);
            ctx.lineTo(cx, CANVAS_SIZE);
            ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(0, cy);
            ctx.lineTo(CANVAS_SIZE, cy);
            ctx.stroke();
        }
        ctx.restore();
    }

    function drawAxes() {
        ctx.save();
        ctx.strokeStyle = '#555';
        ctx.lineWidth = 1.2;
        const xAxisY = worldToCanvas(0, 0).cy;
        const yAxisX = worldToCanvas(0, 0).cx;
        ctx.beginPath();
        ctx.moveTo(0, xAxisY);
        ctx.lineTo(CANVAS_SIZE, xAxisY);
        ctx.moveTo(yAxisX, 0);
        ctx.lineTo(yAxisX, CANVAS_SIZE);
        ctx.stroke();

        // arrowheads
        function arrowHead(cx, cy, angle) {
            const sz = 9;
            ctx.fillStyle = '#555';
            ctx.beginPath();
            ctx.moveTo(cx, cy);
            ctx.lineTo(cx - sz*Math.cos(angle-0.45), cy - sz*Math.sin(angle-0.45));
            ctx.lineTo(cx - sz*Math.cos(angle+0.45), cy - sz*Math.sin(angle+0.45));
            ctx.closePath();
            ctx.fill();
        }
        arrowHead(worldToCanvas(WORLD_MAX, 0).cx, xAxisY, 0);
        arrowHead(yAxisX, worldToCanvas(0, WORLD_MAX).cy, -Math.PI/2);

        // labels
        ctx.fillStyle = '#333';
        ctx.font = 'italic 13px "Segoe UI", "Helvetica Neue", Arial, sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText('x', CANVAS_SIZE-14, xAxisY-10);
        ctx.fillText('y', yAxisX+14, 16);
        ctx.font = '11px "Segoe UI", "Helvetica Neue", Arial, sans-serif';
        ctx.fillStyle = '#666';
        for (let i = WORLD_MIN; i <= WORLD_MAX; i++) {
            if (i === 0) continue;
            const tx = worldToCanvas(i, 0).cx;
            const ty = worldToCanvas(0, i).cy;
            ctx.fillText(i.toString(), tx, xAxisY+15);
            ctx.fillText(i.toString(), yAxisX-22, ty+4);
        }
        ctx.fillText('0', yAxisX-14, xAxisY+15);
        ctx.restore();
    }

    function drawDirectionField() {
        const arrows = computeDirectionField();
        ctx.save();
        ctx.strokeStyle = '#8899aa';
        ctx.fillStyle = '#8899aa';
        ctx.lineWidth = 1.0;
        arrows.forEach(a => {
            ctx.beginPath();
            ctx.moveTo(a.cx, a.cy);
            ctx.lineTo(a.endCx, a.endCy);
            ctx.stroke();
            const angle = Math.atan2(a.dirY, a.dirX);
            ctx.beginPath();
            ctx.moveTo(a.endCx, a.endCy);
            ctx.lineTo(a.endCx - ARROWHEAD_SIZE*Math.cos(angle-0.55),
                       a.endCy - ARROWHEAD_SIZE*Math.sin(angle-0.55));
            ctx.lineTo(a.endCx - ARROWHEAD_SIZE*Math.cos(angle+0.55),
                       a.endCy - ARROWHEAD_SIZE*Math.sin(angle+0.55));
            ctx.closePath();
            ctx.fill();
        });
        ctx.restore();
    }

    function drawEquilibrium() {
        const { cx, cy } = worldToCanvas(0, 0);
        ctx.save();
        ctx.beginPath();
        ctx.arc(cx, cy, 7, 0, 2*Math.PI);
        ctx.fillStyle = '#1a1a2e';
        ctx.fill();
        ctx.beginPath();
        ctx.arc(cx, cy, 3.5, 0, 2*Math.PI);
        if (lambda < -0.005) ctx.fillStyle = '#2980b9';
        else if (lambda > 0.005) ctx.fillStyle = '#c0392b';
        else ctx.fillStyle = '#d4a017';
        ctx.fill();
        ctx.beginPath();
        ctx.arc(cx, cy, 7, 0, 2*Math.PI);
        ctx.strokeStyle = '#333';
        ctx.lineWidth = 1.2;
        ctx.stroke();
        ctx.restore();
    }

    function drawLimitCycle() {
        if (lambda <= 0.001) return;
        const radius = Math.sqrt(lambda);
        if (radius > WORLD_MAX) return;
        const { cx, cy } = worldToCanvas(0, 0);
        ctx.save();
        ctx.setLineDash([8, 5]);
        ctx.strokeStyle = '#27ae60';
        ctx.lineWidth = 2.2;
        ctx.beginPath();
        ctx.arc(cx, cy, radius * SCALE, 0, 2*Math.PI);
        ctx.stroke();
        ctx.setLineDash([]);
        if (radius < 2.9) {
            const lbl = worldToCanvas(radius*0.75, radius*0.75);
            ctx.fillStyle = '#1a6b3a';
            ctx.font = 'italic 11px "Segoe UI", "Helvetica Neue", Arial, sans-serif';
            ctx.fillText('r = √λ', lbl.cx-18, lbl.cy-8);
        }
        ctx.restore();
    }

    function drawTrajectories() {
        particles.forEach(p => {
            const trail = p.trail;
            if (trail.length < 2) {
                if (trail.length === 1 && isInView(trail[0].x, trail[0].y)) {
                    const { cx, cy } = worldToCanvas(trail[0].x, trail[0].y);
                    ctx.beginPath();
                    ctx.arc(cx, cy, 3, 0, 2*Math.PI);
                    ctx.fillStyle = p.color;
                    ctx.fill();
                }
                return;
            }
            ctx.save();
            ctx.strokeStyle = p.color;
            ctx.lineWidth = 1.8;
            ctx.lineCap = 'round';
            ctx.lineJoin = 'round';
            ctx.globalAlpha = 0.75;
            ctx.beginPath();
            const first = worldToCanvas(trail[0].x, trail[0].y);
            ctx.moveTo(first.cx, first.cy);
            for (let i = 1; i < trail.length; i++) {
                const pt = worldToCanvas(trail[i].x, trail[i].y);
                ctx.lineTo(pt.cx, pt.cy);
            }
            ctx.stroke();
            const head = worldToCanvas(p.x, p.y);
            ctx.globalAlpha = 1;
            ctx.beginPath();
            ctx.arc(head.cx, head.cy, 3.5, 0, 2*Math.PI);
            ctx.fillStyle = p.color;
            ctx.fill();
            ctx.strokeStyle = '#fff';
            ctx.lineWidth = 0.8;
            ctx.stroke();
            ctx.restore();
        });
    }

    // ---------- Full render pipeline ----------
    function render() {
        ctx.clearRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
        ctx.fillStyle = '#fdfdfd';
        ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
        drawGrid();
        drawDirectionField();
        drawLimitCycle();
        drawAxes();
        drawEquilibrium();
        drawTrajectories();
    }

    // ---------- Animation ----------
    function advanceParticles() {
        particles.forEach(p => {
            const next = rk4Step(p.x, p.y, RK4_DT);
            p.x = next.x;
            p.y = next.y;
            p.trail.push({ x: p.x, y: p.y });
            if (p.trail.length > MAX_TRAIL) p.trail.shift();
        });
    }

    function animate() {
        if (!isPlaying) {
            render();
            animationId = null;
            return;
        }
        advanceParticles();
        render();
        animationId = requestAnimationFrame(animate);
    }

    function startAnimation() {
        if (animationId) cancelAnimationFrame(animationId);
        animationId = isPlaying ? requestAnimationFrame(animate) : (render(), null);
    }

    // ---------- UI update ----------
    function updateInfo() {
        lambdaDisplay.textContent = lambda.toFixed(2);
        lambdaDisplay.className = 'lambda-display';
        if (lambda < -0.005) lambdaDisplay.classList.add('lambda-neg');
        else if (lambda > 0.005) lambdaDisplay.classList.add('lambda-pos');
        else lambdaDisplay.classList.add('lambda-zero');

        eigenvalueDisplay.textContent = (lambda >= 0 ? '' : '') +
            `${lambda.toFixed(2)} + i`.replace('+ -', '− ');
        realPartDisplay.textContent = lambda.toFixed(2);

        stabilityBadge.className = 'stability-badge';
        if (lambda < -0.005) {
            stabilityBadge.textContent = 'Stable Spiral (Sink)';
            stabilityBadge.classList.add('stable-spiral');
            stabilityDescription.textContent =
                'The origin is a stable spiral. All trajectories spiral inward toward the equilibrium.';
            limitCycleRow.style.display = 'none';
        } else if (lambda > 0.005) {
            stabilityBadge.textContent = 'Unstable Spiral (Source)';
            stabilityBadge.classList.add('unstable-spiral');
            const rLC = Math.sqrt(lambda);
            stabilityDescription.textContent =
                `The origin is an unstable spiral. A stable limit cycle exists at radius r = √λ ≈ ${rLC.toFixed(3)}. ` +
                'Trajectories spiral outward from the origin, or inward from outside, toward the limit cycle.';
            limitCycleRow.style.display = 'flex';
            limitCycleRadius.textContent = `r = √λ ≈ ${rLC.toFixed(3)}`;
        } else {
            stabilityBadge.textContent = 'Hopf Bifurcation Point';
            stabilityBadge.classList.add('hopf-point');
            stabilityDescription.textContent =
                'Bifurcation point (λ = 0). Eigenvalues ±i (purely imaginary). The origin is a centre in the linearisation, ' +
                'but asymptotically stable due to cubic damping (r\' = -r³). A limit cycle emerges for λ > 0.';
            limitCycleRow.style.display = 'none';
        }
    }

    // ---------- Event handlers ----------
    function onLambdaChange() {
        lambda = parseFloat(lambdaSlider.value);
        directionCache = null;
        cacheLambda = null;
        updateInfo();
        render();
    }

    function togglePlayPause() {
        isPlaying = !isPlaying;
        if (isPlaying) {
            playPauseBtn.textContent = '⏸ Pause';
            playPauseBtn.classList.add('active-btn');
        } else {
            playPauseBtn.textContent = '▶ Play';
            playPauseBtn.classList.remove('active-btn');
        }
        startAnimation();
    }

    function resetAll() {
        particles = initialConditions.map(ic => ({
            x: ic.x,
            y: ic.y,
            trail: [{ x: ic.x, y: ic.y }],
            color: ic.color
        }));
        directionCache = null;
        cacheLambda = null;
        updateInfo();
        render();
        if (isPlaying && !animationId) startAnimation();
    }

    function clearTrails() {
        particles.forEach(p => {
            p.trail = [{ x: p.x, y: p.y }];
        });
        render();
        if (isPlaying && !animationId) startAnimation();
    }

    // ---------- Initialisation ----------
    function init() {
        particles = initialConditions.map(ic => ({
            x: ic.x,
            y: ic.y,
            trail: [{ x: ic.x, y: ic.y }],
            color: ic.color
        }));
        lambda = parseFloat(lambdaSlider.value);
        updateInfo();
        render();
        startAnimation();
    }

    lambdaSlider.addEventListener('input', onLambdaChange);
    playPauseBtn.addEventListener('click', togglePlayPause);
    resetBtn.addEventListener('click', resetAll);
    clearBtn.addEventListener('click', clearTrails);
    document.addEventListener('keydown', e => {
        if (e.code === 'Space' && e.target === document.body) {
            e.preventDefault();
            togglePlayPause();
        }
    });

    init();
})();
