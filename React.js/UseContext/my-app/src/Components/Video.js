import React, { useEffect, useRef } from "react";

export const Video=({isplaying,src})=>{
    const ref=useRef(null)
    useEffect(()=>{
        if(isplaying){
            ref.current.play()
        }
        else{
            ref.current.pause()
        }
    },[isplaying]
    )
    return(
        <>
            <video style={{height:'200px'}} ref={ref} src={src} loop playsInline />
        </>
    )
}                                                                       