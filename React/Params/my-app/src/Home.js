import React from "react"
import {useParams} from "react-router-dom"
import { useLocation } from "react-router-dom"
import { useState } from "react"

export const Home=()=>{
    const {ji}=useParams()
    const location=useLocation()
    console.log(location)
    const [color,hi]=useState("hello")
    return(
        <>
        <p>This is Home Page {ji}</p><p>location : {location.pathname} {color}</p>
        <button onClick={()=>{hi("hi")}}>Submit</button>
        </>
    )
}