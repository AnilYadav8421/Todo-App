import React from 'react'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'

const App = () => {
  return (
      <div className='flex justify-center items-center h-screen flex-col '>
        <div className='border-1 p-5 rounded-2xl'>
        <TodoInput />
        <TodoList />
        </div>
      </div>
  )
}

export default App