const stroke = (context, color) => {
  console.log(context)
  if (color === "erase") {
    context.globalCompositeOperation = "destination-out";
    context.strokeStyle = "rgba(0,0,0,1)";
    context.stroke();
  } else {
    context.strokeStyle = color || "#000";
    context.stroke();
  }
};

export default stroke;