import React from 'react';

const Eraser = (props) => {
  const { handleErase, erase } = props;

  const isActive = (erase) => {
    return erase ? "selected" : "";
  };

  return (
    <button className={`tool ${isActive(erase)}`}  onClick={handleErase}>eraser</button>
  )
}

export default Eraser;