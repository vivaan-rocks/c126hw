img='';

function preload(){
    img=loadImage('bggbcanvsas.jpeg');
}
function draw(){
    image(img,0,0,600,500);
    fill("#FF0000");
    text("dog",45,75);
    noFill();
    stroke("#FF0000");
    rectangle(30,60,450,350);
}
function setup(){
    canvas=createCanvas(600,500);
    canvas.center();
}