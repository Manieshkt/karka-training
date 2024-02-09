const greet=(name)=>{
    console.log(`hi ${name}`)
}
const higherOrderFunction=(callback)=>{
    const name='Maniesh'
    callback(name)
}
higherOrderFunction(greet)