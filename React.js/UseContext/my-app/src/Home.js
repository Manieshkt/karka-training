import React, { useContext } from "react";
import {UserContext ,ChannelContext} from './App'

export const Home=()=>{
    const Use=useContext(UserContext)
    const Channel=useContext(ChannelContext)
    return(
        <>
            <p>{Use} Joe , {Channel}</p>
        </>
    )
}   