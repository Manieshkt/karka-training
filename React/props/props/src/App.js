import logo from './logo.svg';
import './App.css';
import {Home} from "./Home";
import {Use} from  "./Usestate"
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Home/>
        <Use/>
      </header>
    </div>
  );
}

export default App;
