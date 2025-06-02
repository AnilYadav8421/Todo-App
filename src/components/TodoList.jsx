import React from 'react';

const TodoList = ({ tasks, toggleStatus, deleteTask, editTask, darkMode }) => {
  return (
    <div className='max-h-[400px] overflow-y-auto pr-2 mt-2'>
      <hr className={`mb-3 ${darkMode ? 'border-gray-600' : 'border-gray-300'}`} />
      {tasks.map((taskItem) => (
        <div
          key={taskItem.id}
          className={`flex justify-between items-center text-base border-b py-2
            ${darkMode ? 'border-gray-700 text-white' : 'border-gray-300 text-black'}`}
        >
          <div>
            <h3 className='leading-tight'>{taskItem.text}</h3>
            <h4 className='text-xs text-gray-500'>{taskItem.timestamp}</h4>
          </div>
          <div className="flex gap-2">
            <button
              className={`px-2 py-1 rounded-2xl text-sm text-white cursor-pointer transition ${taskItem.status === 'Pending' ? 'bg-orange-500' : 'bg-green-600'
                }`}
              onClick={() => toggleStatus(taskItem.id)}
            >
              {taskItem.status}
            </button>
            <button
              onClick={() => deleteTask(taskItem.id)}
              className={`text-lg cursor-pointer ${darkMode ? 'text-red-400' : 'text-red-600'}`}
              title="Delete Task"
            >
              🗑️
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
