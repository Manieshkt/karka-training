const https=require('https')

//https.request does not use threadpool
//It is a network I/O operation and not a cpu bound operation so it does matter the cpu core
const max=6
const start=Date.now()
for(let i=0;i<max;i++){
    https.request('https://www.google.com',(res)=>{
        res.on('data',()=>{})
        res.on('end',()=>{
            console.log(`Request : ${i+1}`,Date.now()-start)
        })
    }).end()
}
