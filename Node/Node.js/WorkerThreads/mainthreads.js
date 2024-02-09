const http=require('http')
const {Worker}=require('worker_threads')

const server=http.createServer((req,res)=>{
    if(req.url==='/'){
        res.writeHead(200,{"content-Type":"Text/Plain"})
        res.end('Home Page')
    }
    else if(req.url==='/about'){
        const worker=new Worker("./workerthreads.js")
        worker.on("message",(j)=>{
        res.writeHead(200,{"content-Type":"Text/Plain"})
        res.end(`About Page ${j}`)
    })
    }
})
server.listen(8000,()=>console.log("Server running on Port ....."))