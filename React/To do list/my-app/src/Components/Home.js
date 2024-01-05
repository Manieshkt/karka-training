import React, { useEffect, useState } from "react"
import { FaTrash } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export const Home = () => {
    const userName = localStorage.getItem('Username');
    const password=localStorage.getItem('Password')
    const Users=localStorage.getItem('users')
    console.log(Users)
    const navigate = useNavigate();
    const handleLogout = () => {
        navigate('/');
    };
    const List=JSON.parse(localStorage.getItem(userName)) || []

    const [task, setTask] = useState('')
    const [tasks, setTasks] = useState(List)
    
    useEffect(() => {
        const stringiy = JSON.stringify(tasks)
        localStorage.setItem(userName, stringiy)
    }, [tasks])
    const handleAdd = () => {
        setTask('')
        setTasks([...tasks, task])
    }
    const handleDelete=(index)=>{
        const Delete=tasks.filter((a,i)=>i!==index)
        setTasks(Delete)
    }
    const[edit,setEdit]=useState(null)
    const handleEdit=(index)=>{
        // const Edit=tasks.find((i)=>i===index)
        // setEdit(null)   
        // setTask('')
        // const Edit=tasks[index]
        // setEdit(index)
        // setTask(Edit)
        const Edit = [...tasks];
        Edit[index] = task;
        setTasks(Edit);
        setEdit(null);
        setTask('');
        
    }
    const[reset,setReset]=useState(null)
    const[user,setUser]=useState(userName)
    const[pass,setPassword]=useState(password)
    const Data=[user,pass]
          
    const handleUpdate=()=>{
       console.log(user)
       localStorage.setItem("Update",JSON.stringify(Data)) 
       const Datas=localStorage.getItem("Update")
       const DataA=JSON.parse(Datas)
       const USERS=Users.filter
    }
    return (
        <>
            <div>
                
                {/* <div className="Round"> */}
                    {reset!==true?(
                        <>
                         <b onClick={()=>setReset(true)}>Profile</b>
                        
                        </>
                        // </div>
                    ):(
                    
               
                <>
                <label>Username : </label><input type="text" value={user} onChange={(e)=>setUser(e.target.value)}/><br></br>
                <label>Password : </label><input type="password" value={pass} onChange={(e)=>setPassword(e.target.value)}/>
                <button onClick={handleUpdate}>Update</button>
                </>)}
                <button onClick={handleLogout} className="Out">Logout</button>
                <div className="All">
                <h2  >Welcome, {userName} Create Your tasks</h2>
                <input  type="text" value={task} onChange={(e) => setTask(e.target.value)} /><button onClick={handleAdd}>Add</button>
                </div>
                <div className="List">
                <table className="Num">{tasks.map((a,index) =>
                    <tr key={index} >
                        {edit===index?(
                            <>
                            <td style={{border:'2px solid white',textAlign:'center',color:'rgb(208, 242, 136)'}}>{index+1}</td>
                            <td><input  type="text" value={task} onChange={(e) => setTask(e.target.value)} /></td>
                            <td > <button onClick={() => handleEdit(index)}>Save</button>   </td>
                            </>  
                        ):(
                            <>
                    <td style={{color:'rgb(208, 242, 136)',border:'2px solid white',textAlign:'center'}}>{index+1}</td>
                   <td><b style={{color:'rgb(208, 242, 136)',marginLeft:'20px',}}>{a}</b></td>  <td><input className="Check"  type="checkbox"/></td>
                   <td style={{marginLeft:'20px',border:'2px solid white',textAlign:'center'}}> <button className="Edit" onClick={()=>setEdit(index)}><FaEdit /></button></td>
                   <td style={{marginLeft:'20px',border:'2px solid white',textAlign:'center'}}><button className="Delete" onClick={()=>handleDelete(index)}><FaTrash /></button></td>
                    </>)}
                    </tr>
                )}
                </table>
                </div>
            </div>
        </>
    )
}