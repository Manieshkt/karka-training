import './App.css';
import { useState } from 'react';
import { Home } from './Components/Home';
import { Register } from './Components/Register';
import { Login } from './Components/Login';
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom"

function App() {
  const [regname, setRegname] = useState('')
  const [regpass, setRegpass] = useState('')
  const [regerror, setRegerror] = useState('')
  const[logname,setlogName]=useState('')
  const[logpass,setlogPass]=useState('')
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/' element={<Login logname={logname} logpass={logpass} setlogName={setlogName} setlogPass={setlogPass} />}></Route>
          <Route path='/Home' element={<Home logname={logname} logpass={logpass} setlogName={setlogName} setlogPass={setlogPass} />}></Route>
          <Route path='/Register' element={<Register regname={regname} setRegname={setRegname} regpass={regpass} setRegpass={setRegpass} regerror={regerror} setRegerror={setRegerror} />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
