const pal = ['#8E2D2C', '#BB6C28', '#E19E37', '#419094', '#A2D0BC', '#285D6A',]


let a;
let r = 180;
let d =150;
const e = 0.001
function setup() {
  createCanvas(800, 800);
  rectMode(CENTER);
  background(0);
  noStroke()
  a = PI
}

function draw() {
  let x = cos(a) * r - (sin(a/2) * r) / 2 + 400;
  let y = sin(a) * r - (cos(a/2) * r) / 2 + 400;
  let z = cos(a) * r - (cos(a) * r) / 2;
  n =  noise(x*e, y*e, z*e)
  fill(n*200, 30, 255,80)
  fill(200, n*51, 73)
  strokeWeight(4)
  stroke(255, 90)
  rect(x, y, n*d, n*d, 6, 24, 24, 24);

  a += TAU / 300;
  
  a = a % (TAU * 2)
}

function mousePressed() {
  save("loops.jpg");
}
