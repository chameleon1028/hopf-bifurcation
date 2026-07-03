<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Supercritical Hopf Bifurcation Visualizer</title>
    <style>
        /* ============================================================
           CSS - Clean, professional university-style layout
           ============================================================ */
        :root {
            --bg: #fafaf9;
            --card-bg: #ffffff;
            --text: #1a1a2e;
            --text-secondary: #555;
            --border: #e0e0e0;
            --accent: #3b6fb6;
            --stable: #2980b9;
            --hopf: #d4a017;
            --unstable: #c0392b;
            --limit-cycle: #27ae60;
            --slider-track: #dde;
            --slider-fill: #3b6fb6;
            --button-bg: #f0f2f5;
            --button-hover: #e2e6ea;
            --shadow: 0 2px 12px rgba(0, 0, 0, 0.07);
            --font-heading: 'Georgia', 'Times New Roman', serif;
            --font-body: 'Segoe UI', 'Helvetica Neue', Arial, sans-serif;
            --font-mono: 'SF Mono', 'Consolas', 'Monaco', monospace;
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            background: #f0f2f5;
            font-family: var(--font-body);
            color: var(--text);
            display: flex;
            justify-content: center;
            align-items: flex-start;
            min-height: 100vh;
            padding: 20px 10px 40px;
        }

        /* Main container card */
        .container {
            background: var(--card-bg);
            border-radius: 12px;
            box-shadow: var(--shadow);
            max-width: 980px;
            width: 100%;
            padding: 28px 30px 24px;
            display: flex;
            flex-direction: column;
            gap: 20px;
        }

        /* Header */
        header {
            text-align: center;
            border-bottom: 2px solid var(--border);
            padding-bottom: 16px;
            margin-bottom: 4px;
        }
        header h1 {
            font-family: var(--font-heading);
            font-size: 1.75rem;
            font-weight: 700;
            color: #1a1a2e;
            letter-spacing: 0.3px;
            margin-bottom: 6px;
        }
        header .subtitle {
            font-family: var(--font-mono);
            font-size: 0.9rem;
            color: var(--text-secondary);
            letter-spacing: 0.2px;
        }

        /* Main content: canvas + info panel side by side */
        .main-content {
            display: flex;
            gap: 24px;
            flex-wrap: wrap;
            justify-content: center;
            align-items: flex-start;
        }

        /* Canvas container */
        .canvas-wrapper {
            flex-shrink: 0;
            border: 1px solid var(--border);
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 1px 6px rgba(0, 0, 0, 0.04);
            background: #fdfdfd;
            line-height: 0;
        }
        canvas {
            display: block;
            width: 600px;
            height: 600px;
        }

        /* Info panel */
        .info-panel {
            flex: 1;
            min-width: 260px;
            max-width: 320px;
            display: flex;
            flex-direction: column;
            gap: 16px;
            font-size: 0.9rem;
        }
        .info-card {
            background: #fafbfc;
            border: 1px solid var(--border);
            border-radius: 8px;
            padding: 16px 18px;
        }
        .info-card h3 {
            font-family: var(--font-heading);
            font-size: 0.95rem;
            font-weight: 600;
            margin-bottom: 10px;
            color: #333;
            letter-spacing: 0.2px;
        }
        .info-row {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 5px 0;
            border-bottom: 1px dotted #eee;
            font-size: 0.88rem;
        }
        .info-row:last-child {
            border-bottom: none;
        }
        .info-label {
            color: var(--text-secondary);
            font-weight: 500;
        }
        .info-value {
            font-weight: 600;
            font-family: var(--font-mono);
            font-size: 0.85rem;
        }
        .stability-badge {
            display: inline-block;
            padding: 5px 12px;
            border-radius: 20px;
            font-weight: 600;
            font-size: 0.85rem;
            text-align: center;
            letter-spacing: 0.3px;
            transition: background 0.25s, color 0.25s;
        }
        .stable-spiral {
            background: #e8f4fd;
            color: #1a5f8a;
        }
        .hopf-point {
            background: #fef9e7;
            color: #8a6d14;
        }
        .unstable-spiral {
            background: #fdecea;
            color: #8a1f1f;
        }
        .limit-cycle-info {
            color: var(--limit-cycle);
            font-weight: 600;
        }

        /* Controls area */
        .controls {
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            gap: 16px;
            padding: 12px 4px;
            border-top: 1px solid var(--border);
        }
        .control-group {
            display: flex;
            align-items: center;
            gap: 8px;
        }
        .control-group label {
            font-weight: 600;
            font-size: 0.9rem;
            white-space: nowrap;
            color: #444;
        }
        /* Lambda display */
        .lambda-display {
            font-family: var(--font-mono);
            font-size: 1.05rem;
            font-weight: 700;
            min-width: 44px;
            text-align: center;
            padding: 3px 8px;
            border-radius: 4px;
            transition: color 0.25s;
        }
        .lambda-neg {
            color: var(--stable);
        }
        .lambda-zero {
            color: var(--hopf);
        }
        .lambda-pos {
            color: var(--unstable);
        }

        /* Slider styling */
        input[type="range"] {
            -webkit-appearance: none;
            width: 200px;
            height: 8px;
            border-radius: 4px;
            background: var(--slider-track);
            outline: none;
            cursor: pointer;
        }
        input[type="range"]::-webkit-slider-thumb {
            -webkit-appearance: none;
            width: 22px;
            height: 22px;
            border-radius: 50%;
            background: var(--accent);
            cursor: pointer;
            border: 3px solid #fff;
            box-shadow: 0 1px 4px rgba(0, 0, 0, 0.25);
            transition: transform 0.1s;
        }
        input[type="range"]::-webkit-slider-thumb:hover {
            transform: scale(1.12);
        }
        input[type="range"]::-moz-range-thumb {
            width: 22px;
            height: 22px;
            border-radius: 50%;
            background: var(--accent);
            cursor: pointer;
            border: 3px solid #fff;
            box-shadow: 0 1px 4px rgba(0, 0, 0, 0.25);
        }

        /* Buttons */
        button {
            padding: 9px 18px;
            border: 1px solid #ccc;
            border-radius: 6px;
            background: var(--button-bg);
            cursor: pointer;
            font-weight: 600;
            font-size: 0.88rem;
            font-family: var(--font-body);
            letter-spacing: 0.2px;
            transition: background 0.2s, box-shadow 0.2s;
            white-space: nowrap;
        }
        button:hover {
            background: var(--button-hover);
            box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
        }
        button:active {
            background: #d5dbe3;
        }
        button.active-btn {
            background: #dce8f5;
            border-color: var(--accent);
            color: #1a3d5c;
        }

        /* Legend */
        .legend {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
            font-size: 0.78rem;
            color: #555;
            margin-top: 2px;
        }
        .legend-item {
            display: flex;
            align-items: center;
            gap: 5px;
        }
        .legend-dot {
            width: 10px;
            height: 10px;
            border-radius: 50%;
            flex-shrink: 0;
        }
        .legend-dash {
            width: 16px;
            height: 2px;
            border-radius: 1px;
            flex-shrink: 0;
        }

        /* Responsive */
        @media (max-width: 940px) {
            .main-content {
                flex-direction: column;
                align-items: center;
            }
            .info-panel {
                max-width: 100%;
                flex-direction: row;
                flex-wrap: wrap;
                gap: 10px;
            }
            .info-card {
                flex: 1;
                min-width: 180px;
            }
            canvas {
                width: 100%;
                height: auto;
                max-width: 500px;
            }
            .canvas-wrapper {
                width: 100%;
                max-width: 500px;
            }
            input[type="range"] {
                width: 140px;
            }
        }
        @media (max-width: 500px) {
            .container {
                padding: 12px 8px;
            }
            header h1 {
                font-size: 1.3rem;
            }
            .controls {
                gap: 8px;
            }
            input[type="range"] {
                width: 100px;
            }
            button {
                padding: 7px 12px;
                font-size: 0.8rem;
            }
        }
    </style>
