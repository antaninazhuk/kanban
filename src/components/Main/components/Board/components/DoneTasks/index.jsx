import React from 'react';
import {useState, useEffect} from 'react';
import { getTasks } from '../../../../../../services/tasks';
import CardTask from '../../common/CardTask';

export function DoneTasks({id}) {

  const [state, setState] = useState(null);

  useEffect(() => {
   
    getTasks(id).then(data => setState(data.filter(task => task.attributes.status === 'done')));
   
    
  }, [])


  return (
    <div>
      <h2 className='title'>DONE({state?.length})</h2>
       {state?.map(task => <CardTask key={task.id} data = {task.attributes} />)}
    </div>
  )
}
