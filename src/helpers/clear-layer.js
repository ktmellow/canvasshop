const clearLayer = (context) => {
  context.beginPath();
  context.clearRect(0, 0, context.canvas.width, context.canvas.height);
}

export default clearLayer;