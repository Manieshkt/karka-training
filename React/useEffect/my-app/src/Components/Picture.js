import React, { useRef } from "react";

export const Picture=()=>{
    const Tom=useRef(null)
    const Jerry=useRef(null)
    const Maru=useRef(null)
    
    const handleClick1=()=>{
        Tom.current.scrollIntoView()
    }
    const handleClick2=()=>{
        Jerry.current.scrollIntoView()
    }
    const handleClick3=()=>{
        Maru.current.scrollIntoView()
    }

    return(
        <>
            <nav>
                <button onClick={handleClick1}>Tom</button>
                <button onClick={handleClick2}>Jerry</button>
                <button onClick={handleClick3}>Maru</button>
            </nav>
            <div>
                <table style={{width:'200%'}} >
                    <tr>
                        <td>
                            <img style={{width:'50%'}} src="https://placekitten.com/g/200/200" ref={Tom} alt="Error" />
                        </td>
                        <td>
                            <img style={{width:'50%'}} src="https://placekitten.com/g/300/200" ref={Jerry} alt="Error"/>
                        </td>
                        <td>
                            <img style={{width:'50%'}} src="https://placekitten.com/g/250/200" ref={Maru} alt="Error"/>
                        </td>
                    </tr>
                </table>
            </div>
        </>
    )
}