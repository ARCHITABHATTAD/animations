var Geometry;
(function (Geometry) {
    class Point {
        constructor(x, y) {
            this._x = x;
            this._y = y;
        }
        get x() {
            return (this._x);
        }
        get y() {
            return (this._y);
        }
    }
    Geometry.Point = Point;
    class line {
        constructor(stpt, endpt, context, angv) {
            this.tofrolength = 0;
            this.motion = 'forward';
            this.l = 0;
            this._stpt = stpt;
            this._endpt = endpt;
            this.context = context;
            this.angv = angv;
            this.fixedpt = new Point(stpt.x, stpt.y);
            this.getproperties();
        }
        draw() {
            this.context.beginPath();
            this.context.moveTo(this._stpt.x, this._stpt.y);
            this.context.lineTo(this._endpt.x, this._endpt.y);
            this.context.strokeStyle = 'black';
            this.context.lineWidth = 2;
            this.context.stroke();
        }
        getproperties() {
            this.angle = 180 / Math.PI * (Math.atan2(this._endpt.y - this._stpt.y, this._endpt.x - this._stpt.x));
            this.length = Math.sqrt(Math.pow(this._endpt.y - this._stpt.y, 2) + Math.pow(this._endpt.x - this._stpt.x, 2));
        }
        //rotation generation
        rotate() {
            let x = this._stpt.x + this.length * Math.cos(this.angle + Math.PI / 180);
            let y = this._stpt.y + this.length * Math.sin(this.angle + Math.PI / 180);
            this._endpt = new Point(x, y);
            this.angle += this.angv;
            this.rotatecheck();
        }
        //rotation handling
        rotatecheck() {
            if (this.angle >= 360) {
                this.angle = 0;
            }
        }
        tofro() {
            if (this.motion == "forward") {
                this.l = 1;
            }
            else {
                this.l = -1;
            }
            let x = this._stpt.x + this.l;
            let y = this._stpt.y + this.l;
            this._stpt = new Point(x, y);
            this.tofrocheck();
        }
        tofrocheck() {
            if (this.fixedpt.x + this.tofrolength < this._stpt.x) {
                this.motion = "backward";
            }
            else if (this.fixedpt.x - this.tofrolength < this._stpt.x) {
                this.motion = "forward";
            }
        }
    }
    Geometry.line = line;
})(Geometry || (Geometry = {}));
//# sourceMappingURL=framework.js.map