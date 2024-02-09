// setTimeout(()=>{
//     console.log('Timeout 1')
// },1000)
// setTimeout(()=>{
//     console.log('Timeout 2')
// },500)
// setTimeout(()=>{
//     console.log('Timeout 3')
// },0)

setTimeout(()=>{
    console.log('Timeout 1')
},0)
setTimeout(()=>{
    console.log('Timeout 2')
    process.nextTick(()=>{
        console.log('Next Tick inside Timeout')
    })
    Promise.resolve().then(()=>{
        console.log('Promise inside Timeout')
    })
},0)
setTimeout(()=>{
    console.log('Timeout 3')
},0)

process.nextTick(()=>{
    console.log('Next Tick 1')
})
process.nextTick(()=>{
    console.log('Next Tick 2')
    process.nextTick(()=>{
        console.log('Next Tick inside Next Tick')
    })
})
Promise.resolve().then(()=>{
    console.log('Promise 1')
})
Promise.resolve().then(()=>{
    console.log('Promise 2')
    process.nextTick(()=>{
        console.log('Next Tick inside Promise')
    })
})
Promise.resolve().then(()=>{
    console.log('Promise 3')
})