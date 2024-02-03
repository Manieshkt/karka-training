const EventEmitter=require('events')
console.log(EventEmitter)

class MyEmitter extends EventEmitter{}

const myEmitter=new MyEmitter()
myEmitter.on('event',()=>console.log('Event Fired .....'))
myEmitter.emit('event')