import React from 'react';
import { useState} from 'react';
import { Modal, Button, FormControl, FormSelect } from 'react-bootstrap';
import { addNewTask } from '../services/tasks'



export function AddNewTask({ show, onShow, name }) {
  const [taskName, setTaskName] = useState('');
  const [taskDescr, settaskDescr] = useState('');
  const [taskStatus, settaskStatus] = useState('');

  function handleChangeTaskName(e) {
    setTaskName(e.target.value)
  }

  function handleChangeTaskDescr(e) {
    settaskDescr(e.target.value)
  }

  function handleChangeTaskStatus(e) {
    settaskStatus(e.target.value)
  }


  function handleCreate() {
    addNewTask({ title: taskName, description: taskDescr, status: taskStatus, name: name })
    onShow();
  }

  return (
    <>
      <Modal show={show} onHide={onShow}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FormControl type='text' placeholder='Enter task name' className='add-input' onChange={handleChangeTaskName} />
          <FormControl type='text' placeholder='Enter task description' className='add-input' onChange={handleChangeTaskDescr} />
          <FormSelect aria-label="Default select example" onChange={handleChangeTaskStatus}>
            <option>Select status todo</option>
            <option value="todo">todo</option>
            <option value="doing">doing</option>
            <option value="done">done</option>
          </FormSelect>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleCreate}>
            Create task
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}