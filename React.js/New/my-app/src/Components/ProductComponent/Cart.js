import React from "react";
import { GiShoppingCart } from "react-icons/gi";
import { useNavigate } from "react-router-dom";

export const Cart=()=>{
    const navigate=useNavigate()
    const handleCart=()=>{
        navigate('/Cartpage')
    }
    return(
        <>
        <b style={{fontSize:'48px'}} onClick={handleCart}><GiShoppingCart /></b>        
        </>
    )
}