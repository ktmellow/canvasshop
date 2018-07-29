import React, { Component } from 'react';
import './App.css';
import Layer from './components/canvas/layer';
import Tools from './components/tools';
import ToolBtn from './components/tools/tool-btn';
import Eraser from './components/tools/eraser';
import Thickness from './components/tools/thickness';

class App extends Component {

  constructor() {
    super();
    
    this.state = {
      activeTool: "line",
      color: "fff",
      erase: false,
      thickness: 1
    };

    this.handleToolClick = this.handleToolClick.bind(this);
    this.handleColor = this.handleColor.bind(this);
    this.handleErase = this.handleErase.bind(this);
    this.handleThickness = this.handleThickness.bind(this);
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

  handleThickness(e) {
    const newState = this.state;
    newState.thickness = e.currentTarget.value;
    this.setState(Object.assign({}, newState));
  }

  render() {
    const { activeTool, color, erase, thickness } = this.state;

    // Need this and click handler to have access to this component state
    const toolset = ["line", "pencil", "path"];
    const toolButtons = toolset.map((tool) => <ToolBtn name={tool} key={tool} handleToolClick={this.handleToolClick.bind(this, tool)} activeTool={this.state.activeTool}/>)

    return (
      <div className="App">
        <Tools>
          <input type="color" onChange={this.handleColor} />
          <Thickness handleThickness={this.handleThickness} thickness={thickness} />
          <Eraser handleErase={this.handleErase} erase={erase}/>
          {toolButtons}
        </Tools>
        <Layer color={color} activeTool={activeTool} erase={erase} thickness={thickness} width="400" height="300" />
      </div>
    );
  }
}

export default App;
