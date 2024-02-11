import React from "react"
import { useState } from "react"

export const Use=()=>{
    const [current,setCount]=useState("hi")
    const fun=()=>{
        setCount("hello")
    }
    return(
        <>
        <p>{current}</p>
        <button onClick={fun}>Submit</button>
        </>
    )
}