import React,{useContext} from "react";
import { useNavigate } from "react-router-dom";

export const Login=()=>{
    const navigate=useNavigate()

    const handleLogin=()=>{
        navigate('./Products')
    }

    const handleCreateAccount=()=>{
        navigate('/Register')
    }
    return(
        <div>
            <h1>LOGIN Page</h1>
            <p><b>Username : </b><input  /></p>
            <p><b>Password : </b><input  /></p>
            <button onClick={handleLogin} >Login</button>
            <button onClick={handleCreateAccount} >Create An Account</button>
        </div>
    )
}