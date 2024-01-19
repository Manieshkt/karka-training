import React ,{useContext} from "react";
import { ChangeTheme } from "../App";

export const Theme=()=>{
    const {color,setColor}=useContext(ChangeTheme)
    const handleDarkTheme=()=>{
        setColor(a=>a==='light'?'dark':'dark')
    }
    const handleLightTheme=()=>{
        setColor(a=>a==='light'?'light':'light')
    }

    return(
        <>
            <div style={{height:'100px',backgroundColor:color==='light'?'white':'black'}} >
                    <p style={{color:color==='light'?'black':'white'}} >Hello</p>
                    <button onClick={handleDarkTheme} >Dark Theme</button>
                    <button onClick={handleLightTheme} >Light Theme</button>
            </div>
        </>
    )
}