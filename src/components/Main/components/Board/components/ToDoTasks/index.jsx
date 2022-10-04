import React from 'react';
import CardTask from '../../common/CardTask';
import '../../Board.scss'

export function ToDoTasks({data}) {




  return (
    <div>
      <h2 className='title title_blue'>TODO({data?.length})</h2>
       {data?.map(task => <CardTask key={task.id} data = {task.attributes} />)}
    </div>
  )
}
