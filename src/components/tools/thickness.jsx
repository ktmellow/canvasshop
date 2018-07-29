import React from 'react';

const Thickness = ({handleThickness, thickness}) => {

  return (
    <section className="thickness">
      <input className="thickness-slider" type="range" min="1" max="100" step="1" onChange={handleThickness} value={thickness} />
      <input className="thickness-number" type="number" onChange={handleThickness} value={thickness} />
    </section>
  );
}


export default Thickness;