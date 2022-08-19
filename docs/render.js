
function align(ctx) {
    ctx.translate((window.innerWidth/2)-camera.x, (window.innerHeight/2)-camera.y)
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
function renderLoop() {
    let ctx = getCtx()

    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight)

    runCamera(ctx)

    

    ctx.save()
    align(ctx)

    renderChunks(ctx)
    renderMobs()
    

    ctx.restore()

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
    camera = player1.pos
    var c = camera

    function drawGrid(size) {
        let grid = size


        let mod = v(
            -c.x   +   (Math.floor(c.x/grid)*grid),
            -c.y   +   (Math.floor(c.y/grid)*grid)
            )


        var bu = 2

        for (let i = -bu; i < ((window.innerWidth) / grid)+bu; i++) {
            ctx.beginPath()
            ctx.moveTo((i * grid) + mod.x, mod.y-(bu*grid))

            ctx.lineTo(i * grid + mod.x, (window.innerHeight) + mod.y + (bu*grid))

            ctx.closePath()

            ctx.stroke()
        }
        
        for (let i = -bu; i < ((window.innerHeight) / grid)+bu; i++) {
            ctx.beginPath()
            ctx.moveTo(mod.x-(bu*grid), i * grid + mod.y)

            ctx.lineTo((window.innerWidth+(bu*grid)) + mod.x, i * grid + mod.y)

            ctx.closePath()

            ctx.stroke()
        }
    }
    ctx.lineWidth = 0.5
    ctx.strokeStyle = "#696969"
    drawGrid(mainChunks.options.width*0.2)

    ctx.lineWidth = 2
    ctx.strokeStyle = "#0f0"
    drawGrid(mainChunks.options.width)
    
    
}

