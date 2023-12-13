import React from "react"
import { useParams } from "react-router-dom"
import { useLocation } from "react-router-dom"

export const About=()=>{
    const {ji}=useParams()
    const loc=useLocation()
    return(

        <div className="About">
            <div>About</div>
           <p> what are you doing {ji} {loc.pathname}</p>
        </div>
    )
}