var canvas = document.getElementById("mycanvas");
var context = canvas.getContext("2d");
// context.beginPath()
// context.arc(200, 200, 30, 0, Math.PI*2, false);
// context.strokeStyle="blue";
// context.stroke();
var x = Math.random() * canvas.width;
var y = Math.random() * canvas.height;
var dx = (Math.random() - 0.5) * 6;
var dy = (Math.random() - 0.5) * 6;
var radius = 30;
function animate() {
    requestAnimationFrame(animate);
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.beginPath();
    context.arc(x, y, radius, 0, Math.PI * 2, false);
    context.strokeStyle = "blue";
    context.stroke();
    if (x + radius > canvas.width || x - radius < 0) {
        dx = -dx;
    }
    if (y + radius > canvas.height || y - radius < 0) {
        dy = -dy;
    }
    x += dx;
    y += dy;
}
animate();
//# sourceMappingURL=animation.js.map