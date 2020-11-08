var movingRect;
var fixedRect;

function setup() {
  createCanvas(800,400);
  fixedRect=createSprite(300,300,80,100);
  fixedRect.shapeColor="green";
  movingRect=createSprite(600, 300, 50, 50);
  movingRect.shapeColor="blue";
  movingRect.velocityX=-2;
  fixedRect.velocityX=2;
}

function draw() {
  background(255,255,255);  

  bounce(movingRect,fixedRect);
  
  
  
  drawSprites();
}
