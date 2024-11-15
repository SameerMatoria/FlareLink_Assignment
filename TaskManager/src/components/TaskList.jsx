function TaskList({ tasks, toggleComplete, deleteTask }) {
  return (
    <div className="space-y-4">
      {tasks.map((task) => (
        <div key={task.id} className="flex justify-between items-center p-4 border rounded-md">
          <div className="flex flex-col">
            <h2 className="text-xl font-semibold">{task.title}</h2>
            <p className="text-gray-500">{task.description}</p>
          </div>
          <div className="flex items-center space-x-4">
            <button
              onClick={() => toggleComplete(task.id)}
              className={`p-2 rounded ${task.completed ? 'bg-green-500' : 'bg-gray-300'}`}
            >
              {task.completed ? 'Completed' : 'Complete'}
            </button>
            <button
              onClick={() => deleteTask(task.id)}
              className="p-2 bg-red-500 text-white rounded"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TaskList;
