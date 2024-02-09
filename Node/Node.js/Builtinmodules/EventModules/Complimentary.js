class Drink {
    servedrink(size) {
        if (size === 'large') {
            console.log('You get a complimentary drink')
        }
        else{
            console.log('No complimentary drinks')
        }
    }
}
module.exports=Drink