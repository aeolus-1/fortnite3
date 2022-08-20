var bots = {
    classRammer(mob) {

    },
    starter(mob) {

        if (mob.closestEnemy != undefined){

            let dst = getDistance(mob.pos, mob.closestEnemy.pos)
            if (dst < mob.build.sight) {
                mob.bot.moving = true
                mob.bot.movingDirection = getAngle(mob.closestEnemy.pos, mob.pos)
            } 
            var rangeDst = dst-mob.build.range
            if (Math.abs(rangeDst)> 50) {
                mob.bot.movingStrength = Math.sign(rangeDst)
                console.log(Math.sign(rangeDst), rangeDst)
            }
            
            var m = 1
            let addedVel = v((mob.closestEnemy.vel.x+mob.vel.x)*m, (mob.closestEnemy.vel.y+mob.vel.y)*m)
            
            if (mob.build.guns[0] == undefined) console.log(mob.build)
            let bulletSpeed = mob.build.guns[0].bullet.build.speed

            let newPos = Bot.leadMovingTarget(mob.pos, mob.closestEnemy.pos, addedVel, bulletSpeed)
            if (newPos == null) newPos = mob.closestEnemy.pos

            mob.rotation = getAngle(newPos, mob.pos)
            mob.target = {...newPos}

            if (dst < mob.build.range) {
                Tank.shoot(mob)

            }
            
        } else if (mob.closestFriend) {
            Bot.moveToAverage(mob)

        }

        
    },


    megaMine(mob) {

        if (mob.closestEnemy != undefined){

            let dst = getDistance(mob.pos, mob.closestEnemy.pos)

            mob.bot.moving = true
            mob.bot.movingDirection = getAngle(mob.closestEnemy.pos, mob.pos)

            mob.bot.movingStrength = (dst<200)?1:0.05


            
        } else if (mob.closestFriend) {
            Bot.moveToAverage(mob)
        }

        
    }
}