import logo from './logo.svg';
import './App.css';
import {Name} from './Name';
import {Home} from './Home';
import {Contact} from './Contact'
import {About} from './About'
import {Button} from './button';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <div>
        <div>hi</div>
        <div>hlo</div>
        <Name/>
        <Home/>
        <Contact/>
        <About/>
        <Button/>
      </div>
      </header>
    </div>
  );
}

export default App;
