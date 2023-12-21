import React, { useState } from "react"
import jsonData from "./image.json"
import { Cart } from "./Cart"
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom"
// import {Cartpage} from "./Cartpage"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";


export const Home = (props) => {
    const data = jsonData
    console.log(jsonData.data)
    const[cart,setCart]=useState([])
    const showParentComponent=(a)=>{
        setCart(a)
        setCart([...cart,a])
    }
   props. proppiea(cart)
//    console.log(cart)

    let filly = props.proppie == null ? data.data : data.data.filter((obj) => { return obj.size === props.proppie })
     
    return (

        <div className="data">

            {filly.map(a =>
                <div className="row" key={a.id}>
                    <p>{a.name}</p>
                    <img src={a.images} alt="Nothing" />
                    <p>Price : {a.price}</p>
                    <p>Size : {a.size}</p>
                    <button onClick={()=>showParentComponent(a.images)}>Add to cart</button>
                </div>
               
            )}
            <Link to="/Cart">  <button className="carta">
        <FontAwesomeIcon icon={faCartShopping} size="2x"/><b>0</b></button></Link>
          
        
      
        </div>


    )
}
