import React from 'react';
import './App.css';
import ErrorBoundary from './ErrorBoundary';
import Navbar from './Navbar';
import Routing from './Routes';

const App = () => {
  return (
    <div>
      <ErrorBoundary>
        <Navbar />
        <Routing />
      </ErrorBoundary>
    </div>
  );
};

export default App;
