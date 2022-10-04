import axios from 'axios';

export async function getTasks(id) {
    const response = await axios.get(`http://localhost:1337/api/boards/${id}/?populate=*`);
    const data = response.data.data;
    return data;

}


export async function addNewTask(title, description, status, name) {
  const response = await axios.post('http://localhost:1337/api/tasks/?populate=*', {
    data: {
        title,
        description,
        status,
        boards: {
          data:{
            name
          }          
        }
    }
  })

  return response
}