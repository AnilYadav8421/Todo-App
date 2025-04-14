import React, { useState } from 'react'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'

const App = () => {
  const [tasks, setTask] = useState([]);

  const addTask = (taskText) => {
    const newTask = {
      id: Date.now(),
      text: taskText,
      status: 'Pending',
      timestamp: new Date().toLocaleString(),
    }
    setTask((prevTask)=>[...prevTask, newTask])
  }

  const toggleStatus = (taskId) =>{
    setTask(tasks.map((taskText)=>
      taskText.id === taskId ? {...taskText, status : taskText.status === 'Pending' ? 'Completed' : 'Pending'} : taskText
    ))
  }

  const deleteTask = (taskId) => {
    setTask(tasks.filter((taskItem)=>taskItem.id !== taskId))
  }
  return (
    <div className='flex justify-center items-center h-screen flex-col '>
      <div className='border-1 p-5 rounded-2xl'>
        <TodoInput addTask = {addTask}  />
        <TodoList tasks = {tasks} toggleStatus = {toggleStatus} deleteTask = {deleteTask} />
      </div>
    </div>
  )
}

export default App