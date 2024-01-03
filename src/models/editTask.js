import React, { useEffect, useState } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


export const EditTask = ({ modal, toggle,updateTask,taskObj}) => {
    const [taskName, setTaskName] = useState("");
    const [descripcion, setDescription] = useState("");
    const maxCharacters = 300;
    const handleChange = (e) => {
        const { name, value } = e.target
        if (value.length <= maxCharacters) {
        if (name === "taskName") {
            setTaskName(value)
        } else {
            setDescription(value)
        }}
    };
    const handleUpdate= (e)=>{
        e.preventDefault();
        let tempObj = {}
        tempObj["Name"]= taskName
        tempObj["Description"]= descripcion
        updateTask(tempObj);
        

    }
    
    useEffect(()=>{
        setTaskName(taskObj.Name)
        setDescription(taskObj.Description)
    },[])


    return (
        <div>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Editar Nota</ModalHeader>
                <ModalBody>
                    <form>
                        <div className='mb-3'>
                            <label>Nombre de la Nota</label>
                            <input 
                            class="form-control" 
                            type="text" 
                            value={taskName} 
                            onChange={handleChange} 
                            name="taskName" />
                        </div>
                        <div className='mb-3'  >
                            <label>Descripcion</label>
                            <textarea 
                            class="form-control" 
                            rows="5" 
                            value={descripcion} 
                            onChange={handleChange} 
                            name="descripcion" 
                            placeholder="Escribe aquí (máximo 300 caracteres)"
                            ></textarea> 
                            <p>Caracteres restantes: {maxCharacters - descripcion.length}</p>

                        </div>

                    </form>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={handleUpdate}>
                        Editar
                    </Button>{' '}
                    <Button color="secondary" onClick={toggle}>
                        Cancelar
                    </Button>
                </ModalFooter>
            </Modal>
        </div>
    )
}

export default EditTask ;