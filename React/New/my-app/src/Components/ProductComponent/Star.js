import React from "react";
import {FaStar} from 'react-icons/fa';

export const Star=({rating})=>{
    const Stars=[]
    for(let i=1;i<=5;i++){
        const Rating=i<=rating?'yellow':'grey'
        Stars.push(<FaStar style={{color:Rating}}/>)
    }
    return(
        <>
            {Stars}
        </>
    )
}