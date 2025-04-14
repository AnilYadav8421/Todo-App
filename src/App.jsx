import React, { useState } from 'react'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'

const App = () => {
  const [tasks, setTask] = useState([]);

  const addTask = (taskText) => {
    const newTask = {
      id: Date.now(),
      text: taskText,
      status: "Pending",
      timestamp: new Date().toLocaleString(),
    }

    setTask((prevTask)=>[...prevTask, newTask])
  }
  return (
    <div className='flex justify-center items-center h-screen flex-col '>
      <div className='border-1 p-5 rounded-2xl'>
        <TodoInput addTask = {addTask} />
        <TodoList tasks = {tasks} />
      </div>
    </div>
  )
}

export default App