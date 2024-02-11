const mysql=require('mysql')
const readline = require('readline');


const conn=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"karka"
})

conn.connect((err)=>{
    if(err){
        console.log("Error connecting Database on Port 3000")
    }
    else{
        console.log('Database Connected')
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        rl.question('Enter the name of the table you want to select from: ', (tableName) => {
            const sql = `SELECT * FROM ${tableName}`;
            conn.query(sql, (err, result) => {
                if (err) {
                    console.log(`Error selecting data from table ${tableName}`);
                } else {
                    console.log(`Data selected from table ${tableName}:`, result);
                }
                rl.close();
            });
        });
    }
})
