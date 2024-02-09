const fs=require('fs')

fs.readFile(__filename,()=>{
    console.log('File read .....')
})
process.nextTick(()=>{
    console.log('Next Tick 1')
})
Promise.resolve().then(()=>{
    console.log('Promise 1')
})
setTimeout(()=>{
    console.log('Set Timeout 1')
},0)

//Here I/O Polling happens tahts why setImmediate is logged First
setImmediate(()=>{
    console.log('Set Immediate 1')
})
for(let i=0;i<20000000;i++){}