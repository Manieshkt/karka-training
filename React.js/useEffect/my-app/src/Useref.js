import React, { useRef } from "react";

export const Change=()=>{
    const ref=useRef(0)
    const handleClick=()=>{
        ref.current=ref.current+1
        console.log(ref.current)
    }
    return(
        <>
            <button onClick={handleClick}>Click Me</button>
        </>
    )
}