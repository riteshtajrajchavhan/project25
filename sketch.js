
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj, paperObject,groundObject	
var world,dustbin1,dustbinImage;


function preload(){
	dustbinImage=loadImage("dustbin2.png");
	}


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);

	

	engine = Engine.create();
	world = engine.world;
	dustbinObj=new dustbin(1200,600);
	paperObject=new paper(200,450,40);
	groundObject=new ground(width/2,670,width,20);
	//Create a Ground
	
	dustbin1=createSprite(1198, 500, 200, 100);
	dustbin1.addImage(dustbinImage);
	dustbin1.scale=1.1;

	var render = Render.create({
	  element: document.body,
	  engine: engine,
	  options: {
	    width: 1200,
	    height: 700,
	    wireframes: false
	  }
	});

	Engine.run(engine);
	//Render.run(render);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
 

  dustbinObj.display();
  paperObject.display();
  groundObject.display();
  
  drawSprites();
  
  
 
}

function keyPressed() {
  	if (keyCode === UP_ARROW) {

    	Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:90,y:-85});
    
  	}
}





