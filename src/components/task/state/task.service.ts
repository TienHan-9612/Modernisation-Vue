import axios from "axios";
import { TaskCreateModel } from "./task.model";

const api = axios.create({
    baseURL: 'https://localhost:7036/'
});

axios.defaults.baseURL = 'https://localhost:7036/';

export async function getAllTasks() {    
    try {
        const response = await axios.get('/api/tasks');
        return response.data;
      } catch (error) {
        // Handle error
        return [];
      }
}

export async function createTask(data: TaskCreateModel) {
    const response = await axios.post(`/api/task`, { user: data });
    return response.data;
}

export async function deleteTaskById(id: string) {
    const response = await axios.delete(`/api/tasks/${id}`);
    return response.data;
}




