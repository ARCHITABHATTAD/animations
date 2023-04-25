var canvas: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById("mycanvas");
var context: CanvasRenderingContext2D = canvas.getContext("2d");

context.translate(0,600);
context.scale(1,-1);
context.save();

var p1 = new Geometry.point(100,100);
var p2 = new Geometry.point(100,350);
var rect1 = new Geometry.rectangle(context,p1,100,150,"white");
var rect2 = new Geometry.rectangle(context,p2,100,150,"white");
rect1.draw();
rect2.draw();

var p3 = new Geometry.point(200,470);
var p4 = new Geometry.point(200,125);
var rect3 = new Geometry.rectangle(context,p3,20,20,"white");
var rect4 = new Geometry.rectangle(context,p4,20,20,"white");
rect3.draw();
rect4.draw();

//connection of tank B
var l11 = new Geometry.point(220,480);
var l12 = new Geometry.point(270,480);
var l13 = new Geometry.point(270,470);
var l14 = new Geometry.point(270,490);
var l15 = new Geometry.point(290,480);
var l15_a = new Geometry.point(295,480);
var l16 = new Geometry.point(320,480);
var l17 = new Geometry.point(320,310);
var l18 = new Geometry.point(360,310);
var line11 = new Geometry.line(context,l11,l12,"black");
var line12 = new Geometry.line(context,l13,l14,"black");
var line13 = new Geometry.line(context,l13,l15,"black");
var line14 = new Geometry.line(context,l14,l15,"black");
var line15 = new Geometry.line(context,l15_a,l16,"green");
var line16 = new Geometry.line(context,l16,l17,"green");
var line17 = new Geometry.line(context,l17,l18,"green");


//line joining tank b to not gate
line11.draw();

//not gate
var c_not = new Geometry.circle(context,l15.x,l15.y,5,"grey");
line12.draw();
line13.draw();
line14.draw();
c_not.draw();

//lines joining not gate to and gate
line15.draw();
line16.draw();
line17.draw();

//connection of tank A
var l21 = new Geometry.point(220,135);
var l22 = new Geometry.point(290,135);
var l23 = new Geometry.point(290,290);
var l24 = new Geometry.point(360,290);

var line21 = new Geometry.line(context,l21,l22,"grey");
var line22 = new Geometry.line(context,l22,l23,"grey");
var line23 = new Geometry.line(context,l23,l24,"grey");
line21.draw();
line22.draw();
line23.draw();

//and gate
var l31 =new Geometry.point(360,275);
var l32 =new Geometry.point(360,325);
var l33 =new Geometry.point(380,275);
var l34 =new Geometry.point(380,325);

var line31 = new Geometry.line(context,l31,l32,"black");
var line32 = new Geometry.line(context,l31,l33,"black");
var line33 = new Geometry.line(context,l32,l34,"black");
line31.draw();
line32.draw();
line33.draw();

var semi = new Geometry.arc(context,380,300,25);
semi.draw(); 

// And gate to circle
var l41 = new Geometry.point(405,300);
var l42 = new Geometry.point(450,300);
var line41 = new Geometry.line(context,l41,l42,"grey");
line41.draw();

// circle and rotating circle
var c1 = new Geometry.point(480,300);
var c2 = new Geometry.point(460,300);
var const_circle = new Geometry.circle(context,c1.x,c2.y,30,"grey");
var inner_circle = new Geometry.rotating_circle(context,c2,c1,10,"yellow");
const_circle.draw();
//inner_circle.draw();

var t1:HTMLInputElement = <HTMLInputElement> document.getElementById("t1");
var t2:HTMLInputElement = <HTMLInputElement> document.getElementById("t2");

var val1 = parseInt(t1.value);
var val2 = parseInt(t2.value);
console.log(val1);
console.log(val2);

var level1 = new Geometry.waterlevel(context,101,100,98,val1,"blueviolet");
var level2 = new Geometry.waterlevel(context,101,350,98,val2,"blue");
level1.draw();
level2.draw();

