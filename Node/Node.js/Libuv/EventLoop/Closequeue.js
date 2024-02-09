const fs=require('fs')

const readableStream=fs.createReadStream(__filename)
readableStream.close()

readableStream.on('close',()=>{
    console.log('Readable stream close event callback')
})
setTimeout(()=>{
    console.log('set Timeout 1')
})
setImmediate(()=>{
    console.log('set Immediate 1')
})
process.nextTick(()=>{
    console.log('Next Tick 1')
})
Promise.resolve().then(()=>{
    console.log('Promise 1')
})
