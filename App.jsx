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
      setTasks([...tasks, {id: Date.now(), text: value}]);
    } else {
      alert('Введите в поле ввода задачу');
    }
  };

  const removeTask = (id) => {
    const nextTasks = tasks.filter(task => task.id !== id);
    setTasks(nextTasks);
  };

  const doneTask = (id, text) => {
    doneTasks.push({
      id: id,
      text: text,
    });

    removeTask(id);
  };

  const onClickDone = (e) => {
    e.stopPropagation();
    doneTask(tasks.id, tasks.text);
  };

  const onClickDelete = (e) => {
    e.stopPropagation();
    removeTask(tasks.id);
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
            <div className="task" key={task.id}>
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
          Done - {doneTasks.length}
        </div>

        {doneTasks.map(doneTask => (
          <div className="task done-text" key={doneTask.id}>
            {doneTask.text}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
