import React, { useState } from 'react'
import EditTask from '../models/editTask';
const Card = ({ taskObj, index,deleteTaskList,updateListArray}) => {
    const [modal,setModal]=useState(false)
    const colors = [
        {
            primaryColor: "#5D93E1",
            secondaryColor: "#ECF3FC"
        },
        {
            primaryColor: "#F9D288",
            secondaryColor: "#FEFAF1"
        },
        {
            primaryColor: "#5DC250",
            secondaryColor: "#F2FAF1"
        },
        {
            primaryColor: "#F48687",
            secondaryColor: "#FDF1F1"
        },
        {
            primaryColor: "#B964F7",
            secondaryColor: "#F3F0FD"
        }
    ]
    const toggle = () => {
        setModal(!modal);
    }
    const updateTask = (obj) => {
        updateListArray(obj,index );
    }
    const handleDelete = () => {
        deleteTaskList(index);
    };


    return (
        <div class="card-wrapper m-3">
            <div class="card-top" style={{ "background-color": colors[index % 5].primaryColor }}></div>
            <div class="task-holder">
                <span class="card-header" style={{ "background-color": colors[index % 5].secondaryColor, "border-radius": "10px" }}>
                    {taskObj.Name}</span>
                <p class='mt-2'style={{ overflow: 'auto', maxHeight: '150px', wordWrap: 'break-word', wordBreak: 'break-all'}} >{taskObj.Description}</p>

                <div style={{ "position": "absolute", "right": "20px",  }}>
                    <i class="far fa-edit m-1" style={{ "color": colors[index % 5].primaryColor, "cursor": "pointer"  }} 
                    onClick={()=>setModal(true)}></i>
                    <i class="fas fa-trash-alt" style={{ "color": colors[index % 5].primaryColor ,"cursor": "pointer" }}
                        onClick={handleDelete}></i>
                </div>
            </div>
            <EditTask modal={modal} toggle={toggle} updateTask={updateTask} taskObj={taskObj} />
        </div>
    );
};
export default Card
// onClick={handleDelete}
// onClick={() => setModal(true)}