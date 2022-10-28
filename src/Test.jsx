import React from 'react';
import './clickme.css';

const Test = ({ testName }) => {
  const inputChange = (e) => {
    e.preventDefault();
  };

  if (testName === 'crash') {
    throw new Error('Not a valid statement');
  }

  return (
    <div>
      <label className="bold" htmlFor="">
        Testing Error Boundary:
      </label>
      <input
        onChange={inputChange}
        type="text"
        placeholder="type crash"
        name="error"
      />
      <div style={{ textAlign: 'center' }}>{testName}</div>
    </div>
  );
};

export default Test;
