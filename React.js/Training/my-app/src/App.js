import logo from './logo.svg';
import './App.css';
import { Gregory } from './Gregorylist';
import { Passing } from './Passingprops';

function App() {
 
  return (
 <>
    <Gregory/>
    <Passing person={{name:"Katsuko",age:42}}/>
 </>
  )
}

export default App;
