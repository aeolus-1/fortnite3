function v(x, y) {
    return {x:x,y:y}
}

function clamp(num, min, max) {
    if (num > max) {
        num = max
    }
    if (num < min) {
        num = min
    }
    return num
}

var nextId = 0
function newId() {
    nextId += 1
    return nextId
}