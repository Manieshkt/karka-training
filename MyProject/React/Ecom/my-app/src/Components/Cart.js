import React from "react";
import { MdOutlineShoppingCart } from "react-icons/md";
import { useNavigate } from "react-router-dom";

export const Cart = () => {
    const navigate = useNavigate()

    const handleClick = () => {
        navigate('/Cartpage')
    }

    return (
        <div>
            <MdOutlineShoppingCart style={{ fontSize: '50px' }} onClick={handleClick} />
        </div>
    )
}