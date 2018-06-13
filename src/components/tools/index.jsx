import React, { Component } from "react";
import ToolBtn from './tool-btn';
import '../../styles/tools.css';

const Tools = (props) => {

  const isActive = (tool) => {
    return props.selectedTool === tool ? "selected" : "";
  };

  return (
    <article className="tools">
      {props.children}
    </article>
  )
}

export default Tools;
