import React from "react"

export const Products=({data})=>{
    if (!data || !data.products) {
        return <div>Loading...</div>;
    }
   
    const datas=data.products.map(a=>a)
    console.log(datas)
    return(
        <div>
            <nav>

            </nav>
            <table className="table" >
                {data.products.map((product,index)=><tr className="table_row" >
                    <td>{product.title}</td>
                    <td><img id="image" src={product.images[0]} /></td>

                </tr>
                )}
            </table>
        </div>
    )
}