var bob1,bob2,bob3,bob4,bob5;
let rope,rope1,rope2,rope3,rope4;
var roof;
const Constraint=Matter.constraint;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function preload()
{

}

function setup() {
	createCanvas(800, 800);

 	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    bob1 = new bob(400,400,10);
	bob2 = new bob(440,400,10);
	bob3 = new bob(480,400,10);
	bob4 = new bob(520,400,10);
	bob5 = new bob(560,400,10);
	
	rope = new Rope();
	rope1 = new Rope();
	rope2 = new Rope();
	rope3 = new Rope();
	rope4 = new Rope();
	
	roof = new Roof(400,200,50,100);
	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background(1000);
  
  drawSprites();
 
}