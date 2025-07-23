const TaskCard = ({ task }) => {
  return (
    <div className="bg-white p-4 rounded-xl shadow border-l-4 border-blue-500">
      <h2 className="text-lg font-semibold">{task.title}</h2>
      <p className="text-gray-500 text-sm">{task.description}</p>
      <p className="text-xs mt-2">
        Priority: <span className="capitalize">{task.priority}</span>
      </p>
      <p className="text-xs text-gray-400">Due: {task.dueDate ? new Date(task.dueDate).toLocaleDateString() : 'Not set'}</p>
    </div>
  );
};

export default TaskCard;
