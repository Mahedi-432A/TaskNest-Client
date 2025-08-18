import { useEffect, useState } from 'react';
import { getTasks, deleteTask, updateTask } from '../api/taskApi';
import TaskCard from './TaskCard';
import TaskForm from './TaskForm';


export default function TaskList() {
const [tasks, setTasks] = useState([]);


const fetchTasks = async () => {
try {
const { data } = await getTasks();
setTasks(data.tasks);
} catch (error) {
console.error(error);
}
};


useEffect(() => { fetchTasks(); }, []);


const handleDelete = async (id) => {
await deleteTask(id);
setTasks(tasks.filter(t => t._id !== id));
};


const handleUpdate = async (id) => {
// Example: toggle status to 'done'
const task = tasks.find(t => t._id === id);
const newStatus = task.status === 'done' ? 'todo' : 'done';
const { data } = await updateTask(id, { status: newStatus });
setTasks(tasks.map(t => t._id === id ? data.task : t));
};


const handleCreated = (newTask) => {
setTasks([newTask, ...tasks]);
};


return (
<div>
<TaskForm onCreated={handleCreated} />
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
{tasks.map(task => (
<TaskCard key={task._id} task={task} onDelete={handleDelete} onUpdate={handleUpdate} />
))}
</div>
</div>
);
}