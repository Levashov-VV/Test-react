import { useState } from 'react';
import Input from './components/Input/Input';
import Check from './assets/Check.svg';
import Busket from './assets/TrashSimple.svg';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [doneTasks, setDoneTasks] = useState([]);

  const addTask = (value) => {
    if (value) {
      setTasks([
        ...tasks,
        { id: Date.now(), text: value },
      ]);
    } else {
      alert('Введите в поле ввода задачу');
    }
  };

  const onClickDone = (task) => {
    setDoneTasks([
      ...doneTasks,
      task,
    ]);

    onClickDelete(task)

  };

  const onClickDelete = (deletingTask) => {
    const nextTasks = tasks.filter(task => task.id !== deletingTask.id);
    setTasks(nextTasks);
  };

  return (
    <div className="todo-list">
      <Input addTask={addTask} />

      <div className="todo-tasks">
        <div className="title">
          Tasks to do - {tasks.length}
        </div>

        <div className="tasks-block">
          {tasks.map(task => (
            <div 
              className="task" 
              key={task.id}
            >
              <div className="task-text task">
                {task.text}
              </div>

              <div className="task-btn">
                <button
                  className="btn"
                  type="button"
                  onClick={() => onClickDone(task)}
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
                  onClick={() => onClickDelete(task)}
                >
                  <img
                    className="task-img"
                    src={Busket}
                    alt="busket"
                  />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="todo-tasks done">
        <div className="title">
          Done - {doneTasks.length}
        </div>

        {doneTasks.map(doneTask => (
          <div
            className="task done-text"
            key={doneTask.id}
          >
            {doneTask.text}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;