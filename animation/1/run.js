// creating a class point
class point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}
// creating a class circle
class circle {
    constructor(center, r, canvas, context) {
        this.center = center;
        this.context = context;
        this.canvas = canvas;
        this.r = r;
    }
    draw() {
        this.context.beginPath();
        this.context.arc(this.center.x, this.center.y, this.r, 0, 2 * Math.PI, true);
        this.context.lineWidth = 2;
        this.context.fillStyle = 'yellow';
        this.context.fill();
        this.context.stroke();
    }
}
// create a rectangle
class rectangle {
    constructor(start, length, breadth, canvas, context) {
        this.breadth = breadth;
        this.canvas = canvas;
        this.length = length;
        this.context = context;
        this.start = start;
    }
    draw() {
        this.context.beginPath();
        this.context.moveTo(this.start.x, this.start.y);
        this.context.lineTo(this.start.x + this.length, this.start.y);
        this.context.lineTo(this.start.x + this.length, this.start.y + this.breadth);
        this.context.lineTo(this.start.x, this.start.y + this.breadth);
        this.context.lineTo(this.start.x, this.start.y);
        this.context.fillStyle = 'violet';
        this.context.fill();
        this.context.stroke();
    }
}
//# sourceMappingURL=run.js.map