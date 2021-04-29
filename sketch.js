
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var ground,bananaGroup,obstacleGroup

function preload(){
  
  
  player_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  monkey=createSprite(80,315,20,20)
  monkey.addAnimation("moving", monkey_running);
  monkey.scale=0.1
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
  ground=createSprite(400,350,900,10);
  ground.velocityX=-4
  ground.x=ground.width/2
  console.log(ground.x)
}



function setup() {
  createCanvas(windowWidth,windowHeight);
  sun=createSprite(width-50,100,10,10);
sun.addAnimation("sun", sunAnimation)
  sun.scale=0.1
  createSprite=background
  backgroundimage=loadImage("background.png")
  ground.visible=false;
  

  
}


function draw() {
if(keyDown("space")){
  monkey.velocityY=-10
  if(keyWentUp("space")){
    monkey.VelocityY=0.8
  }
}
  if(ObtaclesGroup.isTouching(player)){playerscale=0.2}
  background.reset;
  if(foodGroup.isTouching(monkey){score=score+1&&;foodGroup.visible=false}
  switch(score){
    case 10:player.scale=0.12;
      break;
    case 20: player.scale=0.14;
      break;
    case 30: player.scale=0.16;
      break;
    case 40:player.scale=0.16;
      break;
    default: break;
  }
  stroke("white");
  textSize(20);
  fill("white")
  text("Score:" +score, 500,50)
}






