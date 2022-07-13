let inc = 0.1;
let scl = 45;
let cols, rows;
let fr;
let xoff, yoff, zoff
let particles = [];
let terrain = [];
let flying = 0;

function setup() {
  createCanvas(windowWidth,windowHeight);
  cols = windowWidth / scl;
  rows = windowHeight / scl;
  fr = createP("");
  yoff = 0;
  for (let i = 0; i < 100; i++) {
    // particles[i] = new Particle();
  }
 
}

function draw() {
  background(0)
  yoff = flying;
  flying -= 0.03

  for (let i = 0; i < rows; i++) {
    terrain[i] = [];
    xoff = 0;
    for (let j = 0; j < cols; j++) {
      terrain[i][j] = noise(xoff, yoff);
      xoff += 0.1;
    }
    yoff -= 0.1
  }
  zoff += 0.1
  
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      let r = noise(xoff, yoff, zoff) * TWO_PI
      let v = p5.Vector.fromAngle(terrain[y][x] * TWO_PI, 10);
      fill(255 * noise(xoff+5, yoff+5), 255 * noise(xoff+15, yoff+15), 255 * noise(xoff+25, yoff+25));
      noStroke();  
      push()
      stroke(255 * noise(xoff+5, yoff+5), 255 * noise(xoff+15, yoff+15), 255 * noise(xoff+25, yoff+25));
      strokeWeight(2* noise(xoff+35, yoff+35))
      translate(x * scl, y * scl);
      rotate(v.heading());
      line(-scl, -scl, scl, scl)
      bezier(-scl/2, -scl/2, scl/2, scl/2, -scl/2, scl/2, scl/2, -scl/2)
      circle(scl,scl,6);
      pop();
    }  
  }
 
  fr.html(floor(frameRate()));
  for (let i = 0; i < 100; i++) {
    // particles[i].show();
    // particles[i].update();
  }


  //noLoop();
}