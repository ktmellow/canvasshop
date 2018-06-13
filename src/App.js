import React, { Component } from 'react';
import './App.css';
import Canvas from './components/canvas/canvas';
import Tools from './components/tools';
import ToolBtn from './components/tools/tool-btn';

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

    // Need this and click handler to have access to this component state
    const toolset = ["line", "circle", "sq"];
    const toolButtons = toolset.map((tool) => <ToolBtn name={tool} handleToolClick={this.handleToolClick.bind(this, tool)} selectedTool={this.state.selectedTool}/>)

    return (
      <div className="App">
        <Tools>
          {toolButtons}
        </Tools>
        <Canvas />
      </div>
    );
  }
}

export default App;