</head>
<body>

    <div class="container">
        <!-- ============================================================
             HEADER - Title and system equations
             ============================================================ -->
        <header>
            <h1>Supercritical Hopf Bifurcation</h1>
            <p class="subtitle">
                dx/dt = λx − y − x(x² + y²)&emsp;|&emsp;dy/dt = x + λy − y(x² + y²)
            </p>
        </header>

        <!-- ============================================================
             MAIN CONTENT - Canvas + Info Panel
             ============================================================ -->
        <div class="main-content">
            <!-- Phase portrait canvas -->
            <div class="canvas-wrapper">
                <canvas id="phaseCanvas" width="600" height="600"></canvas>
            </div>

            <!-- Information panel -->
            <div class="info-panel" id="infoPanel">
                <!-- Eigenvalue card -->
                <div class="info-card">
                    <h3>📐 Eigenvalues</h3>
                    <div class="info-row">
                        <span class="info-label">Characteristic</span>
                        <span class="info-value" id="eigenvalueDisplay">λ ± i</span>
                    </div>
                    <div class="info-row">
                        <span class="info-label">Real part</span>
                        <span class="info-value" id="realPartDisplay">—</span>
                    </div>
                    <div class="info-row">
                        <span class="info-label">Imaginary part</span>
                        <span class="info-value">±1</span>
                    </div>
                </div>

                <!-- Stability card -->
                <div class="info-card">
                    <h3>🔍 Stability Classification</h3>
                    <div style="text-align:center; margin:8px 0;">
                        <span class="stability-badge" id="stabilityBadge">—</span>
                    </div>
                    <div class="info-row" id="limitCycleRow" style="display:none;">
                        <span class="info-label">Limit cycle radius</span>
                        <span class="info-value limit-cycle-info" id="limitCycleRadius">—</span>
                    </div>
                    <p style="font-size:0.8rem;color:#777;margin-top:6px;line-height:1.4;" id="stabilityDescription">
                        —
                    </p>
                </div>

                <!-- Legend card -->
                <div class="info-card">
                    <h3>📋 Legend</h3>
                    <div class="legend">
                        <div class="legend-item">
                            <span class="legend-dot" style="background:#1a1a2e;"></span> Equilibrium (0,0)
                        </div>
                        <div class="legend-item">
                            <span class="legend-dash" style="background:var(--limit-cycle);"></span> Limit cycle
                        </div>
                        <div class="legend-item">
                            <span class="legend-dot" style="background:#8899aa;"></span> Direction field
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- ============================================================
             CONTROLS - Slider, buttons, λ display
             ============================================================ -->
        <div class="controls">
            <div class="control-group">
                <label for="lambdaSlider">λ =</label>
                <span class="lambda-display" id="lambdaDisplay">0.00</span>
            </div>
            <input type="range" id="lambdaSlider" min="-2" max="2" step="0.01" value="0">
            <span style="font-size:0.8rem;color:#999;">-2</span>
            <span style="font-size:0.8rem;color:#999;">2</span>

            <button id="playPauseBtn" class="active-btn" title="Pause / Resume animation">⏸ Pause</button>
            <button id="resetBtn" title="Reset all trajectories">↺ Reset</button>
            <button id="clearBtn" title="Clear trails but keep particle positions">🗑 Clear Trails</button>
        </div>
    </div>

    <script>
        // ============================================================
        // JAVASCRIPT - Supercritical Hopf Bifurcation Visualizer
        // System:  dx/dt = λx − y − x(x²+y²)
        //          dy/dt = x + λy − y(x²+y²)
        // ============================================================

        (function() {
            // ---------- DOM Elements ----------
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
            const CANVAS_W = canvas.width; // 600 px
            const CANVAS_H = canvas.height; // 600 px
            const SCALE = 100; // pixels per world unit
            const CENTER_X = CANVAS_W / 2; // 300
            const CENTER_Y = CANVAS_H / 2; // 300
            const WORLD_MIN = -3;
            const WORLD_MAX = 3;
            const DIR_GRID_SPACING = 0.5; // world units between direction arrows
            const ARROW_LENGTH = 26; // pixels for normalized direction arrows
            const ARROWHEAD_SIZE = 6; // pixels
            const RK4_DT = 0.04; // time step per animation frame
            const MAX_TRAIL_LENGTH = 500; // max points per trajectory trail

            // ---------- State ----------
            let lambda = parseFloat(lambdaSlider.value); // current λ
            let isPlaying = true;
            let animationId = null;
            let directionFieldCache = null; // cached arrow data for current λ
            let cachedLambda = null; // λ value for which cache is valid

            // ---------- Particle / Trajectory data ----------
            // Each particle: { x, y, trail: [{x,y},...], color }
            const initialConditions = [
                { x: 0.25, y: 0.0, color: '#e74c3c' }, // red - inside
                { x: 0.6, y: 0.1, color: '#2980b9' }, // blue - inside
                { x: 1.2, y: -0.3, color: '#27ae60' }, // green - near limit cycle for λ≈1.4
                { x: 2.0, y: 0.5, color: '#f39c12' }, // orange - outside
                { x: -0.5, y: 0.55, color: '#8e44ad' }, // purple - inside
                { x: -1.8, y: -1.0, color: '#1abc9c' }, // teal - outside
                { x: 0.15, y: -0.25, color: '#e67e22' }, // dark orange - inside
                { x: -2.4, y: 1.6, color: '#546e7a' }, // blue-gray - far outside
            ];

            let particles = [];

            /** Initialize all particles to their starting conditions */
            function initParticles() {
                particles = initialConditions.map(ic => ({
                    x: ic.x,
                    y: ic.y,
                    trail: [{ x: ic.x, y: ic.y }],
                    color: ic.color,
                }));
            }

            // ---------- Coordinate transforms ----------
            /** World (x,y) → Canvas (cx, cy) */
            function worldToCanvas(wx, wy) {
                return {
                    cx: CENTER_X + wx * SCALE,
                    cy: CENTER_Y - wy * SCALE,
                };
            }

            /** Canvas (cx, cy) → World (x, y) */
            function canvasToWorld(cx, cy) {
                return {
                    x: (cx - CENTER_X) / SCALE,
                    y: (CENTER_Y - cy) / SCALE,
                };
            }

            /** Clamp world coordinates to visible range (for drawing) */
            function isInView(wx, wy) {
                return wx >= WORLD_MIN && wx <= WORLD_MAX && wy >= WORLD_MIN && wy <= WORLD_MAX;
            }

            // ---------- Vector field ----------
            /**
             * Evaluate the vector field at a world point.
             * Returns [dx/dt, dy/dt].
             */
            function vectorField(x, y) {
                const r2 = x * x + y * y;
                const dx = lambda * x - y - x * r2;
                const dy = x + lambda * y - y * r2;
                return [dx, dy];
            }

            // ---------- RK4 Integrator ----------
            /**
             * Single RK4 step from (x, y) with time step dt.
             * Returns { x: newX, y: newY }.
             */
            function rk4Step(x, y, dt) {
                // k1
                const [k1x, k1y] = vectorField(x, y);
                // k2
                const [k2x, k2y] = vectorField(x + 0.5 * dt * k1x, y + 0.5 * dt * k1y);
                // k3
                const [k3x, k3y] = vectorField(x + 0.5 * dt * k2x, y + 0.5 * dt * k2y);
                // k4
                const [k4x, k4y] = vectorField(x + dt * k3x, y + dt * k3y);

                const newX = x + (dt / 6) * (k1x + 2 * k2x + 2 * k3x + k4x);
                const newY = y + (dt / 6) * (k1y + 2 * k2y + 2 * k3y + k4y);
                return { x: newX, y: newY };
            }

            // ---------- Direction field computation ----------
            /**
             * Compute direction field arrow data for the current λ.
             * Returns array of { cx, cy, endCx, endCy } in canvas coords.
             * Cached to avoid recomputation unless λ changes.
             */
            function computeDirectionField() {
                if (cachedLambda === lambda && directionFieldCache !== null) {
                    return directionFieldCache;
                }
                const arrows = [];
                // Sample grid from -2.5 to 2.5 with spacing DIR_GRID_SPACING
                const start = -2.5;
                const end = 2.5;
                for (let wx = start; wx <= end + 0.0001; wx += DIR_GRID_SPACING) {
                    for (let wy = start; wy <= end + 0.0001; wy += DIR_GRID_SPACING) {
                        const [vx, vy] = vectorField(wx, wy);
                        const mag = Math.sqrt(vx * vx + vy * vy);
                        if (mag < 1e-8) continue; // skip at exact equilibrium
                        // Normalize
                        const nx = vx / mag;
                        const ny = vy / mag;
                        // Convert to canvas
                        const { cx, cy } = worldToCanvas(wx, wy);
                        // Canvas-space vector (note y-flip)
                        const cvx = nx * SCALE;
                        const cvy = -ny * SCALE;
                        const cMag = Math.sqrt(cvx * cvx + cvy * cvy);
                        const scaleFactor = ARROW_LENGTH / cMag;
                        const endCx = cx + cvx * scaleFactor;
                        const endCy = cy + cvy * scaleFactor;
                        arrows.push({ cx, cy, endCx, endCy, dirX: cvx / cMag, dirY: cvy / cMag });
                    }
                }
                directionFieldCache = arrows;
                cachedLambda = lambda;
                return arrows;
            }

            // ---------- Drawing functions ----------
            /** Draw the Cartesian grid with light gray lines at integer coordinates */
            function drawGrid() {
                ctx.save();
                ctx.strokeStyle = '#e8e8e8';
                ctx.lineWidth = 0.7;
                for (let i = WORLD_MIN; i <= WORLD_MAX; i += 1) {
                    const { cx } = worldToCanvas(i, 0);
                    const { cy } = worldToCanvas(0, i);
                    // Vertical grid line
                    ctx.beginPath();
                    ctx.moveTo(cx, 0);
                    ctx.lineTo(cx, CANVAS_H);
                    ctx.stroke();
                    // Horizontal grid line
                    ctx.beginPath();
                    ctx.moveTo(0, cy);
                    ctx.lineTo(CANVAS_W, cy);
                    ctx.stroke();
                }
                ctx.restore();
            }

            /** Draw labeled axes with arrowheads */
            function drawAxes() {
                ctx.save();
                // Main axes
                ctx.strokeStyle = '#555';
                ctx.lineWidth = 1.2;
                ctx.beginPath();
                // x-axis
                const { cx: xAxisY } = worldToCanvas(0, 0); // cy of x-axis
                ctx.moveTo(0, xAxisY);
                ctx.lineTo(CANVAS_W, xAxisY);
                // y-axis
                const { cy: yAxisX } = worldToCanvas(0, 0); // cx of y-axis
                ctx.moveTo(yAxisX, 0);
                ctx.lineTo(yAxisX, CANVAS_H);
                ctx.stroke();

                // Arrowhead on positive x-axis
                const xTip = worldToCanvas(WORLD_MAX, 0);
                drawArrowheadOnAxis(xTip.cx, xTip.cy, 0); // pointing right
                // Arrowhead on positive y-axis
                const yTip = worldToCanvas(0, WORLD_MAX);
                drawArrowheadOnAxis(yTip.cx, yTip.cy, -Math.PI / 2); // pointing up (canvas up = negative angle)

                // Axis labels
                ctx.fillStyle = '#333';
                ctx.font = 'italic 13px "Segoe UI", "Helvetica Neue", Arial, sans-serif';
                ctx.textAlign = 'center';
                // x label
                ctx.fillText('x', CANVAS_W - 14, xAxisY - 10);
                // y label
                ctx.fillText('y', yAxisX + 14, 16);

                // Tick labels
                ctx.font = '11px "Segoe UI", "Helvetica Neue", Arial, sans-serif';
                ctx.fillStyle = '#666';
                for (let i = WORLD_MIN; i <= WORLD_MAX; i += 1) {
                    if (i === 0) continue;
                    const { cx: tx } = worldToCanvas(i, 0);
                    const { cy: ty } = worldToCanvas(0, i);
                    ctx.fillText(i.toString(), tx, xAxisY + 15);
                    if (i !== WORLD_MIN && i !== WORLD_MAX) {
                        ctx.fillText(i.toString(), yAxisX - 22, ty + 4);
                    }
                }
                // Origin label
                ctx.fillText('0', yAxisX - 14, xAxisY + 15);

                ctx.restore();
            }

            /** Small helper: draw an arrowhead at canvas point for axis end */
            function drawArrowheadOnAxis(cx, cy, direction) {
                const size = 9;
                const angle = direction;
                ctx.save();
                ctx.fillStyle = '#555';
                ctx.beginPath();
                ctx.moveTo(cx, cy);
                ctx.lineTo(
                    cx - size * Math.cos(angle - 0.45),
                    cy - size * Math.sin(angle - 0.45)
                );
                ctx.lineTo(
                    cx - size * Math.cos(angle + 0.45),
                    cy - size * Math.sin(angle + 0.45)
                );
                ctx.closePath();
                ctx.fill();
                ctx.restore();
            }

            /** Draw the direction field arrows */
            function drawDirectionField() {
                const arrows = computeDirectionField();
                ctx.save();
                ctx.strokeStyle = '#8899aa';
                ctx.fillStyle = '#8899aa';
                ctx.lineWidth = 1.0;
                for (const arr of arrows) {
                    const { cx, cy, endCx, endCy, dirX, dirY } = arr;
                    // Draw arrow shaft
                    ctx.beginPath();
                    ctx.moveTo(cx, cy);
                    ctx.lineTo(endCx, endCy);
                    ctx.stroke();
                    // Draw arrowhead
                    const hSize = ARROWHEAD_SIZE;
                    const angle = Math.atan2(dirY, dirX);
                    const barbAngle = 0.55; // ~31 degrees
                    ctx.beginPath();
                    ctx.moveTo(endCx, endCy);
                    ctx.lineTo(
                        endCx - hSize * Math.cos(angle - barbAngle),
                        endCy - hSize * Math.sin(angle - barbAngle)
                    );
                    ctx.lineTo(
                        endCx - hSize * Math.cos(angle + barbAngle),
                        endCy - hSize * Math.sin(angle + barbAngle)
                    );
                    ctx.closePath();
                    ctx.fill();
                }
                ctx.restore();
            }

            /** Draw the equilibrium point at (0,0) */
            function drawEquilibrium() {
                const { cx, cy } = worldToCanvas(0, 0);
                ctx.save();
                // Outer ring
                ctx.beginPath();
                ctx.arc(cx, cy, 7, 0, 2 * Math.PI);
                ctx.fillStyle = '#1a1a2e';
                ctx.fill();
                // Inner dot
                ctx.beginPath();
                ctx.arc(cx, cy, 3.5, 0, 2 * Math.PI);
                if (lambda < -0.005) {
                    ctx.fillStyle = '#2980b9'; // stable - blue
                } else if (lambda > 0.005) {
                    ctx.fillStyle = '#c0392b'; // unstable - red
                } else {
                    ctx.fillStyle = '#d4a017'; // Hopf point - gold
                }
                ctx.fill();
                // Thin border
                ctx.beginPath();
                ctx.arc(cx, cy, 7, 0, 2 * Math.PI);
                ctx.strokeStyle = '#333';
                ctx.lineWidth = 1.2;
                ctx.stroke();
                ctx.restore();
            }

            /** Draw the stable limit cycle when λ > 0 (circle of radius √λ) */
            function drawLimitCycle() {
                if (lambda <= 0.001) return; // no limit cycle for λ ≤ 0
                const radius = Math.sqrt(lambda);
                if (radius > WORLD_MAX) return; // too large to display meaningfully
                const { cx, cy } = worldToCanvas(0, 0);
                const rPx = radius * SCALE;
                ctx.save();
                ctx.setLineDash([8, 5]);
                ctx.strokeStyle = '#27ae60';
                ctx.lineWidth = 2.2;
                ctx.beginPath();
                ctx.arc(cx, cy, rPx, 0, 2 * Math.PI);
                ctx.stroke();
                ctx.setLineDash([]); // reset
                // Small label
                if (radius < 2.9) {
                    const labelPos = worldToCanvas(radius * 0.75, radius * 0.75);
                    ctx.fillStyle = '#1a6b3a';
                    ctx.font = 'italic 11px "Segoe UI", "Helvetica Neue", Arial, sans-serif';
                    ctx.fillText('r = √λ', labelPos.cx - 18, labelPos.cy - 8);
                }
                ctx.restore();
            }

            /** Draw all trajectory trails */
            function drawTrajectories() {
                for (const p of particles) {
                    const trail = p.trail;
                    if (trail.length < 2) {
                        // Draw just a dot for single-point trails
                        if (trail.length === 1) {
                            const { cx, cy } = worldToCanvas(trail[0].x, trail[0].y);
                            if (isInView(trail[0].x, trail[0].y)) {
                                ctx.save();
                                ctx.beginPath();
                                ctx.arc(cx, cy, 3, 0, 2 * Math.PI);
                                ctx.fillStyle = p.color;
                                ctx.fill();
                                ctx.restore();
                            }
                        }
                        continue;
                    }
                    // Draw polyline for the trail
                    ctx.save();
                    ctx.strokeStyle = p.color;
                    ctx.lineWidth = 1.8;
                    ctx.lineCap = 'round';
                    ctx.lineJoin = 'round';
                    ctx.globalAlpha = 0.75;
                    ctx.beginPath();
                    const firstPt = worldToCanvas(trail[0].x, trail[0].y);
                    ctx.moveTo(firstPt.cx, firstPt.cy);
                    for (let i = 1; i < trail.length; i++) {
                        const pt = worldToCanvas(trail[i].x, trail[i].y);
                        ctx.lineTo(pt.cx, pt.cy);
                    }
                    ctx.stroke();
                    // Draw current position as a brighter dot
                    const head = worldToCanvas(p.x, p.y);
                    ctx.globalAlpha = 1;
                    ctx.beginPath();
                    ctx.arc(head.cx, head.cy, 3.5, 0, 2 * Math.PI);
                    ctx.fillStyle = p.color;
                    ctx.fill();
                    ctx.strokeStyle = '#fff';
                    ctx.lineWidth = 0.8;
                    ctx.stroke();
                    ctx.restore();
                }
            }

            /** Main render: clear canvas and draw all layers */
            function render() {
                ctx.clearRect(0, 0, CANVAS_W, CANVAS_H);
                // Background
                ctx.fillStyle = '#fdfdfd';
                ctx.fillRect(0, 0, CANVAS_W, CANVAS_H);
                // Layers (back to front)
                drawGrid();
                drawDirectionField();
                drawLimitCycle();
                drawAxes();
                drawEquilibrium();
                drawTrajectories();
            }

            // ---------- Animation ----------
            /** Advance all particles by one RK4 step */
            function advanceParticles() {
                for (const p of particles) {
                    const next = rk4Step(p.x, p.y, RK4_DT);
                    p.x = next.x;
                    p.y = next.y;
                    p.trail.push({ x: p.x, y: p.y });
                    // Trim trail if too long
                    while (p.trail.length > MAX_TRAIL_LENGTH) {
                        p.trail.shift();
                    }
                }
            }

            /** Animation loop */
            function animate() {
                if (!isPlaying) {
                    // Still render once more to show current state
                    render();
                    animationId = null;
                    return;
                }
                advanceParticles();
                render();
                animationId = requestAnimationFrame(animate);
            }

            /** Start or restart the animation loop */
            function startAnimation() {
                if (animationId !== null) {
                    cancelAnimationFrame(animationId);
                    animationId = null;
                }
                if (isPlaying) {
                    animationId = requestAnimationFrame(animate);
                } else {
                    // Render once in paused state
                    render();
                }
            }

            // ---------- UI Updates ----------
            /** Update the info panel based on current λ */
            function updateInfoPanel() {
                // Lambda display
                lambdaDisplay.textContent = lambda.toFixed(2);
                lambdaDisplay.classList.remove('lambda-neg', 'lambda-zero', 'lambda-pos');
                if (lambda < -0.005) {
                    lambdaDisplay.classList.add('lambda-neg');
                } else if (lambda > 0.005) {
                    lambdaDisplay.classList.add('lambda-pos');
                } else {
                    lambdaDisplay.classList.add('lambda-zero');
                }

                // Eigenvalue display
                const realPart = lambda;
                eigenvalueDisplay.textContent =
                    (realPart >= 0 ? 'λ + i' : 'λ − i').replace('λ', realPart.toFixed(2));
                realPartDisplay.textContent = realPart.toFixed(2);

                // Stability classification
                stabilityBadge.classList.remove('stable-spiral', 'hopf-point', 'unstable-spiral');
                if (lambda < -0.005) {
                    stabilityBadge.textContent = 'Stable Spiral (Sink)';
                    stabilityBadge.classList.add('stable-spiral');
                    stabilityDescription.textContent =
                        'The origin is a stable spiral. All trajectories spiral inward toward the equilibrium. The real part of the eigenvalue is negative.';
                    limitCycleRow.style.display = 'none';
                } else if (lambda > 0.005) {
                    stabilityBadge.textContent = 'Unstable Spiral (Source)';
                    stabilityBadge.classList.add('unstable-spiral');
                    const rLC = Math.sqrt(lambda);
                    stabilityDescription.textContent =
                        'The origin is an unstable spiral. A stable limit cycle exists at radius r = √λ ≈ ' +
                        rLC.toFixed(3) +
                        '. Trajectories spiral outward from the origin toward the limit cycle, or inward from outside.';
                    limitCycleRow.style.display = 'flex';
                    limitCycleRadius.textContent = 'r = √λ ≈ ' + rLC.toFixed(3);
                } else {
                    stabilityBadge.textContent = 'Hopf Bifurcation Point';
                    stabilityBadge.classList.add('hopf-point');
                    stabilityDescription.textContent =
                        'This is the critical bifurcation point (λ = 0). The eigenvalues are purely imaginary (±i). The equilibrium is a center (non-hyperbolic). This is where the stable spiral loses stability and a limit cycle emerges.';
                    limitCycleRow.style.display = 'none';
                }
            }

            /** Handle λ change from slider */
            function onLambdaChange() {
                lambda = parseFloat(lambdaSlider.value);
                // Invalidate direction field cache
                cachedLambda = null;
                directionFieldCache = null;
                updateInfoPanel();
                // Re-render (even if paused)
                render();
            }

            /** Toggle play/pause */
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

            /** Reset all particles to initial conditions */
            function resetAll() {
                initParticles();
                // Invalidate cache in case λ changed during reset
                cachedLambda = null;
                directionFieldCache = null;
                updateInfoPanel();
                render();
                // Restart animation if playing
                if (isPlaying && animationId === null) {
                    startAnimation();
                }
            }

            /** Clear trails but keep particles at current positions */
            function clearTrails() {
                for (const p of particles) {
                    p.trail = [{ x: p.x, y: p.y }];
                }
                render();
                if (isPlaying && animationId === null) {
                    startAnimation();
                }
            }

            // ---------- Event listeners ----------
            lambdaSlider.addEventListener('input', onLambdaChange);
            playPauseBtn.addEventListener('click', togglePlayPause);
            resetBtn.addEventListener('click', resetAll);
            clearBtn.addEventListener('click', clearTrails);

            // Keyboard shortcut: Space to toggle play/pause
            document.addEventListener('keydown', function(e) {
                if (e.code === 'Space' && e.target === document.body) {
                    e.preventDefault();
                    togglePlayPause();
                }
            });

            // ---------- Initialization ----------
            function init() {
                initParticles();
                lambda = parseFloat(lambdaSlider.value);
                cachedLambda = null;
                directionFieldCache = null;
                updateInfoPanel();
                render();
                startAnimation();
            }

            init();

            // Log for verification
            console.log('Supercritical Hopf Bifurcation Visualizer initialized.');
            console.log('System: dx/dt = λx − y − x(x²+y²),  dy/dt = x + λy − y(x²+y²)');
            console.log('Eigenvalues at origin: λ ± i');
            console.log('Limit cycle (λ > 0): r = √λ');
            console.log('Controls: Slider for λ, Space to play/pause, buttons for reset/clear.');
        })();
    </script>
</body>
</html>
