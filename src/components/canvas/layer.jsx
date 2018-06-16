import React, { Component } from 'react';
import '../../styles/canvas/layer.css';

class Layer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mouse: {
        active: false
      }
    }

    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.handleMouseUp = this.handleMouseUp.bind(this);
    this.setContext = this.setContext.bind(this);
  }

  setContext(r) {
    this.ctx = r.getContext("2d");
  }

  handleMouseDown(e) {
    // should call appropriate tool function
      // paintbrush should record all mouse downs and render (no mouseup)
      // line should record mousedown point (and mouseup)
      // tool helpers should be put in separate folder
    // e.persist()
  
    this.ctx.beginPath();

    function moveTo(e, component) {
      component.ctx.moveTo(e.clientX - e.target.offsetLeft, e.clientY - e.target.offsetTop);
    }

    moveTo(e, this);

    const newState = this.state;
    newState.mouse.active = true;
    this.setState(Object.assign({}, newState));
  }

  handleMouseMove(e) {
    function lineTo(e, component) {
      component.ctx.lineTo(e.clientX - e.target.offsetLeft, e.clientY - e.target.offsetTop);
    }

    switch(this.props.activeTool) {
      case 'line':
        return;
      default:
        lineTo(e, this);
        break;
    }

  }

  handleMouseUp(e) {
    if (!this.state.mouse.active) return;

    function lineTo(e, component) {
      component.ctx.lineTo(e.clientX - e.target.offsetLeft, e.clientY - e.target.offsetTop);
    }

    function stroke(component) {
      component.ctx.stroke();
    }

    lineTo(e, this);

    // if not enough tool conditions, use if statement
    // switch(this.props.activeTool) {
    //   case 'path':
    //     // close path
    //     break;
    //   default:
    //     break;
    // }
    stroke(this);

    const newState = this.state;
    newState.mouse.active = false;
    this.setState(Object.assign({}, newState));
  }

  render() {
    return (
      <canvas
        className="layer"
        ref={this.setContext}
        onMouseMove={this.handleMouseMove}
        onMouseDown={this.handleMouseDown}
        onMouseUp={this.handleMouseUp}
        >
      </canvas>
    );
  }
}

export default Layer;
