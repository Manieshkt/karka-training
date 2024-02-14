const express=require('express')
const app=express()

app.use(express.json())
    
const userRouter=require('./routes/users')
const productRouter=require('./routes/products')

app.use('/api/users',userRouter)
app.use('/api/users/:id',userRouter)
app.use('/api/products',productRouter)

app.get('/',(req,res)=>{
    res.cookie('Hello','World',{maxAge:6000})
    res.status(201).send('Hello!!')
    })

const Port=process.env.PORT|| 3000
app.listen(Port,()=>console.log(`Listening on Port ${Port} .....`))