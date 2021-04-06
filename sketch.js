const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var polygon_img;
var ground,stand;
var block1,block2,block3;
function preload(){
  polygon_img=loadImage("polygon.png");
}
function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground();
  stand = new Stand(620,250,200,10);

  block1 = new Block(600,240,40,40);
  block2 = new Block(555,240,40,40);
  block3 = new Block(645,240,40,40);
  block4 = new Block(690,240,40,40);
 
  block5 = new Block(590,230,40,40);
  block6 = new Block(635,230,40,40);
  block7 = new Block(680,230,40,40);
  
  block8 = new Block(625,220,40,40)
  polygon = new Polygon(200,50,40);
  slingshot = new SlingShot(polygon.body,{x:200, y:50});
}
function draw() {
  background(56,44,44); 
  ground.display();
  stand.display();
  fill("green");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  fill("yellow");
  block5.display();
  block6.display();
  block7.display();
  fill("blue");
  block8.display();
  polygon.display();
  slingshot.display();
}
function mouseDragged(){
  Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}