const http=require('http')
const data=require('./data.json')

const server=http.createServer((req,res)=>{
    res.writeHead(200)
    res.end(JSON.stringify(data))
})
server.listen(3000,()=>{
    console.log('Server Running in the Port.....')
})