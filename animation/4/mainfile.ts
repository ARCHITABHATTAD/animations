namespace Geometry{
    export class point {

        public x:number;
        public y:number;

        constructor(x:number,y:number){
            this.x=x;
            this.y=y;
        }
    }

    export class rectangle{

        
        
        public pt1:point;
        public context:CanvasRenderingContext2D;
        public l:number;
        public w:number;
        public color:string;

        constructor(context:CanvasRenderingContext2D,pt1:point,length:number,width:number,color:string){

            this.context = context;
            this.pt1 = pt1;
            this.l=length;
            this.w=width;
            this.color = color;
        
        }
    
        draw(){

            this.context.beginPath();
            this.context.rect(this.pt1.x, this.pt1.y, this.l, this.w);
            this.context.lineWidth = 2;
            this.context.fillStyle = this.color;
            this.context.fill();
            this.context.strokeStyle = "black";
            this.context.stroke();   

        }

    }

    export class line {

        public pt1:point;
        public pt2:point;
        public context:CanvasRenderingContext2D;
        private ang:number;
        public color:string;

        constructor(context:CanvasRenderingContext2D,point1:point,point2:point,color:string){

            this.pt1 = point1;
            this.pt2 = point2;
            this.context = context;
            this.color=color;


        }

        draw(){

        this.context.beginPath();
        this.context.moveTo(this.pt1.x, this.pt1.y);
        this.context.lineTo(this.pt2.x, this.pt2.y);
        this.context.lineWidth = 2;
        this.context.strokeStyle = this.color;
        this.context.stroke();

        }

    }
    export class circle{
        
        public c1:number;
        public c2:number;
        public r:number;
        public context:CanvasRenderingContext2D;
        public color:string;

        constructor(context:CanvasRenderingContext2D,c1:number,c2:number,radius:number,color:string){

            this.context = context;
            this.c1 = c1;
            this.c2 = c2;
            this.r = radius;
            this.color = color;

        }

        draw(){
            this.context.beginPath();
            this.context.arc(this.c1, this.c2, this.r, 0 ,2* Math.PI );
            this.context.lineWidth = 2;
            this.context.strokeStyle = "black";
            this.context.fillStyle = this.color;
            this.context.fill();
            this.context.stroke();
        }
    }

    export class arc{
        
        public c1:number;
        public c2:number;
        public r:number;
        public context:CanvasRenderingContext2D;

        constructor(context:CanvasRenderingContext2D,c1:number,c2:number,radius:number){

            this.context = context;
            this.c1 = c1;
            this.c2 = c2;
            this.r = radius;

        }

        draw(){
            this.context.beginPath();
            this.context.arc(this.c1, this.c2, this.r, -Math.PI/2 , Math.PI / 2);
            this.context.lineWidth = 2;
            this.context.strokeStyle = "black";
            this.context.stroke();
        }
    }

    export class rotating_circle{
        private ang:number;
        public pt1:point;
        public pt2:point;
        public context:CanvasRenderingContext2D;
        public r:number;
        public color: string;

       
        constructor(context:CanvasRenderingContext2D,pt1:point,pt2:point,r:number,color:string){

            this.pt1 = pt1;
            this.pt2 = pt2;
            this.context = context;
            this.ang =0;
            this.r=r;
            this.color=color;
            
        }

        draw(){

            this.context.beginPath();
            this.context.arc(this.pt1.x, this.pt1.y, this.r, 0, Math.PI * 2);
            this.context.lineWidth = 0.1;
            this.context.fillStyle = this.color;
            this.context.fill();
            //this.context.strokeStyle = "black";
            this.context.stroke();
        
        }

        updateangle(){
            this.ang++;
            var len = Math.sqrt(Math.pow(this.pt1.x - this.pt2.x, 2) + Math.pow(this.pt1.y - this.pt2.y, 2));
            this.pt1.x = this.pt2.x + len * Math.cos(this.ang * Math.PI / 180);
            this.pt1.y = this.pt2.y + len * Math.sin(this.ang * Math.PI / 180);
            console.log(this.pt2.x, this.pt2.y)
        }

    }

    export class waterlevel {

        public x:number;
        public y:number;
        public context:CanvasRenderingContext2D;
        public l:number;
        public w:number;
        public color:string;
        public ang:number;
        private width:number;

        constructor(context:CanvasRenderingContext2D,x:number,y:number,length:number,width:number,color:string){

            this.context = context;
            this.x = x;
            this.y = y;
            this.l=length;
            this.w=width;
            this.color = color;
            this.ang = 0;
            this.width = width;
        
        }
    
        draw(){

            this.context.beginPath();
            this.context.rect(this.x, this.y, this.l, this.w);
            this.context.fillStyle = this.color;
            this.context.fill();   

        }

        updateangle(){
            
            for ( this.ang=1;this.ang<=150;this.ang++){
                this.context.beginPath();
                this.context.rect(this.x, this.y, this.l, this.ang);
                this.context.fillStyle = this.color;
                this.context.fill();  
                
            }
        }
    }
}