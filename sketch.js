var shooter,shooterImmg1
var shooterimg2
var shooterImg3
var background_img
var bg
function preload(){
shooterImg1=loadImage("assets/shooter_1.png");
shooterImg2=loadImage("assets/shooter_2.png");
shooterImg3=loadImage("assets/shooter_3.png");
background_img=loadImage("assets/bg.jpeg");
}
function setup(){
createCanvas (windowWidth,windowHeight);
bg=createSprite(displayWidth/2,displayHeight/2,20,20);
bg.addImage(background_img);
bg.scale=1.1;

shooter=createSprite(displayWidth-1000,displayHeight-350,50,50)
shooter.addImage(shooterImg2);
shooter.scale=.3
shooter.debug=true
shooter.setCollider("rectangle",0,0,300,300)
}
function draw(){
background(255);

if(keyDown("UP_ARROW")) {
shooter.y=shooter.y-10
}
if(keyDown("DOWN_ARROW")) {
  shooter.y=shooter.y+10
  }
  if(keyWentDown("space")) {
    shooter.addImage(shooterImg3);
    
    }
    else if(keyWentUp("space")) {
      shooter.addImage(shooterImg2);
    }
    drawSprites();
}