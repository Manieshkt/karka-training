import React from "react"
import { useState } from "react"
export const Button=()=>{
    const [count,setCount]=useState(0)
    // let count=props.count
    const fun=()=>{
        setCount(count+1)
     console.log(count)
    }
    const fun1=()=>{
        setCount(count-1)
        // console.log(count)
    }
    return (
        <>
            <p>{count}</p>
            <button onClick={fun}>+</button>
            <button onClick={fun1}>-</button>
        </>
    )
}