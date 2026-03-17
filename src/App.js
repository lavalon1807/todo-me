import React from 'react';
import './App.css';
import Author from './components/sidebar/Author';
import Navigations from './components/sidebar/Navigations';
import SetTasks from './components/SetTasks';
import Task from './components/Task';

function App() {
  return (
    <div className="App">
      <Author />
      <Navigations />
      <SetTasks />
      <Task />
    </div>
  );
}

export default App;
