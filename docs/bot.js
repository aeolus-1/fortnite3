function quad(a, b, c) {
    let sol = null;
    if (Math.abs(a) < 1e-6) {
        if (Math.abs(b) < 1e-6) {
            sol = Math.abs(c) < 1e-6 ? [0, 0] : null;
        } else {
            sol = [-c / b, -c / b];
        }
    } else {
        let disc = b * b - 4 * a * c;
        if (disc >= 0) {
            disc = Math.sqrt(disc);
            a = 2 * a;
            sol = [(-b - disc) / a, (-b + disc) / a];
        }
    }
    return sol;
}

var Bot = {
    leadMovingTarget(player, enemy, enemyVel, v) {
        let tx = enemy.x - player.x;
        let ty = enemy.y - player.y;
        let tvx = enemyVel.x;
        let tvy = enemyVel.y;

        // Get quadratic equation components
        let a = tvx * tvx + tvy * tvy - v * v;
        let b = 2 * (tvx * tx + tvy * ty);
        let c = tx * tx + ty * ty;

        // Solve quadratic
        let ts = quad(a, b, c); // See quad(), below

        // Find smallest positive solution
        let sol = null;
        if (ts) {
            let t0 = ts[0];
            let t1 = ts[1];
            let t = Math.min(t0, t1);
            if (t < 0) t = Math.max(t0, t1);
            if (t > 0) {
                sol = {
                    x: enemy.x + enemyVel.x * t,
                    y: enemy.y + enemyVel.y * t
                };
            }
        }

        return sol



    }
}

