import Plus from '../../assets/Plus.svg';
import { useState } from 'react';
import './style.css';

const Input = ({
  addTask,
}) => {
  const [value, setValue] = useState(JSON.parse(localStorage.getItem('tasks')) || '');

  const handleClick = () => {
    const val = '';
    addTask(value);
    setValue(val);
    localStorage.setItem('tasks', JSON.stringify(val))
  };
  
  const handleChange = (e) => {
    setValue(e.target.value)
  };

  const toPressEnter = (e) => {
    if(e.key === 'Enter') {
      handleClick()
    }
  };

  return (
    <div className="container">
      <input
        className="input" 
        type="text" 
        placeholder="Add a new task"
        value={value} 
        onChange={handleChange}
        onKeyUp={toPressEnter}
      />

      <button
        className="container-btn"
        type="button" 
        onClick={handleClick}
      >
        <img
          src={Plus}
          alt="Plus" 
        />
      </button>
    </div>
  );
}

export default Input;
