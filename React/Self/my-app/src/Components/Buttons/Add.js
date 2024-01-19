import React from "react";

export const Add=({task,tasks,setTask,setTasks})=>{
    const handleAdd=()=>{
        if (task !== '') {
            setTasks([...tasks, task]);
            setTask('');
          }
    }
    return(
        <>
            <button onClick={handleAdd}>Add</button>
        </>
    )
}