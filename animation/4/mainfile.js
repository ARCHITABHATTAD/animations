var Geometry;
(function (Geometry) {
    class point {
        constructor(x, y) {
            this.x = x;
            this.y = y;
        }
    }
    Geometry.point = point;
    class rectangle {
        constructor(context, pt1, length, width, color) {
            this.context = context;
            this.pt1 = pt1;
            this.l = length;
            this.w = width;
            this.color = color;
        }
        draw() {
            this.context.beginPath();
            this.context.rect(this.pt1.x, this.pt1.y, this.l, this.w);
            this.context.lineWidth = 2;
            this.context.fillStyle = this.color;
            this.context.fill();
            this.context.strokeStyle = "black";
            this.context.stroke();
        }
    }
    Geometry.rectangle = rectangle;
    class line {
        constructor(context, point1, point2, color) {
            this.pt1 = point1;
            this.pt2 = point2;
            this.context = context;
            this.color = color;
        }
        draw() {
            this.context.beginPath();
            this.context.moveTo(this.pt1.x, this.pt1.y);
            this.context.lineTo(this.pt2.x, this.pt2.y);
            this.context.lineWidth = 2;
            this.context.strokeStyle = this.color;
            this.context.stroke();
        }
    }
    Geometry.line = line;
    class circle {
        constructor(context, c1, c2, radius, color) {
            this.context = context;
            this.c1 = c1;
            this.c2 = c2;
            this.r = radius;
            this.color = color;
        }
        draw() {
            this.context.beginPath();
            this.context.arc(this.c1, this.c2, this.r, 0, 2 * Math.PI);
            this.context.lineWidth = 2;
            this.context.strokeStyle = "black";
            this.context.fillStyle = this.color;
            this.context.fill();
            this.context.stroke();
        }
    }
    Geometry.circle = circle;
    class arc {
        constructor(context, c1, c2, radius) {
            this.context = context;
            this.c1 = c1;
            this.c2 = c2;
            this.r = radius;
        }
        draw() {
            this.context.beginPath();
            this.context.arc(this.c1, this.c2, this.r, -Math.PI / 2, Math.PI / 2);
            this.context.lineWidth = 2;
            this.context.strokeStyle = "black";
            this.context.stroke();
        }
    }
    Geometry.arc = arc;
    class rotating_circle {
        constructor(context, pt1, pt2, r, color) {
            this.pt1 = pt1;
            this.pt2 = pt2;
            this.context = context;
            this.ang = 0;
            this.r = r;
            this.color = color;
        }
        draw() {
            this.context.beginPath();
            this.context.arc(this.pt1.x, this.pt1.y, this.r, 0, Math.PI * 2);
            this.context.lineWidth = 0.1;
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
    Geometry.rotating_circle = rotating_circle;
    class waterlevel {
        constructor(context, x, y, length, width, color) {
            this.context = context;
            this.x = x;
            this.y = y;
            this.l = length;
            this.w = width;
            this.color = color;
            this.ang = 0;
            this.width = width;
        }
        draw() {
            this.context.beginPath();
            this.context.rect(this.x, this.y, this.l, this.w);
            this.context.fillStyle = this.color;
            this.context.fill();
        }
        updateangle() {
            for (this.ang = 1; this.ang <= 150; this.ang++) {
                this.context.beginPath();
                this.context.rect(this.x, this.y, this.l, this.ang);
                this.context.fillStyle = this.color;
                this.context.fill();
            }
        }
    }
    Geometry.waterlevel = waterlevel;
})(Geometry || (Geometry = {}));
//# sourceMappingURL=mainfile.js.map