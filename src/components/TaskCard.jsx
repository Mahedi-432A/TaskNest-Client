// import { useState } from "react";
// import axios from "axios";

// const TaskCard = ({ task, onTaskUpdate }) => {
//   const [showEdit, setShowEdit] = useState(false);
//   const [editedTask, setEditedTask] = useState({ ...task });

//   const handleDelete = async () => {
//     await axios.delete(`http://localhost:5000/api/tasks/${task._id}`);
//     onTaskUpdate();
//   };

//   const handleToggleComplete = async () => {
//     await axios.put(`http://localhost:5000/api/tasks/${task._id}`, {
//       completed: !task.completed,
//     });
//     onTaskUpdate();
//   };

//   const handleEditSubmit = async (e) => {
//     e.preventDefault();
//     await axios.put(`http://localhost:5000/api/tasks/${task._id}`, editedTask);
//     setShowEdit(false);
//     onTaskUpdate();
//   };

//   return (
//     <div className={`p-4 rounded-xl shadow border-l-4 ${task.completed ? "border-green-500 bg-green-50" : "border-blue-500 bg-white"}`}>
//       <div className="flex justify-between items-start">
//         <h2 className={`text-lg font-semibold ${task.completed ? "line-through text-gray-400" : ""}`}>{task.title}</h2>
//         <div className="flex gap-2">
//           <button onClick={() => setShowEdit(!showEdit)} className="text-blue-500 text-sm hover:underline">Edit</button>
//           <button onClick={handleDelete} className="text-red-500 text-sm hover:underline">Delete</button>
//         </div>
//       </div>
//       <p className="text-gray-500 text-sm">{task.description}</p>
//       <p className="text-xs mt-2">Priority: <span className="capitalize">{task.priority}</span></p>
//       <p className="text-xs text-gray-400">Due: {task.dueDate ? new Date(task.dueDate).toLocaleDateString() : 'Not set'}</p>

//       <label className="flex items-center gap-2 mt-2 text-sm">
//         <input
//           type="checkbox"
//           checked={task.completed}
//           onChange={handleToggleComplete}
//         />
//         Mark as completed
//       </label>

//       {showEdit && (
//         <form onSubmit={handleEditSubmit} className="mt-3 space-y-2 text-sm">
//           <input
//             type="text"
//             value={editedTask.title}
//             onChange={(e) => setEditedTask({ ...editedTask, title: e.target.value })}
//             className="border rounded px-2 py-1 w-full"
//           />
//           <textarea
//             value={editedTask.description}
//             onChange={(e) => setEditedTask({ ...editedTask, description: e.target.value })}
//             className="border rounded px-2 py-1 w-full"
//           />
//           <select
//             value={editedTask.priority}
//             onChange={(e) => setEditedTask({ ...editedTask, priority: e.target.value })}
//             className="border rounded px-2 py-1 w-full"
//           >
//             <option value="low">Low</option>
//             <option value="medium">Medium</option>
//             <option value="high">High</option>
//           </select>
//           <input
//             type="date"
//             value={editedTask.dueDate?.substring(0, 10)}
//             onChange={(e) => setEditedTask({ ...editedTask, dueDate: e.target.value })}
//             className="border rounded px-2 py-1 w-full"
//           />
//           <button type="submit" className="bg-blue-500 text-white px-3 py-1 rounded">Save</button>
//         </form>
//       )}
//     </div>
//   );
// };

// export default TaskCard;


export default function TaskCard({ task, onUpdate, onDelete }) {
return (
<div className="p-4 border rounded shadow-sm hover:shadow-md transition">
<h3 className="font-bold text-lg">{task.title}</h3>
<p className="text-sm text-gray-600">{task.description}</p>
<div className="mt-2 flex justify-between items-center text-sm">
<span className={`px-2 py-1 rounded ${task.priority === 'high' ? 'bg-red-200' : 'bg-green-200'}`}>{task.priority}</span>
<span>{task.status}</span>
</div>
<div className="mt-2 flex gap-2">
<button onClick={() => onUpdate(task._id)} className="px-2 py-1 bg-blue-200 rounded">Update</button>
<button onClick={() => onDelete(task._id)} className="px-2 py-1 bg-red-200 rounded">Delete</button>
</div>
</div>
);
}
