import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router ,Route,Link,Routes} from "react-router-dom"
import {Home} from './Components/Home';
import { Contact } from './Components/Contact';
import {About} from './Components/About';
import { Button } from './Components/Button';

const App=()=>{
  return (
   <Router>
      <div>
        <nav>         
          {/* <Link to="/">Home</Link>
          <Link to="/Contact">Contact</Link> */}
          <Link to="/About/hi/id/heloo">About</Link>
          {/* <Link to="/Button">Button</Link> */}
        </nav>
        <Routes>
          {/* <Route path="/" element={<Home/>}></Route>
          <Route path="/Contact" element={<Contact/>}></Route> */}
          <Route path="/About/hi/id/:ji" element={<About/>}></Route>
          {/* <Route path="/Button" element={<Button/>}></Route> */}
        </Routes>
      </div>
   </Router>
  );
}

export default App;
