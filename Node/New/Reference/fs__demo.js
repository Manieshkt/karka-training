const fs=require('fs')
const path=require('path')

// fs.mkdir(path.join(__dirname,'text'),{},(err)=>{
//     if(err) throw err
//     console.log('Folder Created.....')
// })

fs.writeFile(path.join(__dirname,'text','demo.txt'),'Hello World ! ',(err)=>{
    if (err) throw err;
    console.log('File Written to.....')
})

fs.appendFile(path.join(__dirname,'text','demo.txt'),'This is Node.js ',(err)=>{
    if (err) throw err;
    console.log('File Appended to.....')
})

fs.readFile(path.join(__dirname,'text','demo.txt'),'utf8',(err,data)=>{
    if (err) throw err;
    console.log('File read .....')
    console.log(data)
})

fs.rename(path.join(__dirname,'text','demo.txt'),path.join(__dirname,'text','demoA.txt'),(err)=>{
    if(err) throw err;
    console.log('File name Changed ......')
})

fs.writeFile(path.join(__dirname,'os__demo.js'),'',(err)=>{
    if(err) throw err;
    console.log('OS file created .....')
})

fs.writeFile(path.join(__dirname,'url__demo.js'),'',(err)=>{
    if (err) throw err;
    console.log('url created')
})