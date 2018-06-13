import React, { Component } from 'react';
import './App.css';
import Canvas from './components/canvas/canvas';
import Tools from './components/tools';

class App extends Component {

  constructor() {
    super();
    
    this.state = {
      selectedTool: ""
    };
    this.handleToolClick = this.handleToolClick.bind(this);
  }

  handleToolClick(toolBtn) {
    const newState = this.state;
    newState.selectedTool = toolBtn;
    this.setState(Object.assign({}, newState));
  }

  render() {
    return (
      <div className="App">
        <Tools handleToolClick={this.handleToolClick} selectedTool={this.state.selectedTool} />
        <Canvas />
      </div>
    );
  }
}

export default App;
