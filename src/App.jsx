import { useState } from 'react';
import Input from './components/Input/Input';
import Check from './assets/Check.svg';
import Busket from './assets/TrashSimple.svg';
import './App.css';

function App() { 
  const [tasks, setTasks] = useState([]);

  const addTask = (value) => {
    if (value) {
      setTasks([
        ...tasks,
        {
          id: Date.now(),
          text: value,
          done: false,
        },
      ]);
    } else {
      alert('Введите в поле ввода задачу');
    }
  };

  const onClickDone = (index) => {
    const doneTask = tasks.filter((task, id) => {
      if (id === index) {
        return task.done = true
      } else {
        return task
      }});
    setTasks(doneTask)
    };

  const onClickDelete = (index) => {
      const nextTasks = tasks.filter((_, id) => id !== index);
      setTasks(nextTasks);
  };

  const workTasks = tasks.filter(task => task.done === false);

  const doneTasks = tasks.filter(task => task.done === true);

  return (
    <div className="todo-list">
      <Input addTask={addTask} />

      <div className="todo-tasks">
        <div className="title">
          Tasks to do - {workTasks.length}
        </div>

        <div className="tasks-block">
          {tasks.map((task, index) => {
            if (!task.done) {
              return (
                <div className="task" key={task.id}>
                  <div className="task-text task">
                    {task.text}
                  </div>
  
                  <div className="task-btn">
                    <button
                      className="btn"
                      type="button"
                      onClick={() => onClickDone(index)}
                    >
                      <img
                        className="task-img"
                        src={Check}
                        alt="Check"
                      />
                    </button>

                    <button
                      className="btn"
                      type="button"
                      onClick={() => onClickDelete(index)}
                    >
                      <img
                        className="task-img"
                        src={Busket}
                        alt="busket"
                      />
                    </button>
                  </div>
                </div>
              );
            }})}
        </div>
      </div>


      <div className="todo-tasks done">
        <div className="title">
          Done - {doneTasks.length}
        </div>

        {tasks.map(task => {
          if (task.done) {
            return (
              <div
                key={task.id}
                className="task done-text"
              >
                {task.text}
              </div>
            );
          }})}
      </div>
    </div>
  );
}

export default App