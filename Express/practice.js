const mysql = require('mysql')
const express = require('express')
const app = express()
app.use(express.json())

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'karka'
})
conn.connect((err) => {
    if (err) {
        console.log('Error connecting Database')
    }
    else {
        console.log('Database Connected')
    }
})

app.get('/', (req, res) => {
    conn.query('Select * from students', (err, results) => {
        if (err) {
            res.status(404).send('Page NOT found')
        }
        else {
            res.status(200).send(results)
        }
    })
})

app.post('/api/users', (req, res) => {
    const newUser = req.body
    conn.query('insert into students set ?', newUser, (err, results) => {
        if (err) {
            console.log('Error inserting user:', err);
            res.status(500).send('Error inserting user');
        } else {
            console.log('User inserted successfully');
            res.status(201).send(results);
        }
    })
})

app.get('/api/users', (req, res) => {
    conn.query('Select * from students', (err, results) => {
        if (err) {
            res.status(404).send("Page Not Found")
        }
        else {
            res.status(200).send(results)
        }
    })
})

app.get('/api/users/:id', (req, res) => {
    const parsedId = parseInt(req.params.id)
    conn.query('select * from students', (err, results) => {
        if (err) {
            console.log('Error')
            res.status(400).send("Error Loading Page")
        }
        else {
            if (isNaN(parsedId)) {
                res.status(404).send('Page NOT Found')
            }
            else {
                const finduser = results.find((user) => user.id === parsedId)
                if (finduser) {
                    res.status(200).send(finduser)
                }
                else {
                    res.status(400).send('Error')
                }
            }
        }
    })
})

app.patch('/api/users/:id',(req,res)=>{
    const {name,gender,mobile_num}=req.body
    
    const updates={}
    if(name)updates.name=name
    if(gender)updates.gender=gender
    if(mobile_num)updates.mobile_num=mobile_num

    const parsedId=parseInt(req.params.id)
    if(isNaN(parsedId)){
        res.status(400).send("Error Fetching Id")
    }
    else{
        conn.query('update students set ? where id=?',[updates,parsedId],(err,results)=>{
            if(err){
                res.status(400).send('Not Updated')
            }
            else{
                res.status(200).send(results)
            }
        })
    }
})

const Port = process.env.Port || 3000
app.listen(Port, () => {
    console.log(`Listening on Port ${Port}`)
})