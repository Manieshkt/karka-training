import React,{useState} from "react";
import { Home } from "./Home";

export const Button=()=>{
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
    return(
       <div className="dataa">
        <div className="but">
        <button onClick={fun}>S</button>
        <button onClick={funa}>M</button>
        <button onClick={funb}>L</button>
        </div>
        <div className="datab">
       <Home addToCart={(item)=>console.log(item)}proppie={count}/>
       </div>
       {/* <div className="cart">
       <button ><Cart/></button>
       </div> */}

       </div>
    )
}