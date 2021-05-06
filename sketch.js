var helicopterIMG, helicopter, package,packageIMG;
var packageBody,groundSprite;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	//creating grounds
	groundSprite=createSprite(width/2, height-11, 800,20);
	groundSprite.shapeColor=color("white")
	World.add(world, groundSprite);
	
	//creating package
	package = createSprite(width/2, 80, 10,10);
	package.addImage(packageIMG);
	package.scale=0.2;

	//creating helicopter
	helicopter=createSprite(width/2, 200, 10,10);
	helicopter.addImage(helicopterIMG);
	helicopter.scale=0.6;


	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5,isStatic:true});
	World.add(world, packageBody);

	
	ground = Bodies.rectangle(width/2, 580, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  package.x= packageBody.position.x;
  package.y= packageBody.position.y;
  
  keyPressed();
  drawSprites();
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
	Body.setStatic(packageBody,false);
    
  }
}