import React, { useState } from "react";

export const Text=()=>{
    const [name,setName]=useState('')
    const[length,setLength]=useState(null)
    // console.log(name)
    const HandleCheck=()=>{
        // const Length=name.length
        setLength(name.length)
        // console.log(Length)
    }
    return(
        <>
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
            <button onClick={HandleCheck}>Check</button>
            <p>Length: {length}</p>
        </>
    )
}