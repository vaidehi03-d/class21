const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var ground;
var left;
var right;
var top_wall;
var button1;
var button2;
function setup() {
  
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  
  //created boundries
  ground =new Ground(200,390,400,20);
  right = new Ground(390,200,20,400);
  left = new Ground(10,200,20,400);
  top_wall = new Ground(200,10,400,20);


  //created button 1
  button1=createImg("right.png");
  button1.position(220,30);
  button1.size(50,50);
  button1.mouseClicked(hForce);

  //created button 2
  button2=createImg("up.png");
  button2.position(20,30);
  button2.size(50,50);
  button2.mouseClicked(vForce);

  //assinged property to ball object
 var ballOptions={
   restitution:0.95
 }

 //created ball object
ball=Bodies.circle(200,200,20,ballOptions);
World.add(world,ball);




  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() 
{
  background(51);
  ellipse(ball.position.x,ball.position.y,20);
  ground.show();
  top_wall.show();
  left.show();
  right.show();
  Engine.update(engine);
}

function hForce (){
Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0});

}

function vForce (){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05});

  }