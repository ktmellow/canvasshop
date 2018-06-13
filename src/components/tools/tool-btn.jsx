import React from 'react';

const ToolBtn = (props) => {

  const isActive = (name) => {
    return props.selectedTool === name ? "selected" : "";
  };

  return (
    <section className={`tool ${isActive(props.name)}`} onClick={props.handleToolClick}>
      {props.name}
    </section>
  )
}

export default ToolBtn;