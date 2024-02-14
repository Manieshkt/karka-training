import React from "react";
import { Cart } from "./Cart";

export const Nav=()=>{
    return(
        <div style={{display:"flex",justifyContent:"space-around",height:"100px",alignItems:"center"}} >
            <nav>Home</nav>
            <nav>About</nav>
            <nav>Filter</nav>
            <nav>Contact Us</nav>
            <nav><Cart/></nav>
        </div>
    )
}