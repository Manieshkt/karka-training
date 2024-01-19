import React, { useEffect,useRef, useState } from "react";

export const Video=()=>{
    const[video,setVideo]=useState(false)
    const ref=useRef(null)

    useEffect(()=>{
        if(video){
            ref.current.play()
        }
        else{
            ref.current.pause()
        }
    },[video])

    const handleClick=()=>{
        setVideo(!video)
    }

    return(
        <>
            <button onClick={handleClick}  >{video?'Pause':'Play'}</button>
            <video style={{width:'20%'}} ref={ref}  loop playsInline muted>
                <source src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4" type="video/mp4" />
            </video>
        </>
    )
}