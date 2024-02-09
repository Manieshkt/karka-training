const http=require('http')
const fs=require('fs')

const server=http.createServer((req,res)=>{
    res.writeHead(200)
    const name="Joker"
    const age=24
    let html=fs.readFileSync(__dirname+'/practice.html','utf-8')
    html=html.replace('{{name}}',name).replace('{{age}}',age)
    res.end(html)
})
server.listen(3000,()=>{
    console.log('Server running .....')
})