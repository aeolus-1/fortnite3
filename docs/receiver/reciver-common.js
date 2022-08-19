function v(x=0,y=0) {
    return {x:x, y:y}
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
function randInt(min, max) {
    return Math.floor(Math.random() * ((max + 1) - min)) + min;
}