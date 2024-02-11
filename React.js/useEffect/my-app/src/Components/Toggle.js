import React, { useState ,useRef} from "react";

export const Toggle=()=>{
    const [show,setShow]=useState(true)
    const ref=useRef(null)

    const handleToggle=()=>{
        setShow(!show)
    }
    const handleRemove=()=>{
        ref.current.remove()
    }

    return(
        <>
            <button onClick={handleToggle} >Toggle with setState</button>
            <button onClick={handleRemove}>Remove</button>
            <h1 ref={ref}>Hello World</h1>
        </>
    )
}