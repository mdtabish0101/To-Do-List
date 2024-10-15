import { useState } from 'react'
import './App.css'
import Input from './components/input'
import Board from './components/board'

function App() {
  const [taskList, setTaskList] = useState([])

  return (
    <>
    <div className='logo-input'>
    <h1>To Do List</h1>
    <Input taskList = {taskList} setTaskList = {setTaskList}/>
    </div>
    <div className='board-todo'>
      {taskList.map((task, index) => 
        <Board
        key = {index}
        index = {index}
        task = {task}
        taskList = {taskList}
        setTaskList = {setTaskList}/>
      )}
    </div>
    </>
  )
}

export default App
