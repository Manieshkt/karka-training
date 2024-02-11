import React, { useState } from "react"

export const Form=()=>{
    const [name,setName]=useState("")
    const [pass,setPass]=useState("")
    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log("name:",name)
        console.log("pass:",pass)
        setName("")
        setPass("")
    }
    return(
        <form onSubmit={handleSubmit}>
            <input type="text" onChange={(e)=>setName(e.target.value)}/>
            <input type="password" onChange={(e)=>setPass(e.target.value)}/>
            <button>Submit</button>
        </form>
    )
}
