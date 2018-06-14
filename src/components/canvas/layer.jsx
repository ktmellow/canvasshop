import React, { Component } from 'react';
import '../../styles/canvas/layer.css';

class Layer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mouse: {
        down: null,
        active: false
      }
    }

    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.handleMouseUp = this.handleMouseUp.bind(this);
  }

  handleMouseDown(e) {
    // should call appropriate tool function
      // paintbrush should record all mouse downs and render (no mouseup)
      // line should record mousedown point (and mouseup)
      // tool helpers should be put in separate folder
      e.persist()
      // console.log(e)

    function handleLineDown(e, component) {
      // console.log(component, component.state)
      const newState = component.state;
      newState.mouse.active = true;
      newState.mouse.down = {x: e.clientX - e.target.offsetLeft, y: e.clientY - e.target.offsetTop};
      component.setState(Object.assign({}, component.state));
      // console.log("new state", component.state)
    }
    switch(this.props.activeTool) {
      case 'line':
        handleLineDown(e, this);
        break;
      default:
        break;
    }
  }

  handleMouseMove(e) {
    // should call appropriate tool function
      // paintbrush should record all mouse downs and render (until mouseup)
      // line should record mousedown point (and mouseup)
      // tool helpers should be put in separate folder

    switch(this.props.activeTool) {
      default:
        break;
    }
  }

  handleMouseUp(e) {
    // should call appropriate tool function
      // paintbrush should record all mouse downs and render (until mouseup)
      // line should record mousedown point (and mouseup)
      // tool helpers should be put in separate folder
      function handleLineUp(e, component) {
        const newState = component.state;
        newState.mouse.active = false;
        const mouseUp = {x: e.clientX - e.target.offsetLeft, y: e.clientY - e.target.offsetTop};
        const ctx = component.refs.canvas.getContext('2d');
        ctx.moveTo(component.state.mouse.down.x,component.state.mouse.down.y);
        ctx.lineTo(mouseUp.x,mouseUp.y);
        ctx.stroke();
        newState.mouse.down = null;
        component.setState(Object.assign({}, component.state));
      }
    switch(this.props.activeTool) {
      default:
        handleLineUp(e, this);
        break;
    }
  }

  render() {
    return (
        <canvas className="layer" ref="canvas" onMouseMove={this.handleMouseMove} onMouseDown={this.handleMouseDown} onMouseUp={this.handleMouseUp} ></canvas>
    );
  }
}

export default Layer;
