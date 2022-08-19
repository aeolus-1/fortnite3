class mob {
    constructor(pos, config) {
        this.pos = pos
        this.id = newId()
        
        this.chunk = {
            pos:chunk.getChunk(pos, mainChunks).pos,
            ob:chunk.getChunk(pos, mainChunks).ob
        }
        chunk.insertMob(this, this.chunk.pos, mainChunks)

        this.config = config
    }
}

var Mob = {
    update:function(mob){
        mob.chunk = {
            pos:chunk.getChunk(mob.pos, mainChunks).pos,
            ob:chunk.getChunk(mob.pos, mainChunks).ob
        }
    },
    move(mob, pos) {
        let preChunk = mob.chunk

        mob.pos = pos
        let newChunk = chunk.getChunk(mob.pos, mainChunks)
        console.log(newChunk)
        mob.chunk = {
            pos:newChunk.pos,
            ob:newChunk.ob
        }

        if (preChunk.ob.id != mob.chunk.ob.id) {
            chunk.moveMob(mob, preChunk.pos, mob.chunk.pos, mainChunks)
        }
    }
}