import React, { useState } from 'react'

const TodoItem = ({ task, toggleStatus, deleteTask, editTask }) => {
  const [isEditing, setIsEditing] = useState(false)
  const [editedText, setEditedText] = useState(task.text)

  const handleSave = () => {
    if (editedText.trim() === '') return
    editTask(task.id, editedText)
    setIsEditing(false)
  }

  return (
    <div className="flex justify-between items-center text-base border-b border-gray-400 py-1">
      <div>
        {isEditing ? (
          <input
            className="border rounded px-2 py-1"
            value={editedText}
            onChange={e => setEditedText(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && handleSave()}
            autoFocus
          />
        ) : (
          <h3 className={`leading-tight ${task.status === 'Completed' ? 'line-through text-gray-400' : ''}`}>
            {task.text}
          </h3>
        )}
        <h4 className='text-xs text-gray-600'>{task.timestamp}</h4>
      </div>

      <div className="flex items-center gap-2">
        <button
          className={`px-2 py-1 rounded-2xl text-sm text-white ${
            task.status === 'Pending' ? 'bg-orange-500' : 'bg-green-600'
          }`}
          onClick={() => toggleStatus(task.id)}
        >
          {task.status}
        </button>

        {isEditing ? (
          <button
            className="px-2 py-1 rounded bg-blue-500 text-white text-sm"
            onClick={handleSave}
          >
            Save
          </button>
        ) : (
          <button
            className="px-2 py-1 rounded bg-yellow-400 text-sm"
            onClick={() => setIsEditing(true)}
          >
            Edit
          </button>
        )}

        <button
          className="text-red-600 text-lg font-bold"
          onClick={() => deleteTask(task.id)}
          aria-label="Delete task"
        >
          &times;
        </button>
      </div>
    </div>
  )
}

export default TodoItem
