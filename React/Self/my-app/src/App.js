import logo from './logo.svg';
import './App.css';
import { Counter } from './Components/Counter'; 
import { useState } from 'react';

function App() {
  const [hello,setHello]=useState("hi")
  return (
    <div className="App">
      <Counter Hello={hello}/>
    </div>
  );
}

export default App;
