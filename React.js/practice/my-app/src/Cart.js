import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export const Cart = ({propb}) => {
  let [count,setCount]=useState(1)
  const add=()=>{
    setCount(count+1)
  }
  const sub=()=>{
    if(count>1)
    setCount(count-1)
  }
  const del=()=>{
     
  }
  
  return (
    
    <div className="page">
      <div>
        
      </div>
    {propb.map((a,b)=>
    <div>
    <img className="pagea" src={a}/><br></br>
    <button onClick={del}>delete</button>
    <button onClick={sub}>-</button>Quantity:{count}<button onClick={add}>+</button>
 
    </div>
    )}
    </div>
  );
};