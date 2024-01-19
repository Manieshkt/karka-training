import React, { useEffect, useState } from 'react';
import { Delete } from './Buttons/Delete';
import { Add } from './Buttons/Add';
import { Edit } from './Buttons/Edit';
import { Save } from './Buttons/Save';
import { Cancel } from './Buttons/Cancel';

export const Task = () => {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    localStorage.setItem('Save', JSON.stringify(tasks));
  }, [tasks]);

  const [edit, setEdit] = useState(null);
  const [save, setSave] = useState('');
  return (
    <>
      <input type='text' value={task} onChange={(e) => setTask(e.target.value)} />
      <Add task={task} setTask={setTask} tasks={tasks} setTasks={setTasks}/>

      {tasks.map((item, index) => (
        <table key={index}>
          <tbody>
            <tr key={index}>
              <td>{index + 1}</td>
              {edit === index ? (
                <>
                  <td><input type='text' value={save}  onChange={(e) => setSave(e.target.value)}/></td>                 
                  <td><Save tasks={tasks} setTasks={setTasks} save={save} edit={edit} setEdit={setEdit} setSave={setSave} /></td>
                  <td><Cancel setEdit={setEdit} setSave={setSave}  /></td>
                </>
              ) : (
                <>
                  <td>{item}</td>
                  <td><Edit tasks={tasks} edit={edit} setEdit={setEdit} save={save} setSave={setSave} index={index} /> </td>                 
                  <td> <Delete index={index} task={tasks} settask={setTasks} /></td>
                </>
              )}
            </tr>
          </tbody>
        </table>
      ))}
    </>
  );
};
