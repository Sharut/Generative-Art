let my_colors = ['#8E2D2C', '#BB6C28', '#E19E37', '#419094', '#A2D0BC', '#285D6A', '#E8D7A8' ]

function bubble(x, y, size, rotation) {
  noFill();
  num = int(random(0, 7));
  stroke(my_colors[num]);
  strokeWeight(5);
  
  push();
  translate(x, y);
  rotate(rotation);
  
  arc(0, 0, size, size, HALF_PI, 0);
  
  const half = size / 2;
  
  line(half, 0, half, half);
  line(0, half, half, half);
  
  pop();
}

/**
 * Rotating bubbles with gap
 */
function bubbles(x, y, size, rotation, offset) {
  const gap = (cos(offset) + 2) * 10;
  
  let i = 0;
  for (let radius = size; radius > 0; radius -= gap) {
    const rotationOffset = sin(offset * 2 + i * 0.1) * TWO_PI;
    bubble(x, y, radius, rotation + rotationOffset);
    i++;
  }
}

// Size of the bubbles
const size = 200;
const gap = 10;

// Animation offset
let offset = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  // background("#003344");
  background("#000");
  
  translate(windowWidth / 2, windowHeight / 2);
  
  const bOffset = gap + size / 2;

  // Symmetry is here!
  bubbles(-bOffset, -bOffset, size, 0, offset);
  bubbles(bOffset, -bOffset, size, HALF_PI, offset);
  bubbles(-bOffset, bOffset, size, -HALF_PI, offset);
  bubbles(bOffset, bOffset, size, PI, offset);
  
  offset += 0.01;
}
