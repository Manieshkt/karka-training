import React from "react"

export const Button=(props)=>{
    let count=props.count
    const fun=()=>{
       count=count+1
       console.log(count)
    }
    const fun1=()=>{
        count=count-1
        console.log(count)
    }
    return (
        <>
            <button onClick={fun}>+</button>
            <button onClick={fun1}>-</button>
        </>
    )
}