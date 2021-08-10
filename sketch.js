
var path , pathImage;
var runner , runner_running ;
var wall1 , wall2 ;

function preload(){
  //pre-load images
   pathImage = loadImage("path.png");
   runner_running = loadAnimation("Runner-1.png","Runner-2.png");
}

function setup(){
  createCanvas(400,400);
 
  //create path
  path = createSprite(200,0);
  path.addImage(pathImage);
  path.scale=1.2
  path.velocityY=4

  //create runner
  runner = createSprite(200,350,50,50);
  runner.addAnimation("running" , runner_running);
  runner.scale=0.05

  //create walls
  wall1 =createSprite(35,200,10,400);
  wall1.visible= false ;
  wall2 = createSprite(370,200,10,400);
  wall2.visible= false ;

}

function draw() {
  background(180);
  //code to reset background
  if(path.y > 400){
     path.y = 40
  }
  
  //to move the runner 
  runner.x = mouseX;

  //runner collide to walls
  runner.collide(wall1);
  runner.collide(wall2);

drawSprites();

}