const requestChannel = new BroadcastChannel("deip-display2");
const sendChannel = new BroadcastChannel("deip-display1");

function requestRender(pos) {
    let message = btoa(JSON.stringify({
        request:{
            pos:pos
        }
    }))
    sendChannel.postMessage(message);
} 
function requestControl(movement, id, chunkPos) {
    let message = btoa(JSON.stringify({
        control:{
            movement:movement,
            id:id,
            chunkPos:chunkPos,
        }
    }))
    sendChannel.postMessage(message);
} 

requestChannel.onmessage = function (ev) {
    mobiles = JSON.parse(atob(ev.data))
}

var mobiles = new Array()