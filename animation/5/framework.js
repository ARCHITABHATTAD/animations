class point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}
class circle {
    constructor(context, pt1, pt2, r, color) {
        this.pt1 = pt1;
        this.pt2 = pt2;
        this.context = context;
        this.ang = 0;
        this.up1 = true;
        this.up2 = false;
        this.down1 = false;
        this.down2 = false;
        this.r = r;
        this.color = color;
    }
    draw() {
        this.context.beginPath();
        this.context.arc(this.pt1.x, this.pt1.y, this.r, 0, Math.PI * 2);
        this.context.lineWidth = 2;
        this.context.fillStyle = this.color;
        this.context.fill();
        //this.context.strokeStyle = "black";
        this.context.stroke();
    }
    updateangle() {
        this.ang++;
        var len = Math.sqrt(Math.pow(this.pt1.x - this.pt2.x, 2) + Math.pow(this.pt1.y - this.pt2.y, 2));
        this.pt1.x = this.pt2.x + len * Math.cos(this.ang * Math.PI / 180);
        this.pt1.y = this.pt2.y + len * Math.sin(this.ang * Math.PI / 180);
        console.log(this.pt2.x, this.pt2.y);
    }
}
//# sourceMappingURL=framework.js.map