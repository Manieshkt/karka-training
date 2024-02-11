import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Login = ({logname,logpass,setlogName,setlogPass}) => {
    const navigate=useNavigate()
    const handleRegister=()=>{
        navigate('/Register')
    }
    const handleLogin=()=>{
        const log=JSON.parse(localStorage.getItem('UserData'))
        console.log(log)
        const login=log.filter(a=>a.username===logname && a.password===logpass )
        console.log(login)
        if(login){
            navigate('/Home')
        }
        else{
            alert("Invalid Username or Password")
        }
    }
    return (
        <>
            <h1>Login Page</h1>
            <p>USERNAME : <input onChange={(e)=>setlogName(e.target.value)} /></p>
            <p>PASSWORD : <input onChange={(e)=>setlogPass(e.target.value)} /></p>
            <button onClick={handleLogin} >LOGIN</button> 
            <button onClick={handleRegister} >REGISTER</button>
        </>
    )
}