const http=require('http')
const fs=require('fs')
const data=require('./data.json')
const { json } = require('stream/consumers')

const server=http.createServer((req,res)=>{
    // res.end(req.url)
    if (req.url==='/'){
        res.writeHead(200)
        const name='Bruce Wayne'
        let html=fs.readFileSync(__dirname+'/index.html','utf-8')
        html=html.replace('{{name}}',name)
        res.end(html)
    }
    else if(req.url==="/about"){
        res.writeHead(200)
        const name="Joker"
        const age=28
        let html=fs.readFileSync(__dirname+'/about.html','utf-8')
        html=html.replace('{{name}}',name).replace('{{age}}',age)
        res.end(html)
    }
    else if(req.url==='/api'){
        res.writeHead(200)
        res.end(JSON.stringify(data))
    }
    else{
        res.writeHead(404)
        res.end('Page Not Found')
    }
})
server.listen(3000,()=>{
    console.log('Server running....')
})