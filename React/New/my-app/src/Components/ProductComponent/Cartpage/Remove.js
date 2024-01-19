import React from "react";

export const Remove=({handleRemove,index})=>{
    return(
        <>
            <button onClick={()=>handleRemove(index)}>Remove</button>
        </>
    )
}