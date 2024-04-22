import { useState } from 'react';
import Input from './components/Input/Input';
import './App.css';
import Check from './assets/Check.svg';
import Busket from './assets/TrashSimple.svg';

function App() {
  const [tasks, setTasks] = useState([]);
  const [doneTasks] = useState([]);

  const addTask = (value) => {
    if (value) {
      setTask([...task, {id: Date.now(), text: value}]);
    } else {
      alert('Введите в поле ввода задачу');
    }
  };

  const removeTask = (id) => {
    const nextTasks = task.filter(task => task.id !== id);
    setTask(nextTasks);
  };

  const doneTask = (id, text) => {
    doneTask.push({
      id: id,
      text: text
    });

    removeTask(id);
  };

  const onClickDone = (e) => {
    e.stopPropagation();
    doneTask(task.id, task.text);
  };

  const onClickDelete = (e) => {
    e.stopPropagation();
    removeTask(task.id);
  };

  return (
    <div className="todo-list">
      <Input insertTask={addTask} />

      <div className="todo-tasks">
        <div className="title">
          Tasks to do - {task.length}
        </div>

        <div className="tasks-block">
          {task.map(task => (
            <div className='task' key={task.id}>
              <div className="task-text task">
                {task.text}
              </div>

              <div className="task-btn">
                <button
                  className="btn"
                  type="button"
                  onClick={onClickDone}
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
                  onClick={onClickDelete}
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
          Done - {doneTask.length}
        </div>

        {doneTask.map(doneTask => (
          <div className='task done-text' key={doneTask.id}>
            {doneTask.text}
          </div>
        ))}
      </div>
    </div>
  );
};

export default App
