import { useState } from 'react';

const FunctionComponent = ({ nama }) => {
  const [value, setValue] = useState(0);

  const handlePlus = () => {
    setValue(value + 1);
  };

  const handleMinus = () => {
    if (value > 0) {
      setValue(value - 1);
    }
  };

  return (
    <div>
      <h3>komponen ini di buat dengan function komponen</h3>
      <h4>saya {nama} belajar function komponen, State dan Props</h4>
      <button onClick={handleMinus}>-</button>
      <span> {value} </span>
      <button onClick={handlePlus}>+</button>
    </div>
  );
};

export default FunctionComponent;
