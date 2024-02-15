import React, { useEffect } from "react";

export const AddtoCart = ({ count, setCount, data, index, filter, setFilter, logname }) => {
    useEffect(() => {
        const allUsers = JSON.parse(localStorage.getItem('UserData'))
        const Userdata = {
            username: logname,
            Products: filter
        }
        localStorage.setItem("ProductDatas", JSON.stringify(Userdata))
    }, [logname, filter])


    const handleAddtoCart = (index) => {
        const selectedItems = data[index]
        // const FilteredProducts=data.some((product)=>product.id===selectedItems.id)
        // if(FilteredProducts){           
        // }
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
