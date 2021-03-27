var car;
var wall;
var speed,weight;
var deformation;
function setup() 
{
  createCanvas(1200,800);
  

  car=createSprite(50,400,50,50);

  wall=createSprite(1100,400,30,height/2);

  speed=Math.round(random(55,90));
  weight=Math.round(random(400,1500));
}

function draw() 
{
  background("black");  
  car.velocityX=speed;
  deformation=(0.5*weight*speed*speed)/22500;
  if(wall.isTouching(car))
  {
   car.velocityX=0;
    
    if(deformation<=100)
    {
      car.shapeColor="green";
    }
    if(deformation>100 && deformation<=180)
    {
      car.shapeColor="yellow";
    } 
    if(deformation>=180)
    {
      car.shapeColor="red";
    }
  
  }

  
  
  drawSprites();
}