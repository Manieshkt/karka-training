import React, { useEffect } from "react";

export const AddtoCart = ({ count, setCount, data, index, filter, setFilter, logname ,setLogname}) => {

    useEffect(() => {
        if (logname) {
            const Username = logname;
            const SelectedProducts = JSON.stringify(filter)
            localStorage.setItem(Username, SelectedProducts)
        }
    }, [filter,logname])


    const handleAddtoCart = (index) => {
        const selectedItems = data[index]
        const Check = filter.some((product) => product.id === selectedItems.id)
        if (!Check) {
            setFilter((selectedProduct) => [...selectedProduct, selectedItems])
            setCount(count + 1)
        }
        else {
            alert('Item already in Cart')
        }
    }

    return (
        <>
            <button onClick={() => handleAddtoCart(index)} >Add To Cart</button>
        </>
    )
}
