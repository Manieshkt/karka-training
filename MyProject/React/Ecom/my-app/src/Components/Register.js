import React from "react"
import { useNavigate } from "react-router-dom";

export const Register=({regname,setRegname,regpass,setRegpass,error,setError})=>{
    const navigate=useNavigate()
    const handleRegister=()=>{
        const users={
            username:regname,
            password:regpass
        }
        const existingusers=JSON.parse(localStorage.getItem('UserData'))||[]
        const findUser=existingusers.find((user)=>user.username===users.username)
        if(!findUser){
            const newData=[...existingusers,users]
            localStorage.setItem('UserData',JSON.stringify(newData))         
        }
        else{
            setError("User Name is already in use")
        }
    }
    return(
        <div>
        <h1>Registration Page</h1>
        <p><b>Username : </b><input type="text" onChange={(e)=>setRegname(e.target.value)} /></p>
        <p><b>Password : </b><input  type="text" placeholder="password" onChange={(e)=>setRegpass(e.target.value)} /></p>
        <button onClick={handleRegister} >Create Account</button>
        <p>{error}</p>
    </div>
    )
}