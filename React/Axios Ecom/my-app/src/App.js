import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { FaStar } from "react-icons/fa"; 
import {useEffect, useRef, useState} from 'react'

function App() {
  const Url='https://fakestoreapi.com/products'
  const[data,setData]=useState([])
  useEffect(()=>{
  const Fetch=async()=>{
   try{
    const response=await axios.get(Url)
    setData(response.data)
    // console.log(response)
   }
   catch(error){
   console.log(error)
   }
  }
  Fetch()},[])
  // console.log(data)

     const Star =(rating) => {
    const Stars =[]
    for (let i=1; i<=5; i++) {
      Stars.push(
        <FaStar style={{marginLeft:'3px'}} color={i <= rating ? 'red' : 'black'}/>        
      )
    }
    return Stars
  }
    
  return (
    <div className="App">
      {data.map((a,index)=>
      <div className='Display'>     
        <img src={a.image} alt='None' style={{height:'100px',width:'50%',borderRadius:'50%'}}/>     
        {/* <p style={{height:'130px',overflow:'hidden',textAlign:'justify',margin:'20px'}}>{a.description}</p> */}
      <p><b>Category : {a.category.toUpperCase()}</b></p>
      <p><b>Price : ${a.price}</b></p>
       <b> Rating : {a.rating.rate}  {Star(a.rating.rate)}</b>
       <p><b>Count :{a.rating.count}</b></p>  
       <p><b style={{color:'blue'}}>{a.title}</b></p>         
      </div>)}
    </div>
  );
}

export default App;
