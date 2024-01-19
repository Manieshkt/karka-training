import React, { useEffect, useRef, useState } from "react";

export const Stopwatch=()=>{
    const[time,setTime]=useState(0)
    const ref=useRef()
    useEffect(()=>{
        ref.current=setInterval(()=>{
            setTime(a=>a+1)
        },1000)
        return()=>{
            clearInterval(ref.current)
        }
    },[])
    const handleStart=()=>{
        ref.current=setInterval(()=>{
            setTime(a=>a+1)
        },1000)
    }
    const handleStop=()=>{
        clearInterval(ref.current)
    }
    const handleReset=()=>{
        setTime(0)
    }
    return(
        <>
            <h1>Stopwatch : {time}</h1>
            <button onClick={handleStart} >Start</button>
            <button onClick={handleStop} >Stop</button>
            <button onClick={handleReset} >Reset</button>
        </>
    )
}