import Plus from '../../assets/Plus.svg';
import { useState } from 'react';
import './style.css';

const Input = (prop) =>{
  const [value, setValue] = useState("");
  const handleClick = (e) =>{
    e.preventDefault();
    prop.insertTask(value);
    setValue("");
  };

  return(
    <div className="container">
        <input className="input" type="text" placeholder="Add a new task"
        value={value} onChange={e => setValue(e.target.value)}/>
        <button className="container-btn" type="button" onClick={handleClick}>
          <img src={Plus} alt="Plus" />
      </button>
    </div>
  );
};

export default Input;