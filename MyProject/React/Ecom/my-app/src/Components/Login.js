import React,{useContext} from "react";
import { useNavigate } from "react-router-dom";

export const Login=({logname,setLogname,logpass,setLogpass,error,setError})=>{
    const navigate=useNavigate()

    const handleLogin=()=>{
        const Users=JSON.parse(localStorage.getItem('UserData'))

        const log={
            username:logname,
            password:logpass
        }

        const checkUsers=Users.find((user)=>user.username===log.username && user.password===log.password )
        if(checkUsers){
            navigate('./Products')
        }
        else{
            setError("User Name or Password is not Valid")
        }
    }

    const handleCreateAccount=()=>{
        navigate('/Register')
    }
    
    return(
        <div>
            <h1>LOGIN Page</h1>
            <p><b>Username : </b><input onChange={(e)=>setLogname(e.target.value)} /></p>
            <p><b>Password : </b><input onChange={(e)=>setLogpass(e.target.value)} /></p>
            <button onClick={handleLogin} >Login</button>
            <button onClick={handleCreateAccount} >Create An Account</button>
            <p>{error}</p>
        </div>
    )
}