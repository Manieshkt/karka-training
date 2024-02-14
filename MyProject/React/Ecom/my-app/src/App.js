import './App.css';
import {useEffect,useState} from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import axios from 'axios';
import { Login } from './Components/Login';
import { Register } from './Components/Register';
import { Cartpage } from './Components/Cartpage';
import { Products } from './Components/Products';

function App() {
  const[data,setData]=useState('')
  useEffect(()=>{
      axios.get('https://dummyjson.com/products')
      .then(res=>{
        setData(res.data)
        console.log(res.data)
      })
      .catch(error=>{
        console.log('Error Fetching data')
      })
  },[])

  const[regname,setRegname]=useState('')
  const[regpass,setRegpass]=useState('')
  const[error,setError]=useState('')
  const[logname,setLogname]=useState('')
  const[logpass,setLogpass]=useState('')

  return (
    <Router>
    <div className="App">    
        <Routes>         
          <Route path='/' element={<Login logname={logname} logpass={logpass} error={error} setError={setError} setLogpass={setLogpass} setLogname={setLogname}/>} />
          <Route path='/Register' element={<Register regname={regname} regpass={regpass} error={error} setError={setError} setRegpass={setRegpass} setRegname={setRegname} />} />
          <Route path='/Products' element={<Products data={data} />} />
          <Route path='/Cartpage' element={<Cartpage/>} />
        </Routes>        
    </div>
    </Router>
  );
}

export default App;
