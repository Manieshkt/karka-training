import './App.css';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import { Login } from './Components/Login';
import { Register } from './Components/Register';
import { Cartpage } from './Components/Cartpage';
import { Products } from './Components/Products';

function App() {
  const [data, setData] = useState([])
  useEffect(() => {
    axios.get('https://dummyjson.com/products')
      .then(res => {
        setData(res.data.products)
        // console.log(res.data.products)
      })
      .catch(error => {
        console.log('Error Fetching data')
      })
  }, [])

  const [regname, setRegname] = useState('')
  const [regpass, setRegpass] = useState('')
  const [error, setError] = useState('')
  const [logname, setLogname] = useState('')
  const [logpass, setLogpass] = useState('')
  const [count, setCount] = useState(0)
  const [filter, setFilter] = useState([])

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/' element={<Login logname={logname} setCount={setCount} setFilter={setFilter} logpass={logpass} setLogpass={setLogpass} setLogname={setLogname} />} />
          <Route path='/Register' element={<Register regname={regname} regpass={regpass} error={error} setError={setError} setRegpass={setRegpass} setRegname={setRegname} />} />
          <Route path='/Products' element={<Products logname={logname} setLogname={setLogname} filter={filter} setFilter={setFilter} data={data} count={count} setCount={setCount} />} />
          <Route path='/Cartpage' element={<Cartpage logname={logname} setLogname={setLogname} filter={filter} setFilter={setFilter} count={count} setCount={setCount} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
