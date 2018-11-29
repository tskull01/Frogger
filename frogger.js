var frog; 
//Calling the logs boats because log is a keyword
var boats; 
var river;
var attach = null; 
var safe; 
function setup() {
  createCanvas(900, 550);
  //Frog setup
  var img = loadImage('assets/frog.png'); 
    frog = createSprite(width/2, height-75,50,50); 
    frog.addImage(img); 
    frog.setCollider("circle",0,0,10);
//River setup
    river = createSprite(width/2,250,width, 350); 
    river.shapeColor = color(38,41,244);
    river.setCollider("circle",0,0,2);

    boats = new Group(); 
   var xc= constrain(width/2, 0, width);
   var yc = constrain(height-75, 40 ,430);
   safe = true;  
}

function draw() { 
  background(225);
  
  if(frameCount % 200 == 0){
    //Boat1
    boat = createSprite(width+ 30, 100, 100, 50);
    boat.shapeColor = color(222,125,2);
    boat.setCollider("rectangle",0,0,100,80); 
    boat.setVelocity(-4,0); 
    boats.add(boat); 
   
//Boat2
boat2 = createSprite(-30, 175, 100, 50);
    boat2.shapeColor = color(222,125,2); 
    boat2.setCollider("rectangle",0,0,100,80); 
    boat2.setVelocity(1.5,0); 
    boats.add(boat2); 
//Boat3 
boat3 = createSprite(width+10, 250, 100, 50);
    boat3.shapeColor = color(222,125,2);
    boat3.setCollider("rectangle",0,0,100,80);  
    boat3.setVelocity(-3,0); 
    boats.add(boat3); 
    //Boat4
    boat4 = createSprite(-40, 325, 100, 50);
    boat4.shapeColor = color(222,125,2); 
    boat4.setCollider("rectangle",0,0,100,80); 
    boat4.setVelocity(2,0); 
    boats.add(boat4); 
    //Boat 5 
    boat5 = createSprite(width, 400, 100, 50);
    boat5.shapeColor = color(222,125,2); 
    boat5.setCollider("rectangle",0,20,100,150); 
    boat5.setVelocity(-1,0); 
    boats.add(boat5); 
    for(var i = 0; i < boats.length; i++){
    if(boats[i].position.x + 50 < 0){
      boats[i].remove(); 
    }
  }
  }
  //Checking if frog overlaps boat
  if(frog.position.y < height -76){
  for(var i = 0; i < boats.length; i++){ 
  if(boats[i].overlap(frog)){
  safe = true; 
  frog.velocity.x = boats[i].velocity.x;
  }
}
if(!frog.overlap(boats) && frog.position.y > 100){
  safe = false; 
}
  }
  if(safe == false){
    gameOver(); 
  }
//No velocity in safe zone
if(frog.position.y == height - 75 || frog.position.y == 25){
  frog.velocity.x = 0; 
}
//Constrain wasn't working so this keeps the frog on screen
  if(frog.position.x < 0){
    frog.position.x = width;
  }else if(frog.position.x > width){
    frog.position.x = 0; 
  }else if(frog.position.y > height){
    frog.position.y = height - 75; 
  }
  push(); 
 drawSprite(river); 
 drawSprites(boats); 
 drawSprite(frog); 

 if(frog.position.y < 0){
  frog.position.y = height - 75;  
 var winningtext =  text("Winner", width/2, 30, 100,100);
  winningtext.textSize(200);
 }
}
function keyPressed(){
  if(keyIsPressed == true){
    if(keyCode === UP_ARROW){
    frog.position.y = frog.position.y - 75;  
    }
    else if(keyCode === DOWN_ARROW){
      frog.position.y = frog.position.y + 75;   
    }else if(keyCode === RIGHT_ARROW){
      frog.position.x = frog.position.x + 50; 
      rotate(45); 
    }else if(keyCode === LEFT_ARROW){
      frog.position.x = frog.position.x - 50; 
    }
  }
  }
  function gameOver(){
    frog.position.y = height-75; 
    frog.position.x = width /2; 
  }