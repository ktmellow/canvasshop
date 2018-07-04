import React, { Component } from 'react';
import './App.css';
import Layer from './components/canvas/layer';
import Tools from './components/tools';
import ToolBtn from './components/tools/tool-btn';
import Eraser from './components/tools/eraser';

class App extends Component {

  constructor() {
    super();
    
    this.state = {
      activeTool: "line",
      color: "fff",
      erase: false
    };

    this.handleToolClick = this.handleToolClick.bind(this);
    this.handleColor = this.handleColor.bind(this);
    this.handleErase = this.handleErase.bind(this);
  }

  handleToolClick(toolBtn) {
    const newState = this.state;
    newState.activeTool = toolBtn;
    this.setState(Object.assign({}, newState));
  }

  handleErase() {
    const newState = this.state;
    newState.erase = !this.state.erase;
    this.setState(Object.assign({}, newState));
  }

  handleColor(e) {
    const newState = this.state;
    newState.color = e.target.value;
    this.setState(Object.assign({}, newState));
  }

  render() {
    const { activeTool, color, erase } = this.state;

    // Need this and click handler to have access to this component state
    const toolset = ["line", "pencil", "path"];
    const toolButtons = toolset.map((tool) => <ToolBtn name={tool} key={tool} handleToolClick={this.handleToolClick.bind(this, tool)} activeTool={this.state.activeTool}/>)

    return (
      <div className="App">
        <Tools>
          <Eraser handleErase={this.handleErase} erase={erase}/>
          <input type="color" onChange={this.handleColor} />
          {toolButtons}
        </Tools>
        <Layer color={color} activeTool={activeTool} erase={erase} width="400" height="300" />
      </div>
    );
  }
}

export default App;
