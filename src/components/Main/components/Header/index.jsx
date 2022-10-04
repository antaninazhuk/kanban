import React from 'react';
import { useState, useEffect } from 'react';
import { getBoardById } from '../../../../services/boards';
import { AddNewTask } from '../../../../common/AddNewTask';

import './Header.scss'

export function Header({id}) {
  console.log(id);

  const [state, setState] = useState('null');

  useEffect(() => {
   
    getBoardById(id).then(data => setState(data.name));
    console.log(state);
    
  }, [state])

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (    
    <div className='header'>
      <h2 className='header__title'>{state}</h2>
      <button onClick={handleShow} className='add_task'>+ Add New Task</button>
      <AddNewTask show={show} onShow={handleClose} name={state} />
    </div>    
  )
}
