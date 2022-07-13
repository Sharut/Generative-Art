// The Prime Spiral (aka Ulam Spiral)


const pal = ['#8E2D2C', '#BB6C28', '#E19E37', '#419094', '#A2D0BC', '#285D6A',]

let x, y;
let px, py;
let step = 1;
let state = 0;
let numSteps = 1;
let turnCounter = 1;
let scl = 15;
let totalSteps;

function isPrime(value) {
  if (value == 1) return false;
  for (let i = 2; i <= sqrt(value); i++) {
    if (value % i == 0) {
      return false;
    }
  }
  return true;
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  // set up spiral
  const cols = width / scl;
  const rows = height / scl;
  totalSteps = cols * rows;
  x = width / 2;
  y = height / 2;
  px = x;
  py = y;
  background(0);
}

function draw() {
  
  // If prime draw circle
  if (isPrime(step)) {
    currColor = random(pal)
    fill(currColor);
    stroke(currColor);
    circle(x, y, scl * 0.5);
  }
  
  // Connect current to previous with a line
  line(x, y, px, py);
  px = x;
  py = y;

  // Move according to state
  switch (state) {
    case 0:
      x += scl;
      break;
    case 1:
      y -= scl;
      break;
    case 2:
      x -= scl;
      break;
    case 3:
      y += scl;
      break;
  }
  
  if (step % numSteps == 0) {
    state = (state + 1) % 4;
    turnCounter++;
    if (turnCounter % 2 == 0) {
      numSteps++;
    }
  }
  step++;
  
  if (step > totalSteps || x > width || y > height) {
    noLoop();
  }

}

function keyTyped() {
  if (key === "s") {
    save("UlamSpiral.png");
  }
}
