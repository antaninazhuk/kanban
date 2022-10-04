import React from 'react';
import CardTask from '../../common/CardTask';

export function DoneTasks({data}) {


  return (
    <div>
      <h2 className='title title_green'>DONE({data?.length})</h2>
       {data?.map(task => <CardTask key={task.id} data = {task.attributes} />)}
    </div>
  )
}
