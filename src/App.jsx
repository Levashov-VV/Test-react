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
    // TODO
    removeTask(id);
  };
  
  const onClickDelete = (index) => {
    // TODO
    const nextTasks = tasks.filter(task => task.id !== deletingTask.id);
    setTasks(nextTasks);
  };

  return (
    <div className="todo-list">
      <Input addTask={addTask} />

      <div className="todo-tasks">
        <div className="title">
          Tasks to do - {tasks.length} {/*TODO*/}
        </div>

        <div className="tasks-block">
          {tasks.map((task, index) => {
            if (task.done) {
              return;
            }

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
          })}
        </div>
      </div>

      <div className="todo-tasks done">
        <div className="title">
          Done - {tasks.length} {/*TODO*/}
        </div>

        {tasks.map(task => {
          if (!task.done) {
            return;
          }

          return (
            <div
              key={doneTask.id}
              className="task done-text"
            >
              {doneTask.text}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App
