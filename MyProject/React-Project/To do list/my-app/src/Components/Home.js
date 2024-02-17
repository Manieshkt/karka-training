import React, { useEffect, useState } from "react";
import { FaTrash, FaEdit } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const userName = localStorage.getItem("Username");
  const Users = localStorage.getItem("users");
  const navigate = useNavigate();
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem(userName)) || []);
  const [edit, setEdit] = useState(null);
  const [reset, setReset] = useState(false);
  const [user, setUser] = useState(userName);
  const [pass, setPassword] = useState(localStorage.getItem("Password") || "");
  const [line, setLine] = useState({});
  // const [search, setSearch] = useState(false);

  useEffect(() => {
    const stringifiedTasks = JSON.stringify(tasks);
    localStorage.setItem(userName, stringifiedTasks);
  }, [tasks]);

  const handleLogout = () => {
    navigate("/");
  };

  const handleAdd = () => {
    setTask("");
    setTasks([...tasks, task]);
    // setSearch(false);
  };

  const handleDelete = (index) => {
    const updatedTasks = tasks.filter((a, indexes) => indexes !== index);
    setTasks(updatedTasks);
  };

  const handleEdit = (index) => {
    setEdit(index);
    setTask(tasks[index]); 
  };

  const handleSave = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index] = task;
    setTasks(updatedTasks);
    setEdit(null);
    setTask("");
  };

  const handleUpdate = () => {
    localStorage.setItem("Username", user);
    localStorage.setItem("Password", pass);
    setReset(false);
    const main = [
      {
        Username: user,
        Password: pass,
      },
    ];
    localStorage.setItem("users", JSON.stringify(main));
  };

  const handleLine = (index) => {
    setLine((a) => ({ ...a, [index]: !a[index] }));
  };

  return (
    <>
      <div>
        {reset !== true ? (
          <>
            <b onClick={() => setReset(true)}>Profile</b>
          </>
        ) : (
          <>
            <label>Username : </label>
            <input type="text" value={user} onChange={(e) => setUser(e.target.value)} />
            <br />
            <label>Password : </label>
            <input type="password" value={pass} onChange={(e) => setPassword(e.target.value)} />
            <button onClick={handleUpdate}>Update</button>
          </>
        )}
        <button onClick={handleLogout} className="Out">
          Logout
        </button>
        <div className="All">
          <h2>Welcome, {userName} Create Your tasks</h2>
          <input type="text" value={task} onChange={(e) => setTask(e.target.value)} />
          <button onClick={handleAdd}>Add</button>
          {/* <button style={{ marginTop: "5px" }} onClick={() => setSearch(!search)}>
            Search
          </button> */}
        </div>

        <div className="List">
          <table className="Num">
            {tasks.map((a, index) => (
              <tr key={index}>
                <td style={{ color: "rgb(208, 242, 136)", border: "2px solid white", textAlign: "center" }}>{index + 1}</td>
                <td>
                  {edit === index ? (
                    <input type="text" value={task} onChange={(e) => setTask(e.target.value)} />
                  ) : (
                    <b
                      style={{
                        color: "rgb(208, 242, 136)",
                        marginLeft: "20px",
                        textDecoration: line[index] ? `line-through` : "none",
                      }}
                    >
                      {a}
                    </b>
                  )}
                </td>
                <td>
                  {edit === index ? (
                    <button onClick={() => handleSave(index)}>Save</button>
                  ) : (
                    <>
                      <input type="checkbox" onClick={() => handleLine(index)} />
                      <button style={{ marginLeft: "20px" }} onClick={() => handleEdit(index)}>
                        <FaEdit />
                      </button>
                      <button style={{ marginLeft: "20px" }} onClick={() => handleDelete(index)}>
                        <FaTrash />
                      </button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </table>
        </div>
      </div>
    </>
  );
};
