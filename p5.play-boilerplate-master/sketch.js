var brush
var sleep
var gym
var eat
var drink
var move
var bg
var astronaut


function preload(){
bg=loadImage("iss.png");
sleep=loadAnimation("sleep.png");
brush=loadAnimation("brush.png");
gym=loadAnimation("gym1.png", "gym2.png", "gym11.png", "gym12.png");
eat=loadAnimation("eat1.png", "eat2.png")
drink=loadAnimation("drink1.png", "drink2.png");
move=loadAnimation("move.png");
bath=loadAnimation("bath1.png","bath2.png");
}



function setup() {
  createCanvas(800,400);
  astronaut = createSprite(400, 200, 1, 1);
  astronaut.scale=0.1
  astronaut.addAnimation("sleeping", sleep)
  
}

function draw() {
  background(bg);  
  if(keyDown("UP_ARROW")){
    astronaut.addAnimation("brushing", brush);
    astronaut.changeAnimation("brushing");
    astronaut.y=World.mouseY;
    astronaut.x=World.mouseX;
    astronaut.velocityX=0;
    astronaut.velocityY=0;
    
  }
if(keyDown("DOWN_ARROW")){
  astronaut.addAnimation("gymming", gym);
  astronaut.changeAnimation("gymming");
  astronaut.y=World.mouseY;
  astronaut.x=World.mouseX;
  astronaut.velocityX=0;
  astronaut.velocityY=0;
  
}
if(keyDown("RIGHT_ARROW")){
  astronaut.addAnimation("bathing", bath);
  astronaut.changeAnimation("bathing");
  astronaut.y=World.mouseY;
  astronaut.x=World.mouseX;
  astronaut.velocityX=0;
  astronaut.velocityY=0;
  
}
if(keyDown("LEFT_ARROW")){
  astronaut.addAnimation("eating", eat);
  astronaut.changeAnimation("eating");
  astronaut.y=World.mouseY;
  astronaut.x=World.mouseX;
  astronaut.velocityX=0;
  astronaut.velocityY=0;
  
}
if(keyDown("m")){
  astronaut.addAnimation("moving", move);
  astronaut.changeAnimation("moving");
  astronaut.y=World.mouseY;
  astronaut.x=World.mouseX;
  astronaut.velocityX=0;
  astronaut.velocityY=0;
  
}
drawSprites();
}

