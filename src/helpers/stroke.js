const stroke = (context, color, erase) => {
  if (erase) {
    // context.globalCompositeOperation = "destination-out";
    context.globalCompositeOperation = "destination-out";
    context.strokeStyle = "rgba(0,0,0,1)";
    context.stroke();
    context.restore();
  } else {
    context.globalCompositeOperation = "source-over";
    context.strokeStyle = color || "#FFFF00";
    context.stroke();
    context.restore();
  }
};

export default stroke;