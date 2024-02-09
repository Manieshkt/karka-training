const EventEmiiter=require('events')

class Pizzashop extends EventEmiiter{
    constructor(){
        super()
        this.ordernumber=0
    }
    order(size,topping){
        this.ordernumber++
        this.emit('order',size,topping)
    }
    displayordernumber(){
        console.log(`Current order number : ${this.ordernumber}`)
    }
}
module.exports=Pizzashop