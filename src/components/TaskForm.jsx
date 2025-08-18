// import { useState } from "react";
// import axios from "axios";

// const TaskForm = ({ onTaskAdded }) => {
//   const [formData, setFormData] = useState({
//     title: "",
//     description: "",
//     dueDate: "",
//     priority: "medium",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!formData.title) return;
//     try {
//       await axios.post("http://localhost:5000/api/tasks", formData);
//       onTaskAdded(); // reload tasks
//       setFormData({ title: "", description: "", dueDate: "", priority: "medium" });
//     } catch (err) {
//       console.error("Error adding task:", err);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className="bg-white p-4 rounded-xl shadow mb-6">
//       <h2 className="text-xl font-bold mb-4">Add New Task</h2>
//       <input
//         name="title"
//         value={formData.title}
//         onChange={handleChange}
//         placeholder="Title"
//         className="w-full border p-2 rounded mb-2"
//         required
//       />
//       <textarea
//         name="description"
//         value={formData.description}
//         onChange={handleChange}
//         placeholder="Description"
//         className="w-full border p-2 rounded mb-2"
//       />
//       <input
//         type="date"
//         name="dueDate"
//         value={formData.dueDate}
//         onChange={handleChange}
//         className="w-full border p-2 rounded mb-2"
//       />
//       <select
//         name="priority"
//         value={formData.priority}
//         onChange={handleChange}
//         className="w-full border p-2 rounded mb-4"
//       >
//         <option value="low">Low</option>
//         <option value="medium">Medium</option>
//         <option value="high">High</option>
//       </select>
//       <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
//         Add Task
//       </button>
//     </form>
//   );
// };

// export default TaskForm;


import { useState } from 'react';
import { createTask } from '../api/taskApi';


export default function TaskForm({ onCreated }) {
const [title, setTitle] = useState('');
const [description, setDescription] = useState('');
const [priority, setPriority] = useState('medium');


const handleSubmit = async (e) => {
e.preventDefault();
try {
const { data } = await createTask({ title, description, priority });
onCreated(data.task);
setTitle('');
setDescription('');
setPriority('medium');
} catch (error) {
console.error(error);
}
};


return (
<form onSubmit={handleSubmit} className="p-4 border rounded mb-4">
<input value={title} onChange={e => setTitle(e.target.value)} placeholder="Title" className="w-full mb-2 p-2 border rounded" required />
<textarea value={description} onChange={e => setDescription(e.target.value)} placeholder="Description" className="w-full mb-2 p-2 border rounded" />
<select value={priority} onChange={e => setPriority(e.target.value)} className="w-full mb-2 p-2 border rounded">
<option value="low">Low</option>
<option value="medium">Medium</option>
<option value="high">High</option>
<option value="urgent">Urgent</option>
</select>
<button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">Create Task</button>
</form>
);
}

