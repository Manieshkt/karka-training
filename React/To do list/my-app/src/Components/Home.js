import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";

export const Home = () => {
    const userName = localStorage.getItem('Username');

    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('Username');
        navigate('/');
    };
    const [task, setTask] = useState('')
    const [tasks, setTasks] = useState([])
    useEffect(() => {
        const stringiy = JSON.stringify(tasks)
        localStorage.setItem("ToDo", stringiy)
        const Get = localStorage.getItem("ToDo", JSON.parse(stringiy))
    }, [tasks])

    const handleAdd = () => {
        setTask('')
        setTasks([...tasks, task])
    }



    return (
        <>
            <div>
                <button onClick={handleLogout}>Logout</button>
                <h2>Welcome, {userName} Create Your tasks</h2>
                <input type="text" value={task} onChange={(e) => setTask(e.target.value)} /><button onClick={handleAdd}>Add</button>
                <ol>{tasks.map(a =>
                    <li>{a}</li>
                )}</ol>
            </div>
        </>
    )
}