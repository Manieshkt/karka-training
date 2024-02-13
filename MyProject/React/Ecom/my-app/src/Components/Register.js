import React from "react"

export const Register=()=>{
    const handleRegister=()=>{
        
    }
    return(
        <div>
        <h1>Registration Page</h1>
        <p><b>Username : </b><input  /></p>
        <p><b>Password : </b><input  /></p>
        <button onClick={handleRegister} >Create Account</button>
    </div>
    )
}