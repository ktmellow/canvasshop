import React from "react";
import '../../styles/tools.css';

const Tools = (props) => {

  return (
    <article className="tools">
      {props.children}
    </article>
  )
}

export default Tools;
