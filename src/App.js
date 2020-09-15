import React from 'react';
import logo from './logo.svg';
import './App.css';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Greet from './components/Greet';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';

function App() {
  return (
    <div className="App">
      <EventBind/>
      <ParentComponent/>
    </div>
  );
}

export default App;
