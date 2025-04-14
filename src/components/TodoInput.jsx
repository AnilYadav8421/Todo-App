import React, { useState } from 'react'

const TodoInput = ({addTask}) => {
  const [taskText, setTaskText] = useState("");
  const handleClick = () =>{
    if(taskText.trim()){
      addTask(taskText),
      setTaskText('');
    }
  }
  return (
    <div>
        <div className="font-bold text-2xl mb-2">
            <h1>Todo List</h1>
        </div>
        <div className="mb-4 bg-gray-200 rounded-2xl pr-3">
            <input className=' px-3 p-2 outline-0 text-sm' type="text" placeholder='Write task..' onChange={(e)=>setTaskText(e.target.value)} value={taskText}/>
            <button className='text-xs bg-black text-white rounded-2xl p-1 px-2 cursor-pointer' onClick={handleClick}>Add Task</button>
        </div>
    </div>
  )
}

export default TodoInput