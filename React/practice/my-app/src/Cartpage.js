import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Home } from "./Home";

export const Cartpage = (props) => {
    // let  [count,setCount]=useState(0)
    // const last=()=>{       
    //     setCount(count+1)
    //     console.log(setCount)
    // }

    let [cartItems,setCartItems]=useState([])
    const addToCart=(item)=>{
        setCartItems([...cartItems,item])
    }

//     return (
//         <div className="cartpage">
//             <button className="carta" onClick={last}>
//                 <FontAwesomeIcon icon={faCartShopping} size="2x" />
//                 <b>{count}</b>
//             </button>
//             <div className="content">
//             </div>
//         </div>
//     )
// }

return (
    <div className="cartpage">
      <div className="content">
        <Home addToCart={addToCart} />
      </div>
      <div>
        <h2>Cart Items:</h2>
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>{item.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};