import React, { useState } from "react"
import jsonData from "./image.json"
import { Cart } from "./Cart"
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom"
// import {Cartpage} from "./Cartpage"


export const Home = (props) => {
    const data = jsonData
    console.log(jsonData.data)
   
    let [initial, setfinal] = useState(0)
    let [selectedItem,setSelectedItem]=useState(null)
    const Func = (item) => {
    setfinal(initial + 1)
    // setclickitem(a)

    props.addToCart(item)
    }

    // let [cartitems,setcartitems]=useState([])
    // const addtocart=(a)=>{
    //     setcartitems([...cartitems,a])
    // }


    let filly = props.proppie == null ? data.data : data.data.filter((obj) => { return obj.size === props.proppie })

    return (

        <div className="data">

            {filly.map(a =>
                <div className="row" key={a.id}>
                    <p>{a.name}</p>
                    <img src={a.images} alt="Nothing" />
                    <p>Price : {a.price}</p>
                    <p>Size : {a.size}</p>
                    <button onClick={()=>Func(a)}>Add to cart</button>
                </div>
               
            )}
            <Link to="/Cart"><Cart propb={initial}/></Link>
            {/* {clicked &&(
                <div>
                    <p>{clicked.name}</p>
                    <img src={clicked.images}/>
                    <p>{clicked.price}</p>
                    <p>{clicked.size}</p>
                </div>
            )} */}
            
        </div>


    )
}
