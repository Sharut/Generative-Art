let radius = 300;
let counter = 0;
let a, b, c, d, e, f, g;
let coss, sinn;



function setup() {
  colorMode(RGB, 255, 255, 255, 1);
  background(39, 65, 66, 1);
  let cnv = createCanvas(windowWidth, windowHeight);
  // put setup code here
  stroke(140, 140, 217,1); 
  strokeWeight(1);
  noFill();
  //fill(24, 202, 230, 1)
  angleMode(DEGREES)
  coss = cos(60) * radius;
  sinn = sin(60) * radius;
  a = createVector(0, 0);
  b = createVector(sinn, coss);
  c = createVector(0, radius);
  d = createVector(-sinn, coss);
  e = createVector(-sinn, -coss);
  f = createVector(0, -radius);
  g = createVector(sinn, -coss);
}


function draw() {
  background(25, 25, 77, 1);
  counter += 0.8;

  level = 50
  numruns = int(level - level*2*radius/windowWidth);
  for (let i = 0; i < numruns; i++) {
    push()
    translate(radius + map(cos(counter), 1,-1,0,1)*i*(windowWidth/level), windowHeight / 2 );
    rotate(log(counter)*i*9)
    //a.x += 5*sin(counter*0.1)
    //side A
    beginShape();
    fill(140, 140, 217, 0.1)
    vertex(a.x, a.y);
    vertex(b.x, b.y);
    vertex(c.x, c.y);
    vertex(d.x, d.y);
    endShape(CLOSE);
    //side B
    beginShape();
    fill(140, 140, 217, 0.05)
    vertex(d.x, d.y);
    vertex(e.x, e.y);
    vertex(f.x, f.y);
    vertex(a.x, a.y);
    endShape(CLOSE);

    //side C
    beginShape();
    fill(140, 140, 217, 0.05)
    vertex(a.x, a.y);
    vertex(f.x, f.y);
    vertex(g.x, g.y);
    vertex(b.x, b.y);
    endShape(CLOSE);

    // put drawing code here
    pop()
  }

}