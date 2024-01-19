import React from "react";

export const Save=({tasks,setTasks,save,setSave,edit,setEdit})=>{
    const handleSave=()=>{
        if (edit !== null) {
            // Update the item in the list
            const updatedTasks = [...tasks];
            updatedTasks[edit] = save;
            setTasks(updatedTasks);
      
            // Clear the edit state
            setEdit(null);
            setSave('');
          }
    }
    return(
        <button onClick={handleSave}>Save</button>
    )
}