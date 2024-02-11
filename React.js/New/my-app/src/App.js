import { Product } from './Components/ProductComponent/Product';
import './App.css';
import axios from 'axios';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Cartpage } from './Components/ProductComponent/Cartpage/Cartpage';

function App() {
  const Producturl='https://dummyjson.com/products'
  const [product,setProduct]=useState([])
  const [count,setCount]=useState(0)
  const [filter,setFilter]=useState([])

  useEffect(()=>{
    const FetchProduct=async()=>{
      try{
        const response=await axios.get(Producturl)
        console.log(response.data)
        setProduct(response.data.products)
      }
      catch (error){
        console.log(error)
      }
    }
    FetchProduct()},[])

  return (
    <Router>
      
    <div className="App">
    <Routes>
      < >
        <Route path='/' element={<Product filter={filter} setFilter={setFilter} product={product} count={count} setCount={setCount} />}></Route>
      </>
        <Route path='/Cartpage' element={<Cartpage product={product} count={count} setCount={setCount} Filter={filter} setFilter={setFilter} />}></Route>
      </Routes>
    </div>
      
    </Router>
  );
}

export default App;
