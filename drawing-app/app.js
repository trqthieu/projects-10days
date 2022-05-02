const canvas = document.querySelector('#myCanvas');
const colorEl = document.querySelector('#color');
const decreaseEl = document.querySelector('.decrease');
const increaseEl = document.querySelector('.increase');
const sizeEl = document.querySelector('.size');
const clearEl = document.querySelector('.clear');
function drawCircle(x, y, r) {
  ctx.beginPath();
  ctx.arc(x, y, r, 0, 2 * Math.PI);
  ctx.lineWidth = size;
  ctx.fillStyle = color;
  ctx.fill();
}
function drawLine(x, y, _x, _y) {
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(_x, _y);
  ctx.lineWidth = size * 2;
  ctx.strokeStyle = color;
  ctx.stroke();
  mouseStartPosition = [_x, _y];
}
decreaseEl.addEventListener('click', () => {
  if (size > 0) {
    size--;
    sizeEl.innerHTML = size;
  }
});
increaseEl.addEventListener('click', () => {
  if (size < 20) {
    size++;
    sizeEl.innerHTML = size;
  }
});
clearEl.addEventListener('click', () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
});
let rect = canvas.getBoundingClientRect();
const canvasPosition = [rect.left, rect.top];
console.log(canvasPosition);
canvas.width = 1000;
canvas.height = 450;
canvas.style.width = '1000px';
canvas.style.height = '450px';
let mouseStartPosition = [];
let mouseMovePosition = [];
let ctx = canvas.getContext('2d');
let size = 5;
let color = colorEl.value;
let isPress = false;

colorEl.addEventListener('change', e => {
  color = e.target.value;
});

canvas.addEventListener('mousedown', e => {
  isPress = true;
  mouseStartPosition[0] = e.clientX - canvasPosition[0];
  mouseStartPosition[1] = e.clientY - canvasPosition[1];
});
document.addEventListener('mouseup', e => {
  isPress = false;
});
canvas.addEventListener('mousemove', e => {
  if (isPress) {
    mouseMovePosition = [
      e.clientX - canvasPosition[0],
      e.clientY - canvasPosition[1],
    ];
    drawCircle(...mouseMovePosition, size);
    drawLine(...mouseStartPosition, ...mouseMovePosition);
  }
});
