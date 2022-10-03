import React from 'react';
import './CardTask.scss';

export default function CardTask({data}) {


  return (
   
    <div className='card_task'>{data.title}</div>
   
  )
}
