const express = require('express')
const router = express.Router()
const members = require('../../Members')

router.get('/', (req, res) => {
    res.json(members)
})

router.get('/:id', (req, res) => {
    const parsedID = parseInt(req.params.id)
    if (isNaN(parsedID)) {
        res.status(400).send("Id should be a number")
    }
    else {
        const findUser = members.find((user) => user.id === parsedID)
        if (!findUser) {
            res.status(400).send('Id is not available')
        }
        else {
            res.status(200).send(findUser)
        }
    }
})

router.post('/', (req, res) => {
    const newUser = {
        id: req.body.id,
        username: req.body.username,
        mail: req.body.mail,
        status: req.body.status
    }
    if (!newUser.id || !newUser.username || !newUser.mail || !newUser.status) {
        return res.status(400).send("Enter a valid username or mail")
    }
    members.push(newUser)
    res.status(200).send(newUser)
})

router.put('/:id', (req, res) => {
    const parsedID = parseInt(req.params.id)
    if (isNaN(parsedID)) {
        return res.status(400).send("Id should be a number")
    }
    const findUser = members.find((user) => user.id === parsedID)
    if (!findUser) {
        res.status(400).send('Id is not available')
    }
    else {
        const update = req.body
        members.forEach(user => {
            if (user.id === parsedID) {
                user.id = update.id ? update.id : members.id,
                user.username = update.username ? update.username : members.username,
                user.mail = update.mail ? update.mail : members.mail,
                user.status = update.status ? update.status : members.status

                res.status(200).send({ msg : "Member Updated", user})
            }
        })
    }
})

router.delete('/:id',(req,res)=>{
    const parsedID=parseInt(req.params.id)
    if(isNaN(parsedID)){
        return res.status(400).send("Id should be a number")
    }
    const findUser=members.find((user)=>user.id===parsedID)
    if(!findUser){
        res.status(400).send('Id is not available')
    }
    else{
        const remove=members.filter((user)=>user.id!==parsedID)
        res.status(200).send({msg:"Member Deletd",remove})
    }
})

module.exports = router