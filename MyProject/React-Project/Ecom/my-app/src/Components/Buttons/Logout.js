import React from "react";
import { CiLogout } from "react-icons/ci";
import { useNavigate } from "react-router-dom";

export const LogOut=({ setLogname })=>{
    const navigate=useNavigate()
   
    const handleLogOut=()=>{
        setLogname("")
        navigate('/')
    }

    return(
        <>
            <button onClick={handleLogOut} ><CiLogout /></button>
        </>
    )
}