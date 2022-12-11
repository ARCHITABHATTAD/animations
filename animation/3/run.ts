var canvas: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById("mycanvas");
var context: CanvasRenderingContext2D = canvas.getContext("2d");

var stpt=new Geometry.Point(300,300);
var endpt=new Geometry.Point(400,400);
var l1=new Geometry.line(stpt,endpt,context,1);
l1.draw();
l1.tofrolength=100;
let isanim:boolean=true;
function start1(){
    isanim=true;
    anim();
}
function anim(){
    context.clearRect(0,0,canvas.width,canvas.height);
    l1.rotate();
    l1.tofro();
    l1.draw();
    if(isanim){
        window.requestAnimationFrame(anim);
    }
   
}
function stop1(){
    isanim=false;
}