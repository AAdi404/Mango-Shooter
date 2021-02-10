const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var engine;
var world;
var ground;
var stone;
var slingshot;
var mango1;
var mango2;
var mango3;
var mango4;
var mango5;
var mango6;
var mango7;
var mango8;
var mango9;
var mango10;
var backgroundImage;
function preload(){
backgroundImage=loadImage("sprites/background.jpg");
}
function setup() {
var canvas=createCanvas(2000,1000);
engine=Engine.create();
world=engine.world;
ground=new Ground(1000,1000,2000,50);
stone=new Stone(200,50);
slingshot=new Slingshot(stone.body,{x:200,y:150});
mango1=new Mango(1200,400,30);
mango2=new Mango(1500,300,30);
mango3=new Mango(1400,500,30);
mango4=new Mango(1600,400,30);
mango5=new Mango(1300,200,30);
mango6=new Mango(1350,450,30);
mango7=new Mango(1800,350,30);
mango8=new Mango(1900,450,30);
mango9=new Mango(1800,160,30);
mango10=new Mango(1600,150,30);
Engine.run(engine);
}
function draw(){
background(backgroundImage);
ground.display();
slingshot.display();
stone.display();
mango1.display();
mango2.display();
mango3.display();
mango4.display();
mango5.display();
mango6.display();
mango7.display();
mango8.display();
mango9.display();
mango10.display();
detectollision(stone,mango1);
detectollision(stone,mango2);
detectollision(stone,mango3);
detectollision(stone,mango4);
detectollision(stone,mango5);
detectollision(stone,mango6);
detectollision(stone,mango7);
detectollision(stone,mango8);
detectollision(stone,mango9);
detectollision(stone,mango10);
}
function mouseDragged(){
Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
slingshot.fly()                                        
}
function keyPressed(){
if(keyCode===32){
Matter.Body.setPosition(stone.body,{x:200,y:150}) 
slingshot.attach(stone.body);
}
}
function detectollision(lstone,lmango){
mangoBodyPosition=lmango.body.position
stoneBodyPosition=lstone.body.position
var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
if(distance<=lmango.r+lstone.r){
Matter.Body.setStatic(lmango.body,false);
}
}