const requestChannel = new BroadcastChannel("deip-display1");
const sendChannel = new BroadcastChannel("deip-display2");

requestChannel.onmessage = function (ev) {
    let ob = JSON.parse(atob(ev.data))

    if (ob.request) {
        let mobData = Sender.inputData(ob.request.pos)
        sendChannel.postMessage(mobData);
    } else if (ob.control) { 
        let mobs = chunk.getMobs(chunk.getChunks(v(ob.control.chunkPos.x-2, ob.control.chunkPos.y-2), 5, 5, mainChunks))
        let mob = chunk.findMob(ob.control.id, mobs)

        let angle = getAngle(v(0,0), ob.control.movement)
            
        mob.vel.x += Math.cos(angle) * 0.2 * mob.build.speed
        mob.vel.y += Math.sin(angle) * 0.2 * mob.build.speed

    }
}

var Sender = {
    getRenderDataArray(mobs) {
        let returnArray = new Array()

        for (let i = 0; i < mobs.length; i++) {
            const mob = mobs[i];
            returnArray.push(Tank.getRenderData(mob))
        }

        return returnArray
    },
    inputData(chunkCoords) {
        return btoa(JSON.stringify(Sender.getRenderDataArray(chunk.getMobs(chunk.getChunks(v(chunkCoords.x-2, chunkCoords.y-2), 5, 5, mainChunks)))))
    }
}


