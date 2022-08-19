var bots = {
    starter(mob) {

        if (mob.closestEnemy != undefined){

            let dst = getDistance(mob.pos, mob.closestEnemy.pos)
            if (dst > mob.build.range) {
                mob.bot.moving = true
                mob.bot.movingDirection = getAngle(mob.closestEnemy.pos, mob.pos)
            } else {
                mob.bot.moving = false
            }

            let addedVel = v(mob.closestEnemy.vel.x-mob.vel.x, mob.closestEnemy.vel.y-mob.vel.y)
            
            if (mob.build.guns[0] == undefined) console.log(mob.build)
            let bulletSpeed = mob.build.guns[0].bullet.build.speed

            let newPos = Bot.leadMovingTarget(mob.pos, mob.closestEnemy.pos, addedVel, bulletSpeed)
            if (newPos == null) newPos = mob.closestEnemy.pos

            mob.rotation = getAngle(newPos, mob.pos)
            mob.target = {...newPos}
            Tank.shoot(mob)
        } else if (mob.closestFriend) {
            let averagePos = v(0,0)
            for (let i = 0; i < mob.closestFriend.length; i++) {
                const friend = mob.closestFriend[i];
                averagePos.x += friend.pos.x
                averagePos.y += friend.pos.y
            }
            averagePos.x /= mob.closestFriend.length
            averagePos.y /= mob.closestFriend.length

            mob.bot.moving = true
            mob.bot.movingDirection = getAngle(averagePos, mob.pos)

        }

        if (mob.bot.moving) {
            mob.vel = v(Math.cos(mob.bot.movingDirection), Math.sin(mob.bot.movingDirection))
        }
    }
}