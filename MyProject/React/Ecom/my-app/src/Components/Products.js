import React from "react"
import { Nav } from "./Nav";

export const Products=({data})=>{
    if (!data || !data.products) {
        return <div>Loading...</div>;
    }
   
    const datas=data.products.map(a=>a)
    console.log(datas)
    return(
        <div>
            <nav>
                <Nav/>
            </nav>
            <table className="table" >
                {data.products.map((product,index)=><tr className="table_row" >
                    <td><img id="image" src={product.images[0]} /></td>
                    <td style={{height:"20px",margin:"10px"}} >{product.title}</td>
                    <td style={{height:"20px",margin:"5px"}} >Price : ${product.price}</td>
                    <td style={{height:"20px",margin:"5px"}}>Rating : {product.rating}</td>
                    <td style={{height:"20px",margin:"5px"}}>In Stock : {product.stock}</td>
                    <td style={{height:"20px",margin:"5px"}}><button>Add to Cart</button></td>
                </tr>
                )}
            </table>
        </div>
    )
}