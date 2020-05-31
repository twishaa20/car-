var car;
var wall;
var speed;
var weight;
var deformation;

function setup() {
  createCanvas(800,400);
 car =  createSprite(400, 200, 50, 50);
 car.velocityX = random(-4,-8);
 wall =  createSprite(60,200,250,250);
 wall.shapeColor = color(122,0,12);

 speed = random(2,90);
 weight = random(400,1500);
 deformation = 0.5*weight*speed*speed/2500;
}

function draw() {
  background(255,255,255);  
  if(car.x - wall.x < car.width/2 + wall.width/2
    && wall.x - car.x < wall.width/2 + car.width/2){
       console.log(deformation);
    if(deformation < 1000){
      car.shapeColor = color(0,225,0);
    }
    else{
      car.shapeColor = color(230,230,0);
    }
    if(deformation > 180){
      car .shapeColor = color(255,0,0);
    }
    else{
    car.shapeColor = color(230,230,0);
    }
    }
    




  drawSprites();
}