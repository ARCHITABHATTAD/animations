var canvas = document.getElementById("mycanvas");
var context = canvas.getContext('2d');
var r = document.getElementById('radius');
var len = document.getElementById('length');
var breadth = document.getElementById('breadth');
var rect = canvas.getBoundingClientRect();
var shape = "none";
// adding event listner
canvas.addEventListener('click', click, false);
function click(e) {
    if (shape == 'circle') {
        var mycenter = new point(e.clientX - rect.x, e.clientY - rect.y);
        var mycircle = new circle(mycenter, +r.value, canvas, context);
        mycircle.draw();
    }
    else if (shape == 'rectangle') {
        var mypoint = new point(e.clientX - rect.x, e.clientY - rect.y);
        var myrectangle = new rectangle(mypoint, +len.value, +breadth.value, canvas, context);
        myrectangle.draw();
    }
}
function drawcircle() {
    shape = "circle";
}
function drawrectangle() {
    shape = "rectangle";
}
//# sourceMappingURL=app.js.map