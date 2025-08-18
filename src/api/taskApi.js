import axios from 'axios';


const API = axios.create({
baseURL: 'http://localhost:5000/api/tasks',
headers: { 'Content-Type': 'application/json' }
});


API.interceptors.request.use(config => {
const token = localStorage.getItem('token');
if (token) config.headers.Authorization = `Bearer ${token}`;
return config;
});


export const createTask = (taskData) => API.post('/', taskData);
export const getTasks = (filters) => API.get('/', { params: filters });
export const updateTask = (taskId, data) => API.put(`/${taskId}`, data);
export const deleteTask = (taskId) => API.delete(`/${taskId}`);