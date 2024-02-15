import React from "react";

export const RemovefromCart = ({ filter, setFilter, index, count, setCount }) => {
    const handleRemoveItem = (index) => {
        const item = filter.filter((items, indexes) => index !== indexes)
        setFilter(item)
        setCount(count - 1)
    }

    return (
        <>
            <button onClick={() => handleRemoveItem(index)} >Remove Item</button>
        </>
    )
}