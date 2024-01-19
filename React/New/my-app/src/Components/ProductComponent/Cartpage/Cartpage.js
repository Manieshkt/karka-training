import React, { useState } from "react";
import { Star } from "../Star";
import { Remove } from "./Remove";

export const Cartpage=({product,count,setCount,Filter,setFilter})=>{
    const [remove,setRemove]=useState([])
    const handleRemove=(index)=>{
        const Remove=Filter.filter((item,indexes)=>index!==indexes) 
        setFilter(Remove)
        setCount(count-1)
        console.log(remove)
    }
    
    return(
        <>
            <div className="products">
                {Filter.map((items,index)=>
                <div className="Display">
                      <p className='title'>{items.title}</p>
                      <img className='image' src={items.images[0]} alt=''/>
                      <p><b>Category : {items.category}</b></p>
                      <p style={{margin:'5px',overflow:'hidden',height:'38px'}}>{items.description}</p>
                      <p><b>Discount : </b>{items.discountPercentage} %</p>
                      <span><b>Price : </b>{items.price} $ </span>
                      <span style={{marginLeft:'5px'}}><b>Stock : </b>{items.stock} No's</span>
                      <p><b>Rating : </b>{items.rating} <Star rating={items.rating}/></p>
                      <Remove handleRemove={handleRemove} index={index} />
                </div>
                )}
            </div>
        </>
    )
}