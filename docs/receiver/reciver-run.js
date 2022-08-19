var camera = v()

var chunk = {
    getChunk(pos){

        let chunkArray = {
            pos:v(0,0),
            rows:750,
            columns:750,
            config:{
                CHUNK_HEIGHT:500,
                CHUNK_WIDTH:500
            }
        }

        let ogPos = v( chunkArray.pos.x-((chunkArray.config.CHUNK_WIDTH*chunkArray.rows)/2) , chunkArray.pos.y-((chunkArray.config.CHUNK_HEIGHT*chunkArray.columns)/2))
        let clampedPos = v( clamp(pos.x, ogPos.x, ogPos.x+(chunkArray.config.CHUNK_WIDTH*chunkArray.rows)), clamp(pos.y, ogPos.y, ogPos.y+(chunkArray.config.CHUNK_HEIGHT*chunkArray.columns))),
            chunkPos = v( Math.floor(clampedPos.x/chunkArray.config.CHUNK_WIDTH), Math.floor(clampedPos.y/chunkArray.config.CHUNK_HEIGHT) )
        return chunkPos
        
    },
}

var playerId = 640002

var Mob = {
    getMob(id, mobs) {

        for (let i = 0; i < mobs.length; i++) {
            const mob = mobs[i];
            if (mob.id == id) {
                return mob
            }
        }
    }
}