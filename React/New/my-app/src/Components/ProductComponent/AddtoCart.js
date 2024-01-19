import React from "react";

export const AddtoCart=({handleAddtoCart,index})=>{

    return(
        <>
            <button onClick={()=>handleAddtoCart(index)}>Add to Cart</button>
        </>
    )
}