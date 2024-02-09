const Pizza=require('./Pizzashop')
const Drink=require('./Complimentary')

const pizzashop=new Pizza()
const juice=new Drink()
pizzashop.on('order',(size,topping)=>{
    console.log(`${size} Pizza is Ordered with ${topping} `)
    juice.servedrink(size)
})

pizzashop.order('large','mushroom')
pizzashop.displayordernumber()