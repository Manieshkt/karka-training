import './App.css';
import { Home } from './Components/Home';
import { About } from './Components/About';
import { Admin } from './Components/Admin';
import {BrowserRouter as Router ,Route,Link,Routes} from "react-router-dom"

function App() {
  return (
    <Router>
     <div className="App">
    <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/About' element={<About/>}></Route>
    <Route path='/Admin' element={<Admin/>}></Route>
    </Routes>
    </div>   
    </Router>
  );
}

export default App;
