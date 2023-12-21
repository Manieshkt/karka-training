import './App.css';
import {BrowserRouter as Router ,Route,Link,Routes} from "react-router-dom"
import {Button} from "./Button"
import { useState } from 'react';
import { Cart } from './Cart';
function App() {
  const [first,last]=useState(null)
  const proppiec=(a)=>{
      last(a)
  }
  // console.log(first)
  return (
    <div className="App">   
    <Router>
      <nav>
      <Link to="/" ></Link>
      </nav>
    <Routes>
    <Route path='/' element={<Button you={proppiec}/>}></Route>
    <Route path='/Cart' element={<Cart propb={first}/>}></Route>
      
        
    </Routes>
</Router> 
    </div>
  );
}

export default App;
