import Plus from '../../assets/Plus.svg';
import { useState } from 'react';
import './style.css';

const Input = (prop) => {
  const [value, setValue] = useState('');

  const pressButton = (e) => {
    e.preventDefault();
    prop.addTask(value);
    setValue('');
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return(
    <div className="container">
      <input 
      className="input" 
      type="text" 
      placeholder="Add a new task"
      value={value} 
      onChange={handleChange}
      />
      <button 
      className="container-btn"
      type="button" 
      onClick={pressButton}>
      <img 
      src={Plus}
      alt="Plus" 
      />
      </button>
    </div>
  );
};

export default Input;