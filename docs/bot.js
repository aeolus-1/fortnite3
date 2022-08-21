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
    moveToAverage(mob) {
        mob.target = {...mob.pos}

        let averagePos = v(0,0)
        for (let i = 0; i < mob.closestFriend.length; i++) {
            const friend = mob.closestFriend[i];
            averagePos.x += friend.pos.x
            averagePos.y += friend.pos.y
            if (false && friend.boss) {
                averagePos.x += friend.pos.x*9
                averagePos.y += friend.pos.y*9
                plus += 9
            }

        }
        var plus = 0
        if (mob.build.drone && mob.bot.active) {
            averagePos.x += mob.shotBy.pos.x*10
            averagePos.y += mob.shotBy.pos.y*10
            plus += 10
        }
        averagePos.x /= mob.closestFriend.length+plus
        averagePos.y /= mob.closestFriend.length+plus

        let dst = getDistance(mob.pos, averagePos)

        mob.bot.movingStrength = -1
        mob.bot.movingDirection = getAngle(averagePos, mob.pos)+(Math.PI)

        if (dst < 200) {
            mob.bot.movingStrength = 0
        }
        
    },
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

