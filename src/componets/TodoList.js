import React, { useState } from 'react'
import '../App.css';
import { CreateTask } from '../models/createTask';
export const TodoList = () => {
    const [modal, setModal] = useState(false);
    const [taskList, setTaskList] = useState([]);
    const toggle = () => {
        setModal(!modal);
    }
    const saveTask = (taskObj) => {
        let tempList = taskList
        tempList.push(taskObj)
        setTaskList(tempList)
        setModal(false)

    };
    return (
        <>
            <div className='hearder text-center p-4'>
                <h3 className='mt-3'>Lista por hacer</h3>
                <button className='btn btn-danger mt-3' onClick={() => setModal(true)}>Crear Nota</button>
            </div>

            <div className='tack container'>
                {taskList.map((obj)=><li>{obj.Name}</li>)}
            </div>
            <CreateTask toggle={toggle} modal={modal} save={saveTask} />
        </>

    )
}
