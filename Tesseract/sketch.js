// From: http://30print.org/

let w,h;
var theta = 0;
let r = 50;
let la = 100;
let lb = 150;
let lc = 600;
let speed = 1000;
let my_colors = ['#8E2D2C', '#BB6C28', '#E19E37', '#419094', '#A2D0BC', '#285D6A', '#E8D7A8' ]

function setup() {
  let c = createCanvas(windowWidth, windowHeight);
  w = windowWidth;
  h = windowHeight;
  r=50;
  la = min(w,h)/6;
  lb = min(w,h)/3;
  lc = min(w,h);
  background(0);
  fill(0);
  
}

function draw() {
  
  translate(w/2,h/2);
  fill(0);
  fill('white');
  noStroke();
  ellipse(0, 0, 2*r);
  num = int(random(0, 7));
  tesseract(num, PI/2)
  
  
  
  // line((la+r)*cos(theta), (la+r)*sin(theta), (la+r)*cos(theta) - lb * sin(theta), (la+r)*sin(theta) + lb * cos(theta));
  
  theta += speed;
  
}

function tesseract(color_num, angle){
  stroke(my_colors[num]);
  x = r*cos(theta);
  y = r*sin(theta);
  x1 = (la+r)*cos(theta);
  y1 = (la+r)*sin(theta);
  x2 = x1 + lb * cos(-angle+0.1+theta);
  y2 = y1 + lb * sin(-angle+0.1+theta);
  x3 = x2 + lc * cos(-2*angle+0.2+theta);
  y3 = y2 + lc * sin(-2*angle+0.2+theta);
  
  line(x,y,x1,y1);
  line(x1,y1,x2,y2);
  line(x2,y2,x3,y3);
  
}

function keyTyped() {
  if (key === 's' || key === 'S') {
    saveCanvas('ShapeTiling1', 'png');
    print("saving image");
  }
  return false;
  }
