import React, { useState } from "react";
import {Link , useNavigate} from "react-router-dom"

export const Login=()=>{
    const [user,setUser]=useState({Username:'',Password:''})
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault()
    const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
    const foundUser = existingUsers.find(
      (u) => u.Username === user.Username && u.Password === user.Password
    );

    if (foundUser) {
      localStorage.setItem('Username', user.Username);
      localStorage.setItem('Password',user.Password)

      navigate('/Home');
    } else {
      alert('Invalid username or password. Please try again.');
    }
  };

    return(
        <div className="Log">
          <div className="LogAll">
            <h1 >LOGIN</h1>
            <form className="Form">
            <label>Username : </label>
            <input style={{padding:'5px',borderRadius:'10px',border:'0'}} type="text" value={user.Username} placeholder="Username"  onChange={(e) => setUser({ ...user, Username: e.target.value })}/><br></br><br></br>
            <label>Password : </label>
            <input  style={{padding:'5px',borderRadius:'10px',border:'0'}} type="password" value={user.Password} placeholder="Password"  onChange={(e) => setUser({ ...user, Password: e.target.value })}/><br></br><br></br>
            <div >
            <button  onClick={handleLogin}>Login</button>
            <Link to="/Register"><button style={{marginLeft:'10px'}}>Register</button></Link> 
            </div>
            </form>
            </div>
        </div>
    )
}