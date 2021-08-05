var box;
function setup() {
  createCanvas(400,400);
  box= createSprite(200,200,20,20);
}

function draw() 
{
  background(30);


if(keyDown("left")){
box.x -=2;
}
if (keyDown("right")){
  box.x +=2;
}
if (keyIsDown(UP_ARROW)){
  box.y -=2;
}
if (keyIsDown(DOWN_ARROW)){
  box.y +=2;
}

  drawSprites();
  
}




