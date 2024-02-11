import React, { useState } from 'react';
import { Star } from './Star';
import { Cart } from './Cart';
import { AddtoCart } from './AddtoCart';

export const Product=({product,count,setCount,filter,setFilter})=>{

    const handleAddtoCart=(index)=>{
        // const newFilter= product.filter((items,indexes)=>index === indexes)
        // setFilter(newFilter)
        const selectedItem = product[index];
        const newFilter=filter.some((a)=>(a.id)===selectedItem.id)
        if(!newFilter){
            setFilter((prevFilter) => [...prevFilter, selectedItem]);
            setCount(count+1)
        }
        else{
            alert('Item Already in Cart')
        }
        console.log(newFilter)
        console.log(filter)
        console.log(selectedItem)
    }
    
    return(
        <>  
        <div style={{backgroundColor:'rgb(228, 165, 255)'}} className='Cart'><Cart /> {count}</div>
        <div className='products'>
            {product.map((items,index)=>
            <div className='Display'>
            <p className='title'>{items.title}</p>
            <img className='image' src={items.images[0]} alt=''/>
            <p><b>Category : {items.category}</b></p>
            <p style={{margin:'5px',overflow:'hidden',height:'38px'}}>{items.description}</p>
            <p><b>Discount : </b>{items.discountPercentage} %</p>
            <span><b>Price : </b>{items.price} $ </span>
            <span style={{marginLeft:'5px'}}><b>Stock : </b>{items.stock} No's</span>
            <p><b>Rating : </b>{items.rating} <Star rating={items.rating}/></p>
            <AddtoCart handleAddtoCart={handleAddtoCart} index={index}/>
            </div>
            )}
        </div>
        </>
    )
}