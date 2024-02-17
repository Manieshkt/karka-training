import React from "react";
import { Cart } from "./Cart";
import { LogOut } from "./Buttons/Logout";
import { useNavigate } from "react-router-dom";

export const Nav = ({ count ,setLogname}) => {
    const navigate=useNavigate()
    const handleHome=()=>{
        navigate('/Products')
    }
    return (
        <div style={{ display: "flex", justifyContent: "space-around", height: "100px", alignItems: "center" }} >
            <nav><LogOut setLogname={setLogname} /></nav>
            <nav onClick={handleHome} >Home</nav>
            <nav>About</nav>
            <nav>Contact Us</nav>
            <nav>Wishlist</nav>
            <nav><b><Cart />{count}</b></nav>
        </div>
    )
}