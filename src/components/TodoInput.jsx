import React from 'react'

const TodoInput = () => {
  return (
    <div>
        <div className="font-bold text-2xl mb-2">
            <h1>Todo List</h1>
        </div>
        <div className="mb-4 bg-gray-200 rounded-2xl pr-3">
            <input className=' px-3 p-2 outline-0 text-sm' type="text" placeholder='Write task..'/>
            <button className='text-xs bg-black text-white rounded-2xl p-1 px-2'>Add Task</button>
        </div>
    </div>
  )
}

export default TodoInput