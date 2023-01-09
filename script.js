const canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
let decider = false;

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

canvas.style.background = "black";

let balls = [];

function render() {
  for (let i = 0; i < balls.length; i++) {
    draw(balls[i]);
  }
  requestAnimationFrame(render);
}

console.log(Math.PI);

function draw(ball) {
  ctx.beginPath();
  ctx.fillStyle = "yellow";
  ctx.arc(ball.x, ball.y, 10, 5, Math.PI * 2, true);
  ctx.fill();
  ctx.closePath();
}

render();

window.addEventListener("mousedown", function (e) {
  decider = true;

  window.addEventListener("mousemove", function (e) {
    if (decider) {
      balls.push({
        x: e.clientX,
        y: e.clientY,
      });
    }
    // console.log(balls);
  });

  console.log(this.window.onmousedown);
});

window.addEventListener("mouseup", function (e) {
  decider = false;
});
