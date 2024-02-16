const express=require('express')
const app=express()
const path=require('path')
const logger=require('./Middleware/logger')

// app.use(logger)

//Body parser Middleware
app.use(express.json())
app.use(express.urlencoded({extended:false}))

//set Static folder
app.use(express.static(path.join(__dirname,'Public')))

app.use('/api/members',require('./Routes/api/members'))

const PORT=process.env.PORT || 3000
app.listen(PORT,()=>console.log(`Listening on Port ${PORT}`))