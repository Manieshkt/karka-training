const cluster=require('cluster')
const http=require('http')
const OS=require('os')

console.log(OS.cpus().length)

    if(cluster.isMaster){
        console.log(`Master process ${process.pid} is running`)
        cluster.fork()
        cluster.fork()
    }
    else{
        console.log(`Worker ${process.pid} started`)
        const server=http.createServer((req,res)=>{
            if(req.url==='/'){
                res.writeHead(200,{"content-Type":"text/Plain"})
                res.end("Home Page")
            }
            else if(req.url==='/about'){
                for (let i=0;i<6000000000;i++){}
                res.writeHead(200,{"content-Type":"text/Plain"})
                res.end("About Page")
            }
        })
        server.listen(8000,()=>console.log('Server Running in Port ......'))
    }