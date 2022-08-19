
function align(ctx) {
    ctx.translate(window.innerWidth/2, window.innerHeight/2)
}
function renderLoop() {
    let ctx = getCtx()

    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight)

    

    ctx.save()
    align(ctx)

    renderChunks(ctx)

    
    

    ctx.beginPath()
    ctx.arc(jacob.pos.x, jacob.pos.y, 5, 0, Math.PI*2)
    ctx.closePath()
    ctx.fill()

    ctx.restore()
}

function renderChunks(ctx) {
    let nearbyChunks = chunk.getChunks(v(jacob.chunk.pos.x-2, jacob.chunk.pos.y-2), 5, 5, mainChunks)

    for (let x = 0; x < nearbyChunks.length; x++) {
        
            let chunk = nearbyChunks[x];
            
            ctx.fillStyle = "#ff7000"
            ctx.fillRect(chunk.pos.x, chunk.pos.y, chunk.config.CHUNK_WIDTH, chunk.config.CHUNK_HEIGHT)

        
        
    }

    nearbyChunks = chunk.getChunks(v(jacob.chunk.pos.x-1, jacob.chunk.pos.y-1), 3, 3, mainChunks)

    for (let x = 0; x < nearbyChunks.length; x++) {
        
            let chunk = nearbyChunks[x];
            
            ctx.fillStyle = "#ffff00"
            ctx.fillRect(chunk.pos.x, chunk.pos.y, chunk.config.CHUNK_WIDTH, chunk.config.CHUNK_HEIGHT)

        
        
    }

    nearbyChunks = chunk.getChunks(v(jacob.chunk.pos.x, jacob.chunk.pos.y), 1, 1, mainChunks)

    for (let x = 0; x < nearbyChunks.length; x++) {
        
            let chunk = nearbyChunks[x];
            
            ctx.fillStyle = "#ff0000"
            ctx.fillRect(chunk.pos.x, chunk.pos.y, chunk.config.CHUNK_WIDTH, chunk.config.CHUNK_HEIGHT)

        
        
    }

    
}

