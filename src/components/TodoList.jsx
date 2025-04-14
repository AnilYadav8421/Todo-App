import React from 'react'

const TodoList = ({ tasks }) => {
  return (
    <div>
      <hr className='text-gray-400 mb-1.5 mt-1.5' />
      {tasks.map((taskItem) => (
        <div key={taskItem.id} className="flex justify-between items-center text-base  border-b border-gray-400 py-1">
          <div>
            <h3 className='leading-tight'>{taskItem.text}</h3>
            <h4 className='text-xs text-gray-600'>{taskItem.timestamp}</h4>
          </div>
          <div >
            <button className="bg-orange-500 px-2 py-1 rounded-2xl text-sm text-white">Pending</button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default TodoList