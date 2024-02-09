const http=require('http')
const fs=require('fs')

const server=http.createServer((req,res)=>{
    res.writeHead(200)
    const name='Bruce Wayne'
    // fs.createReadStream(__dirname+'/index.html').pipe(res)

    // const html=fs.readFile('./index.html','utf-8',(error,html)=>{
    //     if (error){
    //         res.write("Error Reading the file")
    //         res.end()
    //     }
    //     else{
    //         res.end(html)
    //     }
    // })

    let html=fs.readFileSync('./index.html','utf-8')
    html=html.replace('{{name}}',name)
    res.end(html)

})
server.listen(3000,()=>{
    console.log('Server running in the port.....')
})