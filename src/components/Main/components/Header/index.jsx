import React from 'react';
import { useState, useEffect } from 'react';
import { getBoardById } from '../../../../services/tasks';

import './Header.scss'

export function Header({id}) {
  console.log(id);

  const [state, setState] = useState('null');

  useEffect(() => {
   
    getBoardById(id).then(data => setState(data.name));
    console.log(state);
    
  }, [])




  return (    
    <div className='header'>
      <h2 className='header__title'>{state}</h2>
      <button className='add_task'>+ Add New Task</button>
    </div>    
  )
}
