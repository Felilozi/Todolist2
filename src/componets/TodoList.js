import React, { useEffect, useState } from 'react'
import '../App.css';
import { CreateTask } from '../models/createTask';
import Cart from "./Card.js";
export const TodoList = () => {
    const [modal, setModal] = useState(false);
    const [taskList, setTaskList] = useState([]);
    useEffect(() =>{
        let arr= localStorage.getItem("taskList");
        let obj= JSON.parse(arr)
        if(obj){
            setTaskList(obj);
        }

    },[]);
    const deleteTaskList = (index) =>{
        let tempList = taskList
        tempList.splice(index,1)
        localStorage.setItem("taskList", JSON.stringify(tempList));
        setTaskList(tempList);
        window.location.reload();

    }
    const updateListArray = (obj,index) =>{
        let tempList = taskList
        tempList[index] = obj
        localStorage.setItem("taskList", JSON.stringify(tempList));
        setTaskList(tempList);
        window.location.reload();

    }

    const toggle = () => {
        setModal(!modal);
    }
    const saveTask = (taskObj) => {
        let tempList = taskList
        tempList.push(taskObj)
        localStorage.setItem('taskList',JSON.stringify(tempList));
        setTaskList(tempList)
        setModal(false)

    };
    return (
        <>
            <div className='hearder text-center p-4'>
                <h3 className='mt-3'>Lista por hacer</h3>
                <button className='btn btn-danger mt-3' onClick={() => setModal(true)}>Crear Nota</button>
            </div>

            <div className='task-container '>
                {taskList && taskList.map((obj,index)=><Cart taskObj={obj} index={index} deleteTaskList={deleteTaskList} updateListArray={updateListArray} />)}
            </div>
            <CreateTask toggle={toggle} modal={modal} save={saveTask} />
        </>

    )
}
