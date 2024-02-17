import React, { useState,useEffect } from "react";
import { Nav } from "./Nav";
import { RemovefromCart } from "./Buttons/RemovefromCart";

export const Cartpage = ({ filter, setFilter, count, setCount,logname,setLogname }) => {

    useEffect(() => {
        const Username = localStorage.getItem("UserName");
        setLogname(Username);
    }, []);

    useEffect(() => {
        if (filter.length > 0) {
          const SelectedProducts = JSON.stringify(filter);
          localStorage.setItem(logname, SelectedProducts);
        }
      }, [filter,logname]);

      useEffect(() => {
        const Username = localStorage.getItem("UserName");
        const SelectedProducts = localStorage.getItem(Username);
      
        if (SelectedProducts) {
          setFilter(JSON.parse(SelectedProducts));
          setCount(JSON.parse(SelectedProducts).length);
        }
      }, [logname]);


    const [addCount, setAddCount] = useState(1)
    const price = filter.map(a => a.price)
    const sum = price.reduce((accumulator, currentvalue) => accumulator + currentvalue, 0)

    // const handleAdd = (index) => {
    //     const selectedItems = filter[index];
    //     const Check = filter.some((product) => product.id === selectedItems.id);
    //     if (!Check) {
    //         setFilter((selectedProduct) => [...selectedProduct, selectedItems]);
    //         setAddCount(addCount + 1);
    //     } else {
    //         alert("Item already in Cart");
    //     }
    // }

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
                        <Nav count={count} setCount={setCount} setLogname={setLogname} />
                    </nav>
                    <table className="table">
                        {filter.map((product, index) => <tr className="table_row">
                            <td><img id="image" src={product.images[0]} alt="Loading...." /></td>
                            <td style={{ height: "20px", margin: "10px" }} >{product.title}</td>
                            <td style={{ height: "20px", margin: "5px" }} >Price : ${product.price}</td>
                            <td style={{ height: "20px", margin: "5px" }}>Rating : {product.rating}</td>
                            <td style={{ height: "20px", margin: "5px" }}>In Stock : {product.stock}</td>
                            <td>
                                {/* <button onClick={() => handleAdd(index)} >+</button> */}
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