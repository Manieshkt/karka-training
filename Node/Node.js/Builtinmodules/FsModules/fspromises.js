const fs=require('fs/promises')

fs.readFile('./greet.txt','utf-8')
.then((data)=>console.log(data))
.catch((error)=>console.log(error))

console.log('one')

//using async await
const readFile=async()=>{
    try{
        const data=await fs.readFile('./index.txt','utf-8')
        console.log(data)
    }
    catch(error){
        console.log(error)
    }
}
readFile()