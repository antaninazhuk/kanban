import React from 'react';
import { useState} from 'react';
import { Modal, Button, FormControl } from 'react-bootstrap';
import './Model.scss'



export function CreateBoardModal({ show, onShow, onCreate }) {
  const [state, setState] = useState('');

  function handleChange(e) {
    setState(e.target.value)
  }

  function handleCreate() {
    onCreate(state);
    onShow();
  }

  return (
    <>
      <Modal show={show} onHide={onShow}>
        <Modal.Header closeButton>
          <Modal.Title>Create new board</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FormControl type='text' placeholder='Enter board name' className='add-input' onChange={handleChange} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleCreate}>
            Create board
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}