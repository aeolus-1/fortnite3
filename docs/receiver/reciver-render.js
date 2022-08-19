var Render = {
    renderMobiles(mobs) {

        let ctx = getCtx()

        for (let i = 0; i < mobs.length; i++) {
            const mob = mobs[i];
            
            this.renderMob(mob, ctx)
        }
    },
    renderMob(mob, ctx) {

        ctx.save()
        let player = Mob.getMob(playerId, mobiles)

        

        mob.pos.x += (canvas.width/2)+camera.x
        mob.pos.y += (canvas.height/2)+camera.y

        

        for (let i = 0; i < mob.guns.length; i++) {
            let gun = mob.guns[i];
            ctx.save()

            ctx.translate(mob.pos.x, mob.pos.y)
            ctx.rotate((mob.rotation + (gun.pos * (Math.PI/180))))
            ctx.translate(-mob.pos.x, -mob.pos.y)
            

            ctx.fillStyle = "#000000"
            ctx.fillRect(mob.pos.x+(mob.size*0.8), mob.pos.y - ((gun.width) / 2), (gun.height*1.5), gun.width)
            ctx.strokeStyle = "#707070"
            ctx.lineWidth = 2

            ctx.restore()
        }

        ctx.fillStyle = mob.team

        ctx.beginPath()
        ctx.arc(mob.pos.x, mob.pos.y, mob.size, 0, Math.PI*2)
        ctx.closePath()
        ctx.fill()

        ctx.restore()
/*
        let length = 25,
            width = 5,
            height = 20

        ctx.fillStyle = "#696969"
        ctx.fillRect(mob.pos.x-(length/2), mob.pos.y-height-width, length, width)

        ctx.fillStyle = "#7fff7f"
        ctx.fillRect(mob.pos.x-(length/2), mob.pos.y-height-width, length*(mob.build.health/mob.build.maxHealth), width)
            */


    }
}
function runCamera(ctx) {

    
    let player = Mob.getMob(playerId, mobiles)

    if (player) {
        camera.x = -player.pos.x
        camera.y = -player.pos.y
    }
    

    let grid = 30
    ctx.lineWidth = 0.2


    let mod = v(
        (((camera.x/grid) - Math.floor(camera.x / grid)) * grid),
        (((camera.y/grid) - Math.floor(camera.y / grid)) * grid)
        )
    ctx.strokeStyle = "#696969"


    for (let i = -10; i < ((window.innerWidth) / grid)+10; i++) {
        ctx.beginPath()
        ctx.moveTo(i * grid + mod.x, mod.y)

        ctx.lineTo(i * grid + mod.x, (window.innerHeight) + mod.y)

        ctx.closePath()

        ctx.strokeStyle = "#000000"
        ctx.stroke()
    }
    for (let i = -10; i < ((window.innerWidth) / grid)+10; i++) {
        ctx.beginPath()
        ctx.moveTo(mod.x, i * grid + mod.y)

        ctx.lineTo((window.innerWidth) + mod.x, i * grid + mod.y)

        ctx.closePath()

        ctx.strokeStyle = "#000000"
        ctx.stroke()
    }
    
    
}



function renderLoop() {


    let ctx = getCtx()
    ctx.clearRect(0,0, canvas.width, canvas.height)
    runCamera(ctx)

    if (mobiles) Render.renderMobiles(mobiles)

    requestRender(chunk.getChunk(camera))
}

setInterval(renderLoop, 10)