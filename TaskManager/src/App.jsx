import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import { useState, useEffect } from 'react';
import ProgressBar from './components/ProgressBar'

// Save tasks to localStorage
const saveTasksToLocalStorage = (tasks) => {
  try {
    localStorage.setItem("tasks", JSON.stringify(tasks));
    console.log("Tasks saved to localStorage:", tasks);
  } catch (error) {
    console.error("Error saving tasks to localStorage:", error);
  }
};

// Load tasks from localStorage
const loadTasksFromLocalStorage = () => {
  try {
    const savedTasks = localStorage.getItem("tasks");
    console.log("Tasks loaded from localStorage:", savedTasks);
    return savedTasks ? JSON.parse(savedTasks) : [];
  } catch (error) {
    console.error("Error loading tasks from localStorage:", error);
    return [];
  }
};

function App() {
  const [tasks, setTasks] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false); // Tracks if data has been loaded from localStorage

  // Load tasks from localStorage 
  useEffect(() => {
    const loadedTasks = loadTasksFromLocalStorage();
    setTasks(loadedTasks);
    setIsLoaded(true); 
  }, []);

  useEffect(() => {
    if (isLoaded) {
      saveTasksToLocalStorage(tasks);
    }
  }, [tasks, isLoaded]);

  const addTask = (title, description) => {
    setTasks([...tasks, { id: Date.now(), title, description, completed: false }]);
  };

  const toggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };
// for progress calc
  const calculateProgress = () => {
    const completedTasks = tasks.filter((task) => task.completed).length;
    return tasks.length > 0 ? (completedTasks / tasks.length) * 100 : 0;
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-3xl font-semibold text-center text-indigo-600 mb-6">Task Manager</h1>

        <TaskInput addTask={addTask} />
        <ProgressBar progress={calculateProgress()} />

        <TaskList
          tasks={tasks}
          toggleComplete={toggleComplete}
          deleteTask={deleteTask}
        />
      </div>
    </div>
  );
}

export default App;
