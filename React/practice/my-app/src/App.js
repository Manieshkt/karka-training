import './App.css';
import {BrowserRouter as Router ,Route,Link,Routes} from "react-router-dom"
import {Button} from "./Button"
import {Cartpage} from "./Cartpage"
function App() {
 
  return (
    <div className="App">   
    <Router>
      <nav>
      <Link to="/" ></Link>
      </nav>
    <Routes>
    <Route path='/' element={<Button/>}></Route>
    <Route path='/Cart' element={<Cartpage/>}></Route>
      
        
    </Routes>
</Router> 
    </div>
  );
}

export default App;
