import { useEffect, useState } from "react";
import axios from "axios";
import TaskCard from "../components/TaskCard";
import TaskForm from "../components/TaskForm";

const Home = () => {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    const res = await axios.get("http://localhost:5000/api/tasks");
    setTasks(res.data);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">📋 TaskNest Dashboard</h1>
      <TaskForm onTaskAdded={fetchTasks} />
      <div className="grid gap-4 md:grid-cols-2">
        {tasks.map((task) => (
          <TaskCard key={task._id} task={task} />
        ))}
      </div>
    </div>
  );
};

export default Home;
