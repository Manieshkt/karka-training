import React from "react"
import {About} from "./About"
import "./Home.css"
import {Button} from "./Button"

export const Home=()=>{
    const name="Maniesh"
    const age=24
    const obj={name:"Maniesh",age:24,degree:"B.E"}
    const array=[{name:"Ajay",age:22,degree:"B.E"},
    {name:"Jemil",age:12,degree:"B.E"}, {name:"Mathan",age:15,degree:"B.E"},
    {name:"Christon",age:21,degree:"B.E"},{name:"Vinoth",age:23,degree:"B.E"} ]
var count=0
    return(
    <>
        <div>Home</div>
       <div className="Colorchange"> <About myname={name} myage={age} myobj={obj} myarray={array} /></div>
       <Button count={count}/>
    </>
    )
}