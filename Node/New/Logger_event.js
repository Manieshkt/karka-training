const EventEmitter= require('events');
const uuid=require('uuid')
// console.log(uuid)

class Logger extends EventEmitter{
    log(msg){
        this.emit('message',{id:uuid.v4(),msg})
    }
}

module.exports=Logger