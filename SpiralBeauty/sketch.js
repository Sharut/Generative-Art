var w=6;
var length = 100;
var angle=3;
function setup() {
  createCanvas(windowWidth, windowHeight);
  // pal = ["#04a3bd", "#f0be3d", "#931e18", "#da7901", "#247d3f", "#20235b"]//Lakota
  pal = ['#8E2D2C', '#BB6C28', '#E19E37', '#419094', '#A2D0BC', '#285D6A',]
}

function draw() {
  background(0);
  angleMode(DEGREES)
  stroke(255);
  noFill();
  translate(width/2, height/2);
  length = max(windowWidth, windowHeight)*2;
  spiral(length);
}

function spiral(l){
  translate(-l/2, -l/2);
  rect(0,0,l,l);
  translate(l/2, l/2);
  stroke(pal[int(l%6)]);
  // fill(pal[int(l%6)]);
  // w *= 0.98;
  if(l>15){
    push();
    strokeWeight(w);
    rotate(angle)
    spiral(l*0.98)
    pop();
  }
  
}

function keyTyped() {
  if (key === "s") {
    save("myCanvas"+str(random(1000))+".png");
  }
}