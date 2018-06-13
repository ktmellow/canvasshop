import React, { Component } from "react";
import '../../styles/tools.css';

class Tools extends Component {
  constructor() {
    super()

  }

  isActive(tool) {
    return this.props.selectedTool === tool ? "selected" : "";
  }

  render() {

    return (
      <div className="tools">
        <ul>
          <li className={`tool ${this.isActive("line")}`} ref="line" onClick={this.props.handleToolClick.bind(this, "line")}>
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
