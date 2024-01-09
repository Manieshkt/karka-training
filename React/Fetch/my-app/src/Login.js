import React,{useState} from "react";

export const Login=()=>{
    const[Login,setLogin]=useState(false)
    return(
        <>
        {Login===true?(
        <>
            <h1>Log Out page</h1>
            <button onClick={()=>setLogin(false)}>Log In</button>
        </>
        ):(
            <>
            <h1>Log In page</h1>
            <button onClick={()=>setLogin(true)}>Log Out</button>
            </>
        )}
        </>
    )
}

