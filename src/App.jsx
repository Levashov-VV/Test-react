import React, { useState } from 'react'
import Input from "./components/Input/Input"
import './App.css'
import Check from "./assets/Check.svg"
import Busket from "./assets/TrashSimple.svg"


function App() {
  const [task, setTask] = useState([]);
  const [doneTask] = useState([]);
  const insertTask = (value) =>{
    if(value){
      setTask([...task, {id: Date.now(), text: value}])
    }
    else{
      alert("Введите в поле ввода задачу")
    }
  }
  function removeTask(id){
    setTask(task.filter(task => task.id !== id))
  }
  function addTask(id, text){
    doneTask.push({
      id: id,
      text: text
    })
    removeTask(id)
  }
  return (
      <div className="todo-list">
        <Input 
          insertTask={insertTask}
        />
        <div className="todo-tasks">
          <div className="title">Tasks to do - {task.length} </div>
          <div className="tasks-block">
            {
              task.map(task =>{
                return(
                  <div className='task' key={task.id}>
                    <div class="task-text task">{task.text}</div>
                    <div className="task-btn">
                      <button className="btn" type="button" onClick={e => {
                        e.stopPropagation()
                        addTask(task.id, task.text)
                      }}>
                      <img className="task-img" src={Check} alt="Check"/>
                      </button>
                      <button className="btn" type="button" onClick={e => {
                        e.stopPropagation()
                        removeTask(task.id)
                      }}>
                      <img className="task-img" src={Busket} alt="busket"/>
                      </button>
                    </div>
                  </div>
                )
              })
            }
            </div>
          </div>
        <div className="todo-tasks done">
          <div className="title">Done - {doneTask.length}</div>
          {
              doneTask.map(doneTask =>{
                return(
                  <div className='task done-text' key={doneTask.id}>
                    {doneTask.text}
                    </div>
              )})
              
          }
        </div>
      </div>
  )
}
export default App
