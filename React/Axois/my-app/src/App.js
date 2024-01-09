import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import {useEffect, useState} from 'react'

function App() {
  const Url='https://jsonplaceholder.typicode.com/todos'
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
  console.log(data)
  return (
    <div className="App">     
      <table>
        <tr>
          <th>S.no</th>
          <th>Id</th>
          <th>User Id</th>
          <th>Title</th>
          <th>Completed</th>
        </tr>
      {data.map((a,index)=>a.completed===true?(
        <tr>
          <td>{index+1}</td>
          <td>{a.id}</td>
          <td>{a.userId}</td>
          <td>{a.title}</td>
          <td>{a.completed.toString()}</td>
        </tr>):null)}
      </table>
      
    </div>
  );
}

export default App;
