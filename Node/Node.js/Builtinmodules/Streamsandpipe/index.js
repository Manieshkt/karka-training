const fs =require('fs')

const readablestream=fs.createReadStream('./first.txt',{
    encoding:'utf-8',
    highWaterMark:2
})

const writeablestream=fs.createWriteStream('./second.txt')

readablestream.pipe(writeablestream)

// readablestream.on('data',(chunk)=>{
//     console.log(chunk)
//     writeablestream.write(chunk)
// })