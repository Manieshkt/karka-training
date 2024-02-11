import React, { useState } from "react";

export const Table=()=>{
    const[state,setState]=useState('')
    const[line,setLine]=useState([])
    const handleAdd=()=>{      
        // setState([])  
        setState('')
        setLine([...line,state])
        console.log(state)
}
    const[search,setSearch]=useState(false)
    const handleSearch=()=>{
        setSearch(true)

    }
    const Search=line.filter(a=>a===state)
    return(
        <>
            <input value={state} type="text" onChange={(e)=>setState(e.target.value)}/>
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleSearch}>Search</button>
            {search===true?
            Search.map((a,index)=>(
            <li key={index}>{a}</li>)):
            
            line.map((a,index)=>(
            <li key={index}>{a}</li>))}
        </>
    )
}