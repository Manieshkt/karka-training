import React, { useState } from "react";
import { Nav } from "./Nav";
import { RemovefromCart } from "./Buttons/RemovefromCart";

export const Cartpage = ({ filter, setFilter, count, setCount }) => {

    const [addCount, setAddCount] = useState(1)
    const price = filter.map(a => a.price)
    const sum = price.reduce((accumulator, currentvalue) => accumulator + currentvalue, 0)

    const Save = JSON.parse(localStorage.getItem('Products'))
    console.log(Save)

    const handleAdd = (index) => {

    }

    const handleDec = () => {
        if (addCount > 0) {
            setAddCount(addCount - 1)
        }
    }
    return (
        <>
            {filter.length !== 0 ? (
                <>
                    <nav>
                        <Nav count={count} setCount={setCount} />
                    </nav>
                    <table className="table">
                        {filter.map((product, index) => <tr className="table_row">
                            <td><img id="image" src={product.images[0]} alt="Loading...." /></td>
                            <td style={{ height: "20px", margin: "10px" }} >{product.title}</td>
                            <td style={{ height: "20px", margin: "5px" }} >Price : ${product.price}</td>
                            <td style={{ height: "20px", margin: "5px" }}>Rating : {product.rating}</td>
                            <td style={{ height: "20px", margin: "5px" }}>In Stock : {product.stock}</td>
                            <td>
                                <button onClick={() => handleAdd(index)} >+</button>
                                <b>{addCount}</b>
                                <button onClick={handleDec} >-</button>
                            </td>
                            <td>
                                <RemovefromCart filter={filter} count={count} setCount={setCount} setFilter={setFilter} index={index} />
                            </td>
                        </tr>)}
                    </table>
                    <br></br>
                    <p>Total Amount :$ {sum}</p>
                </>
            ) : (
                <>
                    <nav>
                        <Nav count={count} setCount={setCount} />
                    </nav>
                    <h1>Cart IS Empty ! </h1>
                </>
            )}
        </>
    )
}