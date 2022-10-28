import React from 'react';
import { useNavigate } from 'react-router-dom';
import './error.css';

const Error = () => {
  const navigateHome = useNavigate();
  return (
    <div className="error-div">
      <h1>uh oh, the page you're looking for can not be found!</h1>
      <button onClick={() => navigateHome('/')}>Go home</button>
    </div>
  );
};

export default Error;
