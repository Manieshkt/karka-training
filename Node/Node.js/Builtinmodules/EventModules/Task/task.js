const EventEmitter=require('events')

class Task extends EventEmitter{
    constructor(){
        super(),
        this.task
    }
    addTask(task1,task2){
        this.emit('add',task1,task2)
    }
    status(task1,task2){
        this.emit('status',task1,task2)
    }
    completed(task1,task2){
        this.emit('completed',task1,task2)
    }
}
module.exports=Task