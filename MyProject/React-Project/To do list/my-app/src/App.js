import logo from './logo.svg';
import './App.css';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from './Components/Home';
import { Register } from './Components/Register';
import { Login } from './Components/Login';

function App() {
  return (
    <Router>
    <div className="App">
        <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Home" element={<Home />} />
        </Routes>
    </div>
    </Router>
  );
}

export default App;
