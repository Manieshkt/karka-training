import React from "react"

export const About=(props)=>{
    const data= props.myarray
    
    return(
        <div className="div">
            <div>About</div>
            <div>Welcome {props.myname}</div>
            <div>{props.myage}</div>
            <div>Name:{props.myobj.name}</div>
            <div>Age:{props.myobj.age}</div>
            <div>Degree:{props.myobj.degree}</div>
           <table>
            <thead>
            <tr>
            <td>S.no</td>
            <td>Name</td>
            <td>Age</td>
            <td>Degree</td>
            </tr>  
            </thead>    
            <tbody>     
                {data.map((a,b)=>
                  a.age>=18?  
                <tr >
                <td>{b+1}</td>
                <td>{a.name}</td>
                <td>{a.age}</td>
                <td>{a.degree}</td>
                </tr>:null
               
            )}
             </tbody> 
            </table>
        </div>
    )
}