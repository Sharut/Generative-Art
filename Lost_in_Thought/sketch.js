let my_colors = ["#04a3bd", "#f0be3d", "#931e18", "#da7901", "#247d3f", "#20235b"]

var centre = 0;
var radius = 150;
var iters = 0;
var human_angle=0;
var tilt=225;
var human_width=0;
var human_length = 0;
  
function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  iters = max(windowWidth, windowHeight)
  human_length = radius* sqrt(2);
  human_width = radius/sqrt(2);
}

function draw() {
  background(0);
  
  noFill();
  strokeWeight(1);
  var x=0;
  push();
  translate(windowWidth*0.7, windowHeight*0.6);
  for(let i=0;i<iters;i++){
    num = int(random(0, my_colors.length));
    stroke(my_colors[num]);
    ellipse(0-x,0, 2*radius + 4*x,2*radius + 4*x)
    x+=0.4;
  }
  // pop();
  translate(-117,-85)
  man();
  noLoop();
  
}

function man(){
  fill('red');
  noStroke();
  beginShape();
    vertex(-14.28,148.82)
    vertex(29.03, 112.42)
    vertex(77.87,171.40)
    vertex(97.68,172.38)
    vertex(98.14,129.48)
    vertex(143.75,107)
    vertex(149,83)
    vertex(167,115)
    vertex(117,143)
    vertex(117,157)
    vertex(137,149)
    vertex(178,201)
    vertex(201,205)
    vertex(168,225)
    vertex(134,179)
    vertex(76,225)
    vertex(14,152)
    vertex(-14.28,148.82)  
  endShape();
  square(29.03, 73.72,38)
}