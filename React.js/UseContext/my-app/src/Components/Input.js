import React, { useRef } from "react";

export const Input=()=>{
    let inputref=useRef(null)
    const handleFocus=()=>{
        let Hello= inputref.current.focus()
        console.log(Hello)
    }
    return(
        <>
            <input  ref={inputref} />
            <button onClick={handleFocus}>Focus on the input</button>
        </>
    )
}