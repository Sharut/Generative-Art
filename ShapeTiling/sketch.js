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
    stroke('white');
    strokeWeight(2);
    num = random(0.5, 1);
    start = 15;
    p =  x + random(15, 30);
    q = y + start;
    // triangle(p, q, p, q+30, p+30, q+30);
    // ellipse(x + 15*num, y + 15*num, 10,10);
    ellipse(p,q, 11,11);
    line(p,q, p,q+25);
    // line(p,q+20, p-15,q+9);
    // line(p,q+20, p+15,q+9);
    
    line(p,q+10, p-10,q+20);
    line(p,q+10, p+10,q+20);
    
    line(p,q+25, p-10,q+50-start);
    line(p,q+25, p+10,q+50-start);
    
    strokeWeight(0.5);
    num = random(0.3, 0.7);
    line(x, y + 50*num, x+50,y + 50*num);
    gap1 = random(0.05, min(num, 1-num));
    line(x, y + 50*(num+gap1), x+50,y + 50*(num+gap1));
    
    vert = random(0.3, 0.7);
    line(x + 50*vert , y , x + 50*vert ,y + 50);
    line(x + 50*(vert+gap1) , y , x + 50*(vert+gap1) ,y + 50);
    
    
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
