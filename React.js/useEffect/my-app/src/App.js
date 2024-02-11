import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from 'react';
import { Change } from './Useref';
import { Input } from './Components/Input';
import { Picture } from './Components/Picture';
import { Toggle } from './Components/Toggle';
import { Focus } from './Components/FocusInput';
import { Stopwatch } from './Components/Stopwatch';
import { Video } from './Components/Video';

function App() {
  const[count,setCount]=useState(0)

  const handleClick=()=>{
    setCount(count+1)
  }
  useEffect(()=>{
    console.log('hello')
    return()=>{
    console.log('hi')
    }
  },[count])

  return (
    <div className="App">
      <button onClick={handleClick}>Click</button>
      <p>{count}</p>
      <Change/>
      <Input/>
      <Picture/>
      <Toggle/>
      <Focus/>
      <Stopwatch/>
      <div>
      <Video/>
      </div>
    </div>
  );
}

export default App;
