import React from "react"

const person={
    name:"Gregory",
    theme:{
      backgroundColor:"black",
      color:"red"
    }
  }
export const Gregory=()=>{
    return(
        <div style={person.theme}>
        <h1>{person.name}</h1>
        <img src="https://i.imgur.com/7vQD0fPs.jpg" alt="Gregory"/>
        <ul>
          <li>i am Gregory</li>
          <li>i am scientist</li>
        </ul>
      </div>
    )
}