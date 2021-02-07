var movingRect,fixedRect;
var car,wall;

function setup()
{

 createCanvas(1200,800);
  fixedRect = createSprite(600,400,50,80);
  fixedRect.shapeColor = "blue";
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "blue";
  car = createSprite(200,200,30,30);
  car.shapeColor = "pink";
  car.velocityX = 4
  wall = createSprite(1000,200,30,80);
  wall.shapeColor = "yellow";


}

function draw()
{

background(0);

console.log(movingRect.x - fixedRect.x);
movingRect.x = World.mouseX;
movingRect.y = World.mouseY;

if(isTouching(movingRect,wall))

{

  textSize(30);
  text("As it is touching" , 300,400);

}

collide(car,wall);

drawSprites();

}




