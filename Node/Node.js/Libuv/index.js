const fs=require('fs')

console.log('first')

fs.readFile(__dirname+'/file.txt','utf-8',(err,data)=>{
    if(data){
        console.log(data)
    }
    else{
        console.log(err)
    }
})

console.log('last')