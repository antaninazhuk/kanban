import React from 'react';
import {useEffect, useState} from 'react';
import {ToDoTasks, DoingTasks, DoneTasks} from './components';
import { getTasks } from '../../../../services/tasks';
import './Board.scss'


export function Board({id}) {

  const [state, setState] = useState([]);

  useEffect(() => {
    
    getTasks(id).then(data => setState(data.attributes.tasks.data));
      
  }, [id])


const filteredIsTodo = state.filter(task => task.attributes.status === 'todo');
const filteredIsDone =  state.filter(task => task.attributes.status === 'done')
const filteredIsDoing =  state.filter(task => task.attributes.status === 'doing')
  
 
  return (
    <div className='board'>
       <ToDoTasks className='wrapper_tasks' data = {filteredIsTodo}/>
       <DoingTasks data = {filteredIsDoing}/>
       <DoneTasks data = {filteredIsDone}/>
    </div>
  )
}
