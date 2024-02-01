import React from "react";

export const Cancel=({setEdit,setSave})=>{
    const handleCancel=()=>{
        setEdit(null)
        setSave('')
    }
    return(
        <>
            <button onClick={handleCancel}>Cancel</button>
        </>
    )
}