console.log('one')
process.nextTick(()=>{
    console.log('Hello World ! ')
})
console.log('two')

Promise.resolve().then(()=>{
    console.log('This is Promise ')
})
process.nextTick(()=>{
    console.log('This is NextTick')
})


process.nextTick(()=>{
    console.log('Next Tick 1 ')
})
process.nextTick(()=>{
    console.log('Next Tick 2 ')
    process.nextTick(()=>{
        console.log('Next Tick inside Next Tick')
    })
})
process.nextTick(()=>{
    console.log('Next Tick 3 ')
})

Promise.resolve().then(()=>{
    console.log('This is Promise 1')
})
Promise.resolve().then(()=>{
    console.log('This is Promise 2')
    process.nextTick(()=>{
        console.log('Next Tick inside Promise')
    })
})
Promise.resolve().then(()=>{
    console.log('This is Promise 3')
})