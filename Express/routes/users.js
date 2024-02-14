const express=require('express')
const router=express.Router()

const loggingMiddleware=(req,res,next)=>{
    console.log(`${req.method}-${req.url}`)
    next()
}
router.use(loggingMiddleware)

const mockusers=[
    {id:1,username:'Bruce',displayname:'Bruce Wayne'},
    {id:2,username:'Wayne',displayname:'Wayne Tech'},
    {id:3,username:'Clark',displayname:'Clark Kent'}
]

router.get('/',loggingMiddleware,(req,res)=>{

console.log(req.query)
const {query:{filter,value},}=req
    
if(filter && value){
    const fil=mockusers.filter((user)=>user[filter].includes(value))
    console.log(fil)
    res.send(fil)
}
else{
    res.send(mockusers)
}
})

router.post('/',(req,res)=>{
console.log(req.body)
const {body}=req
const newUser={id:mockusers.length+1,...body}
mockusers.push(newUser)
res.status(201).send(newUser)
})

router.get('/:id',(req,res)=>{
console.log(req.params)
const parsedID=parseInt(req.params.id)
if (isNaN(parsedID)){
   res.status(400).send({msg:'Bad Request .Invalid ID'})
}
const finduser=mockusers.find((users)=>users.id===parsedID)
console.log(finduser)
if(!finduser){
    res.sendStatus(404)
}
else{
    res.send(finduser)
}
}) 


router.put('/:id',(req,res)=>{
const {
    body,
    params:{id},
}=req
const parsedID=parseInt(id)
if(isNaN(parsedID)){
    res.sendStatus(400)
}
const finduser=mockusers.findIndex((user)=>user.id===parsedID)
if(finduser !==-1 ){
    mockusers[finduser]={id:parsedID,...body}
    res.sendStatus(200)
}
else{
    res.sendStatus(400)
}
})

router.patch('/:id',(req,res)=>{
const{
    body,
    params:{id}
}=req
const parsedID=parseInt(id)
const finduser=mockusers.findIndex((user)=>user.id===parsedID)
if(finduser!==-1){
    mockusers[finduser]={...mockusers[finduser],...body}
    res.sendStatus(200)
}
else{
    res.sendStatus(400)
}
})

router.delete('/:id',(req,res)=>{
const{
    params:{id}
}=req
const parsedID=parseInt(id)
const finduser=mockusers.findIndex((user)=>user.id===parsedID)
if(finduser!==-1){
    mockusers.splice(finduser,1)
    res.sendStatus(200)
}
else{
    res.sendStatus(400)
}
})

module.exports=router