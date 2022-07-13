let my_colors = [ '#E8D7A8' , '#BB6C28', '#E19E37', '#419094',  '#285D6A', '#8E2D2C','#A2D0BC']

var angle = 30;
var slider;
var strokeThick = 13
var branchThinning =0.8
var lengthThinning = 0.74;
var sway = 0
var swaySpeed = 0.1
var maxBend = 5
var fps = 30


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);
  angleMode(DEGREES);
  stroke(255);
  translate(windowWidth/2, windowHeight*0.9);
  for(let i=0;i<my_colors.length;i++){
    push();
    stroke(my_colors[i]);
    branch1(windowHeight/6,strokeThick);
    pop();
    
  }
  noLoop();
}

function branch1(length,sThick) {
  strokeWeight(sThick)
  line(0, 0, sway, -length);
  translate(sway, -length);
  // swayTree();
  
  
  if (length > 8) {
    push();
    rotate(angle-random(0, 0.3));
    branch1(length * (lengthThinning + random(-0.06,0.08)),sThick *branchThinning);
    pop();
    push();
    rotate(-angle+random(0, 0.3));
    branch1(length * (lengthThinning + random(-0.06,0.08)),sThick * branchThinning);
    pop();
  }
  
  function swayTree(){
  sway += swaySpeed
    if(sway > maxBend || sway < -maxBend){
     swaySpeed = -swaySpeed; 
    }
  }

}