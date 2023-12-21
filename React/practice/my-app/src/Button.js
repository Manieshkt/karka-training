import React,{useState} from "react";
import { Home } from "./Home";

export const Button=({you})=>{
    let [count,setCount]=useState(null)
    const fun=()=>{
        setCount("S")
    }
    const funa=()=>{
         setCount("M")
    }
    const funb=()=>{
        setCount("L")
    }
    let [call,calla]=useState(null)
    const passing=(a)=>{
       calla(a)
    }
    you(call)
    
    // console.log(call)
    return(
       <div className="dataa">
        <div className="but">
        <button onClick={fun}>S</button>
        <button onClick={funa}>M</button>
        <button onClick={funb}>L</button>
        </div>
        <div className="datab">
       <Home addToCart={(item)=>console.log(item)}proppie={count} proppiea={passing}/>
       </div>

       </div>
    )
}