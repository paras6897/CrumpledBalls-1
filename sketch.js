
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

    //creating Box
	//bottom=createSprite(600,650,200,20);
	//bottom.shapeColor="white";
	//left=createSprite(500,610,20,100);
	//left.shapeColor="white";
	//right=createSprite(700,610,20,100);
	//right.shapeColor="white";

	

	engine = Engine.create();
	world = engine.world;

	
	paperObject=new Paper(200,450);
	groundObject=new Ground(width/2,670,width,20);

	box1 = new Dustbin(600, 650, 200, 20);
    box2 = new Dustbin(500, 610, 20, 100);
	box3 = new Dustbin(700, 610, 20, 100);

	Engine.run(engine);
  
  

}


function draw() {

  Engine.update(engine);
  ellipseMode(RADIUS);
  background(0);
  
  paperObject.display();
  groundObject.display();
  box1.display();
  box2.display();
  box3.display();
  //if(keyDown("up")){
	//  Matter.Body.applyForce(paperObject.body, true);
//}

  drawSprites();

  

  }
  function keyPressed(){
	if(keyCode === UP_ARROW) {
	  Matter.Body.applyForce(paperObject.body, paperObject.body.position, {x:12, y: -12})
	}
  }
  