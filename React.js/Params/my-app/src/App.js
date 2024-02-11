import './App.css';
import { Home } from './Home';
import {BrowserRouter as Router ,Route,Link,Routes} from "react-router-dom"
function App() {
  return (
    <Router>
    <div className="App">
        <nav>
       <Link to ='./Home/1'>Home</Link>
       <Link to ='./Home/2'>Home</Link>
       </nav>  
       <Routes>   
         <Route path='/' element={<p>hi</p>}></Route>   
         <Route path="/Home/:ji" element={<Home/>}></Route>
        </Routes>
    </div>
    </Router>
    
  );
}

export default App;
