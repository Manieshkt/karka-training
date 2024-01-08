import logo from './logo.svg';
import  { useState,useEffect} from 'react'
import './App.css';

function App() {
  const url='https://jsonplaceholder.typicode.com/todos'
  const [data, setData] = useState([]);

  const FetchInfo = () => { 
    return fetch(url)
      .then((response) => response.json())
      .then((a) => setData(a))
     }  
  // useEffect(() => {
    FetchInfo();
  // }, [])
  // console.log(data)
  return (
    <div className="App">
      <p>hi</p>
      {data.map((a,index)=>(a.completed===true && a.id%2===0?
      (<table>     
          <tr>
            <td>{index+1}</td>
            <td>{a.userId}</td>
            <td>{a.id}</td>
            <td>{a.title}</td>
            <td>{a.completed}</td>
          </tr>
      </table>):(null)))}
    </div>
  );
}

export default App;
