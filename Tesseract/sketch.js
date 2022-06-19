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
  lb = min(w,h)/6;
  lc = min(w,h)/9;
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
  tesseract(num, PI/3)
  
  
  
  // line((la+r)*cos(theta), (la+r)*sin(theta), (la+r)*cos(theta) - lb * sin(theta), (la+r)*sin(theta) + lb * cos(theta));
  
  theta += speed;
  
}

function tesseract(color_num, angle){
  stroke(my_colors[num]);
  x = r*cos(theta);
  y = r*sin(theta);
  x1 = (la+r)*cos(theta);
  y1 = (la+r)*sin(theta);
  x2 = x1 + lb * cos(-angle+2*0.1+theta);
  y2 = y1 + lb * sin(-angle+2*0.1+theta);
  x3 = x2 + lb * cos(-2*angle+2*0.2+theta);
  y3 = y2 + lb * sin(-2*angle+2*0.2+theta);
  x4 = x3 + lb * cos(-3*angle+2*0.3+theta);
  y4 = y3 + lb * sin(-3*angle+2*0.3+theta);
  x5 = x4 + lb * cos(-4*angle+2*0.4+theta);
  y5 = y4 + lb * sin(-4*angle+2*0.4+theta);
  x6 = x5 + lb * cos(-5*angle+2*0.5+theta);
  y6 = y5 + lb * sin(-5*angle+2*0.5+theta);
  
  line(x,y,x1,y1);
  line(x1,y1,x2,y2);
  line(x2,y2,x3,y3);
  line(x3,y3,x4,y4);
  line(x4,y4,x5,y5);
  line(x5,y5,x6,y6);
  
}

function keyTyped() {
  if (key === 's' || key === 'S') {
    saveCanvas('ShapeTiling1', 'png');
    print("saving image");
  }
  return false;
  }
