import React, { useState } from "react";

export const List=()=>{
    const[list,setList]=useState()
    return(
        <>
            <button onClick={()=>setList("hi")}>List</button>
            <ol>
                <li>{list}</li>
            </ol>
        </>
    )
}