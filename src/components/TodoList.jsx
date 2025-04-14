import React from 'react'

const TodoList = ({ tasks, toggleStatus, deleteTask }) => {
  return (
    <div className='max-h-[400px] overflow-y-auto pr-2'>
      <hr className='text-gray-400 mb-1.5 mt-1.5' />
      {tasks.map((taskItem) => (
        <div key={taskItem.id} className="flex justify-between items-center text-base  border-b border-gray-400 py-1">
          <div>
            <h3 className='leading-tight'>{taskItem.text}</h3>
            <h4 className='text-xs text-gray-600'>{taskItem.timestamp}</h4>
          </div>
          <div >
            <button className={`px-2 py-1 rounded-2xl text-sm text-white cursor-pointer ${taskItem.status === 'Pending' ? 'bg-orange-500' : 'bg-green-600'}`}onClick={() => toggleStatus(taskItem.id)}>{taskItem.status === 'Pending' ? 'Pending' : 'Completed'}</button>
            <button className={'ml-1 cursor-pointer'} onClick={() => deleteTask(taskItem.id)}>&#x1F5D1;</button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default TodoList