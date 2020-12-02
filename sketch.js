
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine , world;
var ball , ground , backGroung;
var leftWall , rightWall , bottomBall ;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	ground = createSprite(400,600,800,10)
	ground.isStatic = false

	leftWall = createSprite()


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



