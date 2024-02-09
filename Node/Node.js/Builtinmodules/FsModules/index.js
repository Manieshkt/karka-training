const { error } = require('console')
const fs=require('fs')

fs.readFile('./index.txt','utf-8',(error,data)=>{
    if(error){
        console.log(error)
    }
    else{
        console.log(data)
    }
})

fs.writeFileSync('./greet.txt','Hello ')

fs.writeFile('./greet.txt','Hello World !',{flag:'a'},(error)=>{
    if(error){
        console.log(error)
    }
    else{
        console.log('File Written.....')
    }
})