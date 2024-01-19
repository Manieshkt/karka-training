import React, { useRef } from "react";

export const Input=()=>{
    const ref=useRef('hi')
    const handleFocus=()=>{
        ref.current.focus()
    }
    return(
        <>
            <input ref={ref} />
            <button onClick={handleFocus}>Focus</button>
        </>
    )
}