import axios from 'axios';

export async function getBoardById(id) {
    const response = await axios.get(`http://localhost:1337/api/boards/${id}`);
    const data = response.data.data;
    console.log(data.attributes);
    return data.attributes

}

export async function createBoard(name) {
    
    const response = await axios.post('http://localhost:1337/api/boards', {
      data: {
        name
       }
    })
  
    return response
  }