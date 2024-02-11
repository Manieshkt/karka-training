import React from "react";
import { useNavigate } from "react-router-dom";

export const Register = ({ regname, setRegname, regpass, setRegpass, regerror, setRegerror }) => {
   const navigate = useNavigate()
   const handleRegister = () => {
      if (regname !== '' && regpass !== '') {
         const data = {
            username: regname,
            password: regpass
         }
         //    localStorage.setItem('User',JSON.stringify([data]))
         const existingusers = JSON.parse(localStorage.getItem('UserData')) || []
         const check = existingusers.some(a => a.username === regname)
         if (check) {
            setRegerror("Username already exists")
         }
         else {
            const update = [...existingusers, data]
            console.log(update)
            localStorage.setItem('UserData', JSON.stringify(update))
            navigate('/')
         }
      }
      else {
         setRegerror('Username or Password should not be empty')
      }

   }
   return (
      <>
         <h1>Register Page</h1>
         <p>USERNAME : <input onChange={(e) => setRegname(e.target.value)} /></p>
         <p>PASSWORD : <input onChange={(e) => setRegpass(e.target.value)} /></p>
         <button onClick={handleRegister} >REGISTER</button>
         <p>{regerror}</p>
      </>
   )
}