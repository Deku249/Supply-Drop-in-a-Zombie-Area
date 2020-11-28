var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var boxLeftSprite,boxLeftBody;
var boxRightSprite,boxRightBody;
var boxBottomSprite,boxBottomBody;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.3, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 610, width, 50 , {isStatic:true} );
    World.add(world, ground);
	 
	xpos1 = width/2-100
	ypos1 = height-110

	boxLeftSprite=createSprite(xpos1,ypos1,20,100)
    boxLeftSprite.shapeColor="red"

	boxLeftBody = Bodies.rectangle(xpos1,ypos1,20,100,{isStatic:true});
	World.add(world,boxLeftBody)

	xpos2 = width/2+100
	ypos2 = height-110

	boxRightSprite=createSprite(xpos2,ypos2,20,100)
	boxRightSprite.shapeColor="red"

	boxRightBody = Bodies.rectangle(xpos2,ypos2,20,100,{isStatic:true});
	World.add(world,boxRightBody)

	xpos3 = width/2
	ypos3 = height-50

	boxBottomSprite=createSprite(xpos3,ypos3,200,20)
	boxBottomSprite.shapeColor="red"

	boxBottomBody = Bodies.rectangle(xpos3,ypos3,200,20,{isStatic:true});
	World.add(world,boxBottomBody)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("cyan");

  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

  drawSprites();
 
}

function keyPressed() {
 if(keyCode === LEFT_ARROW)
 {
	helicopterSprite.x = helicopterSprite.x- 20
	
	translation = {x:-20,y:0}
	Matter.Body.translate(packageBody,translation)
 }

 if(keyCode === RIGHT_ARROW)
 {
	helicopterSprite.x = helicopterSprite.x+ 20
	
	translation = {x:+20,y:0}
	Matter.Body.translate(packageBody,translation)
 }
	
	
	
	
	
 if (keyCode === DOWN_ARROW) {
	
	Matter.Body.setStatic(packageBody, false);

  }
}



