import React from "react"

export const Button=()=>{
    const fun=()=>{
    console.log("hi")
}
    return(
        <div className="Button">
            <button onClick={fun}>Submit</button>
        </div>
        )
}
