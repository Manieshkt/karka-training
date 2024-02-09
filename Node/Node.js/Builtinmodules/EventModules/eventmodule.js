const EventEmiiter=require('events')

const emitter=new EventEmiiter()
// console.log(emitter)

//listener
emitter.on('Order Pizza',(size,topping)=>{
    console.log(`Order Recieved - Cooking ${size} Pizza with ${topping}`)
})
emitter.on('Order Pizza',(size)=>{
    if (size==='large'){
    console.log('You get Cool drinks')
    }
})
console.log('Hello')
//order
emitter.emit('Order Pizza','large','mushroom')