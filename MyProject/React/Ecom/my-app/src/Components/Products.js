import React from "react"
import { Nav } from "./Nav";
import { AddtoCart } from "./Buttons/AddtoCart";

export const Products = ({ data, filter, setFilter, count, setCount, logname }) => {
    if (!data) {
        return <div>Loading...</div>;
    }

    const datas = data.map(a => a)
    // console.log(datas)
    return (
        <div>
            <nav>
                <Nav count={count} />
            </nav>
            <table className="table" >
                {data.map((product, index) => <tr className="table_row" >
                    <td><img id="image" src={product.images[0]} alt="Loading...." /></td>
                    <td style={{ height: "20px", margin: "10px" }} >{product.title}</td>
                    <td style={{ height: "20px", margin: "5px" }} >Price : ${product.price}</td>
                    <td style={{ height: "20px", margin: "5px" }}>Rating : {product.rating}</td>
                    <td style={{ height: "20px", margin: "5px" }}>In Stock : {product.stock}</td>
                    <td style={{ height: "20px", margin: "5px" }}><AddtoCart logname={logname} filter={filter} setFilter={setFilter} data={data} index={index} count={count} setCount={setCount} /></td>
                </tr>
                )}
            </table>
        </div>
    )
}