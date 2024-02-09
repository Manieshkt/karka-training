// const fs=require('fs')

setImmediate(()=>{
    console.log('Set Immediate 1')
})
setImmediate(()=>{
    console.log('Set Immediate 2')
    process.nextTick(()=>{
        console.log('Next Tick inside set Immediate')
    })
    Promise.resolve().then(()=>{
        console.log('Promise inside set Immediate')
    })
})
setImmediate(()=>{
    console.log('Set Immediate 3')
})

// fs.readFile(__filename,()=>{
//     console.log('File read .....')
//     setImmediate(()=>{
//         console.log('Set Immediate inside Read File')
//     })
//     process.nextTick(()=>{
//         console.log('Next Tick inside Read FIle')
//     })
//     Promise.resolve().then(()=>{
//         console.log('Promise inside Read File')
//     })  
// })
// process.nextTick(()=>{
//     console.log('Next Tick 1')
// })
// Promise.resolve().then(()=>{
//     console.log('Promise 1')
// })
// setTimeout(()=>{
//     console.log('Set Timeout 1')
// },0)

// for(let i=0;i<20000000;i++){}