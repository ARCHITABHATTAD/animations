var canvas = document.getElementById("mycanvas");
var context = canvas.getContext("2d");
context.translate(0, canvas.height);
context.scale(1, -1);
var pt = new tank.Point(50, 50);
var Tank = new tank.Watertank(pt, 100, 300, context);
function animation() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    Tank.draw();
    window.requestAnimationFrame(animation);
}
function start1() {
    animation();
}
//# sourceMappingURL=run.js.map