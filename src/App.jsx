import React, { useState, useEffect, useRef } from 'react';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

const App = () => {
  const [tasks, setTask] = useState([]);
  const [filter, setFilter] = useState('All');
  const [darkMode, setDarkMode] = useState(false);
  const hasLoaded = useRef(false);

  useEffect(() => {
    const stored = localStorage.getItem("tasks");
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        setTask(parsed);
      } catch (err) {
        console.error("❌ JSON parse error", err);
      }
    }
  }, []);

  useEffect(() => {
    if (hasLoaded.current) {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    } else {
      hasLoaded.current = true;
    }
  }, [tasks]);

  const addTask = (taskText) => {
    const newTask = {
      id: Date.now(),
      text: taskText,
      status: 'Pending',
      timestamp: new Date().toLocaleString(),
    };
    setTask((prevTask) => [...prevTask, newTask]);
  };

  const toggleStatus = (taskId) => {
    setTask(tasks.map(task =>
      task.id === taskId
        ? { ...task, status: task.status === 'Pending' ? 'Completed' : 'Pending' }
        : task
    ));
  };

  const deleteTask = (taskId) => {
    setTask(tasks.filter(task => task.id !== taskId));
  };

  const editTask = (taskId, newText) => {
    setTask(tasks.map(task =>
      task.id === taskId ? { ...task, text: newText } : task
    ));
  };

  const filteredTasks = tasks.filter(task => {
    if (filter === 'All') return true;
    return task.status === filter;
  });

  return (
    <div className={`${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-black'} min-h-screen transition-colors duration-300`}>
      <div className='flex justify-center items-center py-10 px-4'>
        <div className={`shadow-lg p-6 rounded-2xl w-full max-w-md ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
          <div className="flex justify-end mb-4">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`px-3 py-1 rounded text-sm transition ${darkMode ? 'bg-gray-600 text-white' : 'bg-gray-200 text-black'
                }`}
            >
              {darkMode ? '🌙' : '☀️'}
            </button>
          </div>

          <TodoInput addTask={addTask} darkMode={darkMode} />

          <div className="flex justify-center gap-2 mt-4 mb-2">
            {['All', 'Pending', 'Completed'].map(f => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-3 py-1 rounded transition ${filter === f
                  ? 'bg-blue-600 text-white'
                  : darkMode
                    ? 'bg-gray-700 text-white'
                    : 'bg-gray-200 text-black'
                  }`}
              >
                {f}
              </button>
            ))}
          </div>

          <TodoList
            tasks={filteredTasks}
            toggleStatus={toggleStatus}
            deleteTask={deleteTask}
            editTask={editTask}
            darkMode={darkMode}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
