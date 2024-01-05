import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
export const Register=()=>{
    const [user,setUser]=useState({Username:'',Password:''})
    const navigate=useNavigate()
    const handleRegister=()=>{
        if (user.Username && user.Password){
              const existingUsers = JSON.parse(localStorage.getItem('users')) || [];

      const isUsernameTaken = existingUsers.some((u) => u.Username === user.Username);

      if (isUsernameTaken) {
        alert('Username is already taken. Please choose another username.');
      } else {
        const updatedUsers = [...existingUsers, user];
        localStorage.setItem('users', JSON.stringify(updatedUsers));
        alert('Registration successful. You can now login.');
        navigate('/');
      }
    } else {
      alert('Please enter both username and password');
    }
        }
    
    return(
        <>
        <div className="Log">
          <div className="LogAll">
            <h1>Register</h1>
            <form className="Form">
            <label>Username : </label>
            <input style={{padding:'5px',borderRadius:'10px',border:'0'}} placeholder="Enter username" value={user.Username} type="text" onChange={(e) => setUser({ ...user, Username: e.target.value })}/><br></br><br></br>
            <label>Password : </label>
            <input style={{padding:'5px',borderRadius:'10px',border:'0'}} placeholder="Enter password" value={user.Password} type="password" onChange={(e)=>setUser({...user,Password:e.target.value})}/><br></br><br></br>
            <div>
            <button onClick={handleRegister}>Register</button>
            <Link to="/"><button style={{marginLeft:'10px'}}>Login</button></Link>
            </div>
            </form>
            </div>
            </div>
        </>
    )
}