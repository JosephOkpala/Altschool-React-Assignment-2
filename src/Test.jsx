import React from 'react';

const Test = ({ testName }) => {
  if (testName === 'Bomb') {
    throw new Error('Not a valid statement');
  }
  return (
    <div>
      <div>{testName}</div>
    </div>
  );
};

export default Test;
