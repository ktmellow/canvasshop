const stroke = (context, color, erase, thickness) => {
  if (erase) {
    // context.globalCompositeOperation = "destination-out";
    context.globalCompositeOperation = "destination-out";
    context.strokeStyle = "rgba(0,0,0,1)";
  } else {
    context.globalCompositeOperation = "source-over";
    context.strokeStyle = color || "#FFFF00";
  }
  context.lineWidth = thickness;
  context.stroke();
  context.restore();
};

export default stroke;