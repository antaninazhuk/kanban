import React from 'react';
import { useParams } from 'react-router-dom';
import './Board.scss'
import {ToDoTasks, DoingTasks, DoneTasks} from './components'

export function Board() {

  const { id } = useParams();
 
  return (
    <div className='board'>
       <ToDoTasks className='wrapper_tasks' id = {id}/>
       <DoingTasks id = {id}/>
       <DoneTasks id = {id}/>
    </div>
  )
}
