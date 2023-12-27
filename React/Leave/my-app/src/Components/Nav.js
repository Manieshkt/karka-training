import React from "react";
import { useNavigate } from "react-router-dom";

export const Nav=()=>{
    const Navigate=useNavigate()
    const Navigation=(path)=>{
        Navigate(path)
    }
    return(
    <>
    <nav className="navigationBar">
        <h1 id="nav_1">Leave Management System</h1>
        <h5 id="nav_2" onClick={()=>Navigation("/")}>Home</h5>
        <h5 id="nav_3" onClick={()=>Navigation("/About")}>About</h5>
        <h5 id="nav_4" onClick={()=>Navigation("/Admin")}>Admin Login</h5>
        <h5 id="nav_5">User Login</h5>
    </nav>
    </>
    )
}