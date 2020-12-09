
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bob1,bob2,bob3,bob4,bob5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
    
	//Create the Bodies Here.
	bob1=new Bob(200,400,50);
	bob2=new Bob(250,400,50);
	bob3=new Bob(300,400,50);
	bob4=new Bob(350,400,50);
	bob5=new Bob(400,400,50);
	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  
  drawSprites();
 
}



