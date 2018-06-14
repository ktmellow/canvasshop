import React, { Component } from 'react';
import './App.css';
import Layer from './components/canvas/layer';
import Tools from './components/tools';
import ToolBtn from './components/tools/tool-btn';

class App extends Component {

  constructor() {
    super();
    
    this.state = {
      activeTool: "line"
    };

    this.handleToolClick = this.handleToolClick.bind(this);
  }

  handleToolClick(toolBtn) {
    const newState = this.state;
    newState.activeTool = toolBtn;
    this.setState(Object.assign({}, newState));
  }

  render() {

    // Need this and click handler to have access to this component state
    const toolset = ["line", "circle", "sq"];
    const toolButtons = toolset.map((tool) => <ToolBtn name={tool} key={tool} handleToolClick={this.handleToolClick.bind(this, tool)} activeTool={this.state.activeTool}/>)

    return (
      <div className="App">
        <Tools>
          {toolButtons}
        </Tools>
        <Layer activeTool={this.state.activeTool}/>
      </div>
    );
  }
}

export default App;
