var thetaSpeed=0;
var numCircles=12;
var radius=100;
var count=0;
function setup() {
  createCanvas(windowWidth, windowHeight);
  pal = ['#8E2D2C', '#BB6C28', '#E19E37', '#419094', '#A2D0BC', '#285D6A',]
//   translate(width/2, height/2);
  thetaSpeed = PI/50;
}

function draw() {
  background(0);
  strokeWeight(3)
  translate(width/2, height/20);
  for(let i=0;i<numCircles;i++){
    stroke(pal[i%pal.length])
    translate(0, radius);
    if(i%3==0){horizontalCircle(radius);count+=2}
    else if(i%3==1){rightCircle(radius);count+=1;}
    else if(i%3==2){leftCircle(radius);count+=1}
    if(radius*count>19*height/20){translate(0,-1*radius*(i+1));break;}
  }
  noLoop();
  stroke(255)
  strokeWeight(5)
  line(0,0,0,19*height/20)
  
}

function horizontalCircle(radius){
  // Upper Half
  for(let theta = 0;theta >= -PI/2; theta-=thetaSpeed){
    line(radius*cos(theta), radius*sin(theta), radius*cos(-PI-theta), radius*sin(-PI-theta))
  }
  // Lower Half
  for(let theta = 0;theta <= PI/2; theta+=thetaSpeed){
    line(radius*cos(theta), radius*sin(theta), radius*cos(PI-theta), radius*sin(PI-theta))
  }
}

function verticalCircle(radius){
  // Right Half
  for(let theta = 0;theta >= -PI/2; theta-=thetaSpeed){
    line(radius*cos(theta), radius*sin(theta), radius*cos(-theta), radius*sin(-theta))
  }
  // Left Half
  for(let theta = PI/2;theta <= PI; theta+=thetaSpeed){
    line(radius*cos(theta), radius*sin(theta), radius*cos(2*PI+theta), radius*sin(2*PI-theta))
  }
}

function rightCircle(radius){
  // Right Half
  for(let theta = 0;theta >= -PI/2; theta-=thetaSpeed){
    line(radius*cos(theta), radius*sin(theta), radius*cos(-theta), radius*sin(-theta))
  }
}

function leftCircle(radius){
  // Left Half
  for(let theta = PI/2;theta <= PI; theta+=thetaSpeed){
    line(radius*cos(theta), radius*sin(theta), radius*cos(2*PI+theta), radius*sin(2*PI-theta))
  }
}


function keyTyped() {
  if (key === "s") {
    save("AbstractTile.png");
  }
}
