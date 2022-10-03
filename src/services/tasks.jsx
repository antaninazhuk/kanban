import axios from 'axios';

export async function getTasks(id) {
    const response = await axios.get(`http://localhost:1337/api/boards/${id}/?populate=*`);
    const data = response.data.data;
    return data.attributes.tasks.data;

}

export async function getBoardById(id) {
    const response = await axios.get(`http://localhost:1337/api/boards/${id}`);
    const data = response.data.data;
    console.log(data.attributes);
    return data.attributes

}