import React from 'react'

const TodoList = () => {
  return (
    <div>
        <hr className='text-gray-400 mb-1.5 mt-1.5' />
        <div className="flex justify-between items-center text-base">
          <div>
            <h3 className='leading-tight'>Buy groceries</h3>
            <h4 className='text-xs text-gray-600'>April 10, 2025 at 3:00 PM</h4>
          </div>
          <div >
            <button className="bg-orange-500 px-2 py-1 rounded-2xl text-sm text-white">Pending</button>
          </div>
        </div>
    </div>
  )
}

export default TodoList