import React, { useEffect, useRef } from "react";

export const Focus=()=>{
    const ref=useRef(null)
    const handleFocus=()=>{
        ref.current.focus()
    }
    useEffect(()=>{
        ref.current.focus()
    },[])

    return(
        <>
            <input ref={ref} type="text" />
            <button onClick={handleFocus} >Focus</button>
        </>
    )
}