const express=require('express')
const router=express.Router()

router.get('/',(req,res)=>{
    res.send([
        {id:123,name:'I-phone',price:200}
    ])
})

module.exports=router