function Animate1(){

    context.clearRect(0,0,canvas.width,canvas.height);
    rect1.draw();
    rect2.draw();
    rect3.draw();
    rect4.draw();
    line11.draw();
    line12.draw();
    line13.draw();
    line14.draw();
    c_not.draw();
    line15.draw();
    line16.draw();
    line17.draw();
    line21.draw();
    line22.draw();
    line23.draw();
    line31.draw();
    line32.draw();
    line33.draw();
    semi.draw(); 
    line41.draw();
    const_circle.draw();
    var t1:HTMLInputElement = <HTMLInputElement> document.getElementById("t1");
    var t2:HTMLInputElement = <HTMLInputElement> document.getElementById("t2");
    var val2 = parseInt(t2.value);
    var val1 = parseInt(t1.value);
    console.log(val1);
    console.log(val2);

    var level1 = new Geometry.waterlevel(context,101,100,98,val1,"blueviolet");
    
    level1.draw();
    
    inner_circle.updateangle();

        //var level3 = new Geometry.waterlevel(context,101,350,98,145,"blue");
        //level3.draw(); 
    var x =35;   
    
    if(val1>37 && val2<140){
    
        inner_circle.draw();
        line21.color ="green";
        line22.color ="green";
        line23.color ="green";
        line41.color ="green";
        var level2 = new Geometry.waterlevel(context,101,350,98,120,"blue");
        level2.draw();
    
    }else{
        line41.color ="grey";
        var level2 = new Geometry.waterlevel(context,101,350,98,125,"blue");
        level2.draw();
    } 
    
    x+=11;
    if(x=145){
        x=35;
    }

    if(val1<37){

        line21.color ="grey";
        line22.color ="grey";
        line23.color ="grey";
        

    }
    
    if(val2 > 145){
        line11.color = "green";
        line15.color = "grey";
        line16.color ="grey";
        line17.color ="grey";
        
    }
    if(val2 < 145) {

        line11.color = "grey";
        line15.color = "green";
        line16.color ="green";
        line17.color ="green";

    }
    
    window.requestAnimationFrame(Animate1);
    
}

function Animate2(){

    context.clearRect(0,0,canvas.width,canvas.height);
    rect1.draw();
    rect2.draw();
    rect3.draw();
    rect4.draw();
    line11.draw();
    line12.draw();
    line13.draw();
    line14.draw();
    c_not.draw();
    line15.draw();
    line16.draw();
    line17.draw();
    line21.draw();
    line22.draw();
    line23.draw();
    line31.draw();
    line32.draw();
    line33.draw();
    semi.draw(); 
    line41.draw();
    const_circle.draw();
    var t1:HTMLInputElement = <HTMLInputElement> document.getElementById("t1");
    var t2:HTMLInputElement = <HTMLInputElement> document.getElementById("t2");
    var val2 = parseInt(t2.value);
    var val1 = parseInt(t1.value);
    console.log(val1);
    console.log(val2);
    
    var level2 = new Geometry.waterlevel(context,101,350,98,val2,"blue");
    level2.draw();

    var level1 = new Geometry.waterlevel(context,101,100,98,val1,"blueviolet");
    level1.draw();
    inner_circle.updateangle();

    if(val1>37 && val2<140){
    
        inner_circle.draw();
        line21.color ="green";
        line22.color ="green";
        line23.color ="green";
        line41.color ="green";
        
    
    }else{
        line41.color ="grey";
    } 
    if(val1<37){

        line21.color ="grey";
        line22.color ="grey";
        line23.color ="grey";
        

    }
    
    if(val2 > 145){
        line11.color = "green";
        line15.color = "grey";
        line16.color ="grey";
        line17.color ="grey";
        
    }
    if(val2 < 145) {

        line11.color = "grey";
        line15.color = "green";
        line16.color ="green";
        line17.color ="green";

    }
    
    window.requestAnimationFrame(Animate2);
    
}


