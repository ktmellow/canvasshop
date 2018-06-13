import React, { Component } from "react";
import '../../styles/tools.css';

class Tools extends Component {
  constructor() {
    super()

    this.state = {
      selectedTool: ""
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(toolBtn) {
    const newState = this.state;
    newState.selectedTool = toolBtn;
    this.setState(Object.assign({}, newState));
    console.log("handleClick", toolBtn, this.state)
  }

  isActive(tool) {
    return this.state.selectedTool === tool ? "selected" : "";
  }

  render() {
    return (
      <div className="tools">
        <ul>
          <li className={`tool ${this.isActive("line")}`} ref="line" onClick={this.handleClick.bind(this, "line")}>
            line
          </li>
          <li className="tool">
            circle
          </li>
          <li className="tool">
            sq
          </li>
        </ul>
      </div>
    )
  }
}

export default Tools;
