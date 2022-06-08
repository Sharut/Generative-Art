// From: http://50print.org/

var x = 0;
var y = 0;
let my_colors = ['#8E2D2C', '#BB6C28', '#E19E37', '#419094', '#A2D0BC', '#285D6A', '#E8D7A8' ]

function setup() {
  let c = createCanvas(windowWidth, windowHeight);
  background(255);
  fill(0)
}

function draw() {
  fill(0);
  noStroke();
  if (random(1) > 0.5) { 
    num = int(random(0, 7));
    fill(my_colors[num]);
    triangle(x, y, x, y+50,x+50, y+50);
    num = int(random(0, 7));
    fill(my_colors[num]);
    triangle(x, y, x+50, y,x+50, y+50);
    
  } 
  else {
    num = int(random(0, 7));
    fill(my_colors[num]);
    rect(x, y, 50, 50);
    fill('white')
    noStroke();
    num = random(0.5, 1);
    ellipse(x + 15*num, y + 15*num, 10,10);
  }

  x += 50;
  if (x > width) {
    x = 0;
    y += 50;
  }

  if (y > height) {
    noLoop();
  }
}

function keyTyped() {
  if (key === 's' || key === 'S') {
    saveCanvas('ShapeTiling1', 'png');
    print("saving image");
  }
  return false;
  }
