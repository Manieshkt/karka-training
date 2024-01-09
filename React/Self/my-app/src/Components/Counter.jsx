import React, { useState } from 'react'

export const Counter=({Hello})=>{
    const [count,setCount]=useState(0)
    console.log(count)
    return(
        <>
            <button onClick={()=>setCount(count+5)}>Count</button>
            <h1>{count} {Hello}</h1>
        </>
    )
}