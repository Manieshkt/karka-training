import logo from './logo.svg';
import  { useState,useEffect} from 'react';
import { Login } from './Login';
import { Text } from './Text';
import { List } from './List';
import { Table } from './Table';
import './App.css';

function App() {
  // const url='https://jsonplaceholder.typicode.com/todos'
  // const [data, setData] = useState([]);
  // const [show,setShow]=useState(false)
  // const FetchInfo = () => { 
  //   return fetch(url)
  //     .then((response) => response.json())
  //     .then((a) => setData(a))
  //    }  
  // useEffect(() => {
  //   FetchInfo();
  // }, [])
  // console.log(data)
  return (
    <div className="App">
      <Table/>
      {/* <List/>
      <Text/>
      <Login/>
      <p>hi</p>
      {show!==true?(
        <><button onClick={()=>setShow(true)}>On</button>        
        </>
      ):(
        
      <table>   
        <button onClick={()=>setShow(false)}>OFF</button>
          <tr>
              <th>S.No</th>
              <th>User ID</th>
              <th>ID</th>
              <th>Title</th>
            </tr>   
            {data.map((a,index)=>(a.completed===true && a.id%2===0?(
          <tr>
            <td>{index+1}</td>
            <td>{a.userId}</td>
            <td>{a.id}</td>
            <td>{a.title}</td>
            <td>{a.completed}</td>
          </tr>
          ):(null)))}
      </table>
      )} */}
    </div>
  );
}

export default App;
