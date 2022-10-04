import React from 'react';
import CardTask from '../../common/CardTask';

export function DoingTasks({data}) {


  return (
    <div>
      <h2 className='title title_indigo'>DOING({data?.length})</h2>
       {data?.map(task => <CardTask key={task.id} data = {task.attributes} />)}
    </div>
  )
}
