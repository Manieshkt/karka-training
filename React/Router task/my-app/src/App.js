import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router ,Route,Link,Routes} from "react-router-dom"
import { Home } from "./Components/Home"
import { Profile } from './Components/Profile';

function App() {
  const isAuthorized=true
  return (
    <Router>
      <div>
        <Routes>
          <Route path='/' element={isAuthorized?<Profile/>:<Home/>}></Route>    
        </Routes>
      </div>
    </Router>

  );
}

export default App;
