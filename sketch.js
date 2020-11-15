var fixedRect , movingRect ;

function setup() {
  canvas = createCanvas(1200,400);

  fixedRect = createSprite(600, 200, 30, 80);
  fixedRect.shapeColor = "Green" ;

  movingRect = createSprite(300,100,50,30) ;
  movingRect.shapeColor = "Green" ;
}

function draw() {
  background(0);
  
  movingRect.x = mouseX ;
  movingRect.y = mouseY ;
  
 if(isTouching(movingRect , fixedRect)) {
  fixedRect.shapeColor = "Blue" ;
  movingRect.shapeColor = "Blue" ;
 }
 else{
     fixedRect.shapeColor = "Green" ;
      movingRect.shapeColor = "Green" ;
 }

  drawSprites();
}

