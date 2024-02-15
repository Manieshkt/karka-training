import React from "react";
import { Cart } from "./Cart";

export const Nav = ({ count }) => {
    return (
        <div style={{ display: "flex", justifyContent: "space-around", height: "100px", alignItems: "center" }} >
            <nav>Home</nav>
            <nav>About</nav>
            <nav>Contact Us</nav>
            <nav>Wishlist</nav>
            <nav><b><Cart />{count}</b></nav>
        </div>
    )
}