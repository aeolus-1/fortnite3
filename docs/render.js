
function align(ctx) {
    ctx.translate((window.innerWidth*0.5)-(camera.x*globalScale), (window.innerHeight*0.5)-(camera.y*globalScale))

    


}
function renderMobs() {
    let loadedMobs = new Array()
    for (let i = 0; i < players.length; i++) {
        const player = players[i];
        let playerPos = v(player.chunkPos.x-2, player.chunkPos.y-2)

        let chunks = mainChunks.requestChunks(playerPos.x, playerPos.y, 5, 5)
        let mobs = mainChunks.getMobiles(chunks)
        loadedMobs = [...loadedMobs, ...mobs]
    }


    for (let i = 0; i < loadedMobs.length; i++) {
        const mob = loadedMobs[i];
        Mob.render(mob, getCtx())
        
    }

}
function clipSight(ctx) {
    var sightPath = new Path2D()
    sightPath.arc(camera.x,camera.y, cameraTarget.build.sight, 0, Math.PI*2, false)

    ctx.clip(sightPath)
}
var globalScale = 1
function renderLoop() {
    globalScale = globalScale = (()=>{
        var smallest = Math.min(window.innerWidth, window.innerHeight)
        return (smallest/2)/cameraTarget.build.sight
    })()
    let ctx = getCtx()
    ctx.save()

    
    ctx.fillStyle = "#efefef"
    ctx.fillRect(0, 0, window.innerWidth, window.innerHeight)



    align(ctx)

   

    
    ctx.scale(globalScale, globalScale)



    clipSight(ctx)



    

    ctx.fillStyle = "#fff"
    ctx.fillRect(-2*window.innerWidth/globalScale,-2*window.innerHeight/globalScale, 4*window.innerWidth/globalScale, 4*window.innerHeight/globalScale)




   




    runCamera(ctx)



    

    renderChunks(ctx)
    renderMobs()

    

    ctx.restore()

    ctx.fillStyle = "#000"
    
    Chat.render(ctx)


    ctx.fillText(Math.round(framerate), 10, 10)
}

function renderChunks(ctx) {
    

    let nearbyChunks = mainChunks.requestChunks(v(player1.chunk.pos.x-2, player1.chunk.pos.y-2), 5, 5)

    for (let x = 0; x < nearbyChunks.length; x++) {
        
            let chunk = nearbyChunks[x];
            
            ctx.strokeStyle = "#00ff00"
            ctx.lineWidth = 3
            ctx.strokeRect(chunk.pos.x, chunk.pos.y, chunk.config.CHUNK_WIDTH, chunk.config.CHUNK_HEIGHT)

        
        
    }

    

    
}

function runCamera(ctx) {
    


    camera = v(
        camera.x-((camera.x-cameraTarget.pos.x)*0.1),
        camera.y-((camera.y-cameraTarget.pos.y)*0.1),
    )
    var c = v(camera.x/globalScale, camera.y/globalScale)

    function drawGrid(size) {
        let grid = size/2

        var dim = v(
            window.innerWidth/globalScale,
            window.innerHeight/globalScale
        )


        let mod = v(
            (Math.floor((c.x*globalScale)/grid)*grid),
            (Math.floor((c.y*globalScale)/grid)*grid)
            )


        var bu = 8

        for (let i = -bu; i < ((dim.x) / grid)+bu; i++) {
            ctx.beginPath()
            ctx.moveTo((i * grid) + mod.x, mod.y-(bu*grid))

            ctx.lineTo(i * grid + mod.x, (dim.y) + mod.y + (bu*grid))

            ctx.closePath()

            ctx.stroke()
        }
        
        for (let i = -bu; i < ((dim.y) / grid)+bu; i++) {
            ctx.beginPath()
            ctx.moveTo(mod.x-(bu*grid), i * grid + mod.y)

            ctx.lineTo((dim.x+(bu*grid)) + mod.x, i * grid + mod.y)

            ctx.closePath()

            ctx.stroke()
        }
    }
    ctx.save()

    ctx.lineWidth = 1
    ctx.strokeStyle = "#696969"
    
    
    ctx.translate(-(window.innerWidth*0.5)/globalScale, -(window.innerHeight*0.5)/globalScale)    
    
    drawGrid(mainChunks.options.width)

    ctx.lineWidth = 2
    ctx.strokeStyle = "#0f0"


    ctx.restore()
    //drawGrid(mainChunks.options.width*mainChunks.options.rows)

    //ctx.translate(window.innerWidth/2, window.innerHeight/2)

    
    
}

