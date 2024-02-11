import React, { useEffect, useState } from 'react';
import axios from 'axios';

export const Login=()=>{
   
    const [data,setData]=useState([])
    const[token,setToken]=useState(null)
    const email={
    "email": "eve.holt@reqres.in",
    "password": "cityslicka"
    }
    useEffect(()=>{
    const Fetch=async()=>{
        try{
            const response=await axios.post('https://reqres.in/api/login',email)
            setData(response.data)
            const Token=response.data.token
            setToken(Token)          
        }
        catch(error){
            console.log(error)
        }
    }
    Fetch()},[])
    console.log(data)   

    const[state,setState]=useState({email: "eve.holt@reqres.in",password: "cityslicka"})
    const handleSubmit=(e)=>{
         e.preventDefault()
            if (email.email===state.email && email.password===state.password){
            alert('Login Success')
            localStorage.setItem('All',JSON.stringify(email))
            const Content=JSON.parse(localStorage.getItem('All'))     
            localStorage.setItem('Token',JSON.stringify(token))  
            const TokenStorage=JSON.parse (localStorage.getItem('Token'))     
            localStorage.setItem('ALL',JSON.stringify({Content,TokenStorage}))  
        }
        else{
            alert('Login Failed')
        }        
    }
    return(
        <>
            <h1>Login</h1>
            <label>Email : </label><input type='text' value={state.email} onChange={(e)=>setState({...state,email:e.target.value})}/>
            <label>Password : </label><input type='text' value={state.password} onChange={(e)=>setState({...state,password:e.target.value})}/>
            <button onClick={handleSubmit}>Submit</button>
        </>
    )
}