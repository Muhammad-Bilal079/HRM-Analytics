// src/App.js
import React from 'react';
import DescriptiveData from './components/DescriptiveData';
import PredictiveData from './components/PredictiveData';
import Applications from './components/Applications';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>HRM Analytics Project</h1>
      </header>
      <main>
        <DescriptiveData />
        <PredictiveData />
        <Applications />
      </main>
    </div>
  );
}

export default App;
