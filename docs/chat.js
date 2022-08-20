var Chat = {
    log:new Array(),
    submitMsg(text) {
        Chat.log.push({msg:text})
    },


    render(ctx) {
        for (let i = 0; i < Chat.log.length; i++) {
            const log = Chat.log[i];
            ctx.fillText(log.msg, 10,(window.innerHeight-10)-(i*13))
        }
    }
}

