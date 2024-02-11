import React, { useRef } from "react";

export const Button=()=>{
    let count=useRef(0)
    const handleClick=()=>{
        count.current=count.current+1
        alert('You clicked '+ count.current +' times ')
        console.log(count)

    }
    return(
        <>
            <button onClick={handleClick}>Click</button>
        </>
    )
}