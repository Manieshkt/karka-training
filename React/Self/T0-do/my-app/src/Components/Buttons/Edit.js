import React from "react";

export const Edit=({tasks,edit,setEdit,save,setSave,index})=>{
    const handleEdit=(index)=>{
        setEdit(index)
        setSave(tasks[index])
    }
    return(
        <button onClick={() => handleEdit(index)}>Edit</button>

    )
}