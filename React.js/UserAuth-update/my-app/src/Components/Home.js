import React, { useEffect, useState } from "react";

export const Home = ({ logname }) => {
  const [login, setLogin] = useState([]);
  const [storedLogname, setStoredLogname] = useState(localStorage.getItem("logname"));

  useEffect(() => {
    const userData = localStorage.getItem("UserData");
    if (userData) {
      setLogin(JSON.parse(userData));
    }
  }, []);

  useEffect(() => {
    if (logname) {
      setStoredLogname(logname);
      localStorage.setItem("logname", logname);
    }
  }, [logname]);

  const user = login.find(user => user.username === storedLogname);
  const username = user ? user.username : "Unknown";
  // console.log(username);
  // console.log(storedLogname)
const update=()=>{
  const newUser = { ...user, username: "Maniesh" };
  const updatedLogin = login.map((loginUser) => (loginUser.username === user.username ? newUser : loginUser));
  setLogin(updatedLogin);
  localStorage.setItem("UserData", JSON.stringify(updatedLogin));
  setStoredLogname("Maniesh");
}
  return (
    <>
      <p>hi {username} </p>
      <button onClick={update} >Click </button>
    </>
  );
};