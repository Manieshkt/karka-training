const greet=async(name)=>{
    const {upperCase}=await import('upper-case')
    console.log(upperCase(`Hello I am ${name}`))
}
greet('Bruce Wayne')

module.exports=greet