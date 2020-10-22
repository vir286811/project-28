
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	boyImage=loadImage("Plucking mangoes/boy.png")
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	stone1=new Stone(50,600,20,20);
	boy=addImage("Plucking mangoes/boy.png");
	tree1=new Tree(600,650,20,100)
	mango1=new Mango(600,660,10)
	mango2=new Mango(610,650,10)
	mango3=new Mango(605,665,10)
	mango4=new Mango(620,670,10)
	mango5=new Mango(630,680,10)


	Engine.run(engine);
  
}
function detectCollision(lmango,lstone)
{
	mangoBodyPosition=lmango.body.position;
	stoneBodyPosition=lstone.body.position;

	var distance= dist(mangoBodyPosition.x,mangoBodyPosition.y,stoneBodyPosition.x,stoneBodyPosition.y)
if(distance<=lmango.r+lstone.x){
	Matter.Body.setStatic(lmango.body,false)
}
}
function keyPressed()
{
	if(keyCode===32){
		Matter.Body.setPosition(stone1.body,{x:50,y:600})
	}
}
function draw() {
  rectMode(CENTER);
  background(0);
  boy.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  tree.display();
  stone1.display(); 
  detectCollision(stone1,mango1)
  detectCollision(stone1,mango2)
  detectCollision(stone1,mango3)
  detectCollision(stone1,mango4)
  detectCollision(stone1,mango5)

  drawSprites();
 
}



