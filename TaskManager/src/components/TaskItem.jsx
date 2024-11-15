


function TaskItem({ task, toggleComplete, deleteTask }) {
  return (
    <li className="flex items-center justify-between p-4 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-center space-x-4">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleComplete(task.id)}
          className="h-5 w-5 text-indigo-600 border-gray-300 rounded"
        />
        <span
          className={`text-lg ${task.completed ? 'line-through text-gray-400' : ''}`}
        >
          {task.title}
        </span>
      </div>
      <button
        onClick={() => deleteTask(task.id)}
        className="text-red-600 hover:text-red-800 focus:outline-none"
      >
        Delete
      </button>
    </li>
  );
}

export default TaskItem;
