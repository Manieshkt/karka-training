import React, { useState } from "react";
import {Link , useNavigate} from "react-router-dom"

export const Login=()=>{
    const [user,setUser]=useState({Username:'',Password:''})
    const [error,setError]=useState('')
  const navigate = useNavigate();

  const handleLogin = () => {
    const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
    const foundUser = existingUsers.find(
      (u) => u.Username === user.Username && u.Password === user.Password
    );

    if (foundUser) {
      localStorage.setItem('Username', user.Username);
      navigate('/Home');
    } else {
      setError('Invalid username or password. Please try again.');
    }
  };



    return(
        <>
            <h1>Login</h1>
            <form>
            <label>Username :</label>
            <input type="text" value={user.Username} placeholder="Username"  onChange={(e) => setUser({ ...user, Username: e.target.value })}/>
            <label>Password :</label>
            <input type="password" value={user.Password} placeholder="Password"  onChange={(e) => setUser({ ...user, Password: e.target.value })}/>
            <button onClick={handleLogin}>Login</button>
            <Link to="/Register"><button>Register</button></Link> 
            </form>
        </>
    )
}