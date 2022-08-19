var chunkConfig = {
    CHUNK_WIDTH:100,
    CHUNK_HEIGHT:100,

    color:"#00ff00"
}

class ChunkArray {
    constructor(pos, rows, columns, config) {

        this.mainArray = new Array(rows)
        this.pos = pos

        this.id = newId()

        this.config = config
        this.rows = rows
        this.columns = columns

        let width = config.CHUNK_WIDTH*rows,
            height = config.CHUNK_HEIGHT*columns

        let chunksPos = v(pos.x-(width/2), pos.y-(height/2))

        for (let x = 0; x < rows; x++) {
            this.mainArray[x] = new Array(columns)
            for (let y = 0; y < columns; y++) {
                
                let chunkPos = v( chunksPos.x+(x*this.config.CHUNK_WIDTH), chunksPos.y+(y*this.config.CHUNK_HEIGHT) )

                this.mainArray[x][y] = new Chunk(chunkPos, config)
            }            
        }
    }
}
class Chunk {
    constructor(pos, config) {
        this.pos = pos
        this.config = {...config}

        this.mobiles = new Array()
    }
}

var chunk = {
    getChunk(pos, chunkArray){

        let ogPos = v( chunkArray.pos.x-((chunkArray.config.CHUNK_WIDTH*chunkArray.rows)/2) , chunkArray.pos.y-((chunkArray.config.CHUNK_HEIGHT*chunkArray.columns)/2))
        let clampedPos = v( clamp(pos.x, ogPos.x, ogPos.x+(chunkArray.config.CHUNK_WIDTH*chunkArray.rows)), clamp(pos.y, ogPos.y, ogPos.y+(chunkArray.config.CHUNK_HEIGHT*chunkArray.columns))),
            chunkPos = v( Math.floor(clampedPos.x/chunkArray.config.CHUNK_WIDTH), Math.floor(clampedPos.y/chunkArray.config.CHUNK_HEIGHT) )
        return {
            pos:chunkPos,
            ob:chunkArray.mainArray[chunkPos.x+(Math.floor(chunkArray.rows/2))][chunkPos.y+(Math.floor(chunkArray.columns/2))]
        }
        
    },
    removeMob(mob, chunkPos, chunkArray) {
        for (let i = 0; i < chunkArray[chunkPos.x][chunkPos.y].mobiles.length; i++) {
            const mobA = chunkArray[chunkPos.x][chunkPos.y].mobiles[i];
            if (mobA.id == mob.id) {
                chunkArray[chunkPos.x][chunkPos.y].mobiles.splice(i, 1)
                break
            }
        }
    },
    insertMob(mob, chunkPos, chunkArray) {

        let testForMob = true
        for (let i = 0; i < chunkArray.mainArray[chunkPos.x][chunkPos.y].mobiles.length; i++) {
            const mobA = chunkArray.mainArray[chunkPos.x][chunkPos.y].mobiles[i];
            if (mobA.id == mob.id) {
                testForMob = false
                break
            }
        }
        if (testForMob) chunkArray.mainArray[chunkPos.x][chunkPos.y].mobiles.push(mob)
    },
    moveMob:function(mob, fromPos, toPos, chunkArray) {
        Mob.update(mob)

        this.removeMob(mob, fromPos, chunkArray)
        this.insertMob(mob, toPos, chunkArray)


    },
    getMobs(chunks) {
        let returnArray = []
        for (let i = 0; i < chunks.length; i++) {
            returnArray.concat(chunks[i].mobiles)
        }
        return returnArray
    },
    getChunks(pos, width, height, chunkArray) {

        let returnArray = new Array()

        for (let x = 0; x < width; x++) {
               
            for (let y = 0; y < height; y++) {
                returnArray.push(chunkArray.mainArray[x+pos.x+Math.floor((chunkArray.rows)/2)][y+pos.y+Math.floor((chunkArray.columns)/2)])
            }     
        }

        return returnArray
    }
}

