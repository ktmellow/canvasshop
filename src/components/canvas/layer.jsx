import React, { Component } from 'react';
import '../../styles/canvas/layer.css';

// Drawing helpers
import mouseCoords from "../../helpers/mouse-coords";
import lineTo from "../../helpers/line-to";
import moveTo from "../../helpers/move-to";
import stroke from "../../helpers/stroke";
import clearLayer from "../../helpers/clear-layer";

class Layer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mouse: {
        active: false,
        prev: {
          down: null,
          move: null
        }
      },
      color: "green"
    }

    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.handleMouseUp = this.handleMouseUp.bind(this);
    this.mainContext = this.mainContext.bind(this);
    this.previewContext = this.previewContext.bind(this);
  }

  mainContext(r) {
    this.layerCanvas = r;
    this.ctx = r.getContext("2d");

    this.ctx.canvas.width = this.props.width;
    this.ctx.canvas.height = this.props.height;
  }

  previewContext(r) {
    this.previewCanvas = r;
    this.prv = r.getContext("2d");

    this.prv.canvas.width = this.props.width;
    this.prv.canvas.height = this.props.height;
  }

  handleMouseDown(e) {
    // e.persist()

    this.ctx.beginPath();

    switch (this.props.activeTool) {
      case 'line':
        moveTo(this.ctx, mouseCoords(e));
        break;
      default:
        break;
    }

    const newState = this.state;
    newState.mouse.active = true;
    newState.mouse.prev.down = mouseCoords(e);
    newState.mouse.prev.move = mouseCoords(e);
    this.setState(Object.assign({}, newState));
  }

  handleMouseMove(e) {
    if (!this.state.mouse.active) return;

    switch (this.props.activeTool) {
      case 'line':
        // erase old line
        clearLayer(this.prv);

        // create new line
        moveTo(this.prv, this.state.mouse.prev.down);
        lineTo(this.prv, mouseCoords(e));
        stroke(this.prv, this.state.color);
        // debugger

        const newState = this.state;
        newState.mouse.prev.move = mouseCoords(e);
        this.setState(Object.assign({}, newState));
        return;
      default:
        lineTo(this.ctx, mouseCoords(e));
        stroke(this.ctx, this.state.color);
        break;
    }
  }

  handleMouseUp(e) {
    if (!this.state.mouse.active) return;

    switch (this.props.activeTool) {
      case 'line':
        moveTo(this.ctx, this.state.mouse.prev.down);
        break;
      default:
        break;
    }
    lineTo(this.ctx, mouseCoords(e));
    stroke(this.ctx, this.state.color);

    const newState = this.state;
    newState.mouse.active = false;
    this.setState(Object.assign({}, newState));
  }

  render() {
    return (
      <section
        className="layer-wrap"
        onMouseMove={this.handleMouseMove}
        onMouseDown={this.handleMouseDown}
        onMouseUp={this.handleMouseUp}
        style={
          {
            width: `${this.props.width}px`,
            height: `${this.props.height}px`
          }
        }
      >
        <canvas
          className="preview layer"
          ref={this.previewContext}
        />
        <canvas
          className="layer"
          ref={this.mainContext}
        />
      </section>
    );
  }
}

export default Layer;
