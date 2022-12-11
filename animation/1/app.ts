var canvas:HTMLCanvasElement=<HTMLCanvasElement>document.getElementById("mycanvas");
var context:CanvasRenderingContext2D = canvas.getContext('2d')!;
var r:HTMLInputElement=<HTMLInputElement>document.getElementById('radius');
var len:HTMLInputElement=<HTMLInputElement>document.getElementById('length');
var breadth:HTMLInputElement=<HTMLInputElement>document.getElementById('breadth');
var rect=canvas.getBoundingClientRect();

var shape:string="none";

// adding event listner
canvas.addEventListener('click',click,false);

function click(e:MouseEvent){
    if(shape=='circle'){
        var mycenter:point=new point(e.clientX - rect.x, e.clientY - rect.y);
        var mycircle:circle= new circle(mycenter, +r.value, canvas, context);
        mycircle.draw();
    }

    else if(shape=='rectangle'){
        var mypoint:point=new point(e.clientX - rect.x, e.clientY - rect.y);
        var myrectangle:rectangle= new rectangle(mypoint, +len.value, +breadth.value, canvas, context);
        myrectangle.draw();
    }
}

function drawcircle(){
    shape="circle";
}
function drawrectangle(){
    shape="rectangle";
}