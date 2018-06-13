import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Canvas from './components/canvas/canvas';
import Tools from './components/tools';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Tools />
        <Canvas />
      </div>
    );
  }
}

export default App;
