import { useState } from "react";
import axios from "axios";

const TaskForm = ({ onTaskAdded }) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    dueDate: "",
    priority: "medium",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.title) return;
    try {
      await axios.post("http://localhost:5000/api/tasks", formData);
      onTaskAdded(); // reload tasks
      setFormData({ title: "", description: "", dueDate: "", priority: "medium" });
    } catch (err) {
      console.error("Error adding task:", err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded-xl shadow mb-6">
      <h2 className="text-xl font-bold mb-4">Add New Task</h2>
      <input
        name="title"
        value={formData.title}
        onChange={handleChange}
        placeholder="Title"
        className="w-full border p-2 rounded mb-2"
        required
      />
      <textarea
        name="description"
        value={formData.description}
        onChange={handleChange}
        placeholder="Description"
        className="w-full border p-2 rounded mb-2"
      />
      <input
        type="date"
        name="dueDate"
        value={formData.dueDate}
        onChange={handleChange}
        className="w-full border p-2 rounded mb-2"
      />
      <select
        name="priority"
        value={formData.priority}
        onChange={handleChange}
        className="w-full border p-2 rounded mb-4"
      >
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
        Add Task
      </button>
    </form>
  );
};

export default TaskForm;
