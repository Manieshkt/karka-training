import React from "react";

export const Delete=({settask,task,index})=>{
    const handleDelete=(index)=>{
        const Update=task.filter((a,i)=>i!==index)
        settask(Update)
    }
    return(
    <>
    <button onClick={()=>handleDelete(index)}>Delete</button>
    </>
    )
}