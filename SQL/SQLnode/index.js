const mysql=require('mysql')

const conn=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:""
})

conn.connect((err)=>{
    if(err){
        console.log('Error connecting database')
    }
    else{
        console.log('Connected to database')
        const sql='show databases'
        conn.query(sql,((err,result)=>{
            if(err){
                console.log('Error showing databases')
            }
            else{
                console.log('Shown',result)
            }
        }))

        const sql1='show tables from karka'
        conn.query(sql1,(err,result)=>{
            if (err){
                console.log('Error showing tables')
            }
            else{
                console.log(result)
            }
        })
    }

    const sql2='use karka'
    conn.query(sql2,(err,result)=>{
        if(err){
            console.log('Error using Karka')
        }
        else{
            console.log('Karka in usage')
        }
    })

    const sql3='select * from students'
    conn.query(sql3,(err,result)=>{
        if(err){
            console.log('Error selecting from students')
        }
        else{
            console.log(result)
        }
    })
    const sql4='update students set name="hello" where id=14'
    conn.query(sql4,(err,result)=>{
        if(err){
            console.log('Error selecting from students')
        }
        else{
            console.log(result)
        }
    })
})
