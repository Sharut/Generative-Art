var radSpeed=20;
var numCircles=20;
var radius=80;
var count=0;
function setup() {
  createCanvas(windowWidth, windowHeight);
  pal = ['#8E2D2C', '#BB6C28', '#E19E37', '#419094', '#A2D0BC', '#285D6A',]
//   translate(width/2, height/2);
  
}

function draw() {
  background(0);
  strokeWeight(3)
  noFill()
  var startRadius = radius;
  translate(width/2, height/2);
  for(let i=0;i<numCircles;i++){
    stroke(pal[i%pal.length])
    circle(0,0,radius)
    radius+=radSpeed;
  }
  fill('black')
  noStroke();
  rect(startRadius/2,0,(startRadius+radSpeed*numCircles)/2, height/2)
  for(let i=0;i<numCircles;i++){
    strokeWeight(3)
    stroke(pal[i%pal.length])
    noFill();
    line((startRadius + i*radSpeed)/2, 0,(startRadius + i*radSpeed)/2, height/2)
  }
  
  fill('black')
  noStroke();
  rect(-startRadius/2,0,-(startRadius+radSpeed*numCircles)/2, -height/2)
  for(let i=0;i<numCircles;i++){
    strokeWeight(3)
    stroke(pal[i%pal.length])
    noFill();
    line(-(startRadius + i*radSpeed)/2, 0,-(startRadius + i*radSpeed)/2, -height/2)
  }
  
  noLoop(); 
}


function keyTyped() {
  if (key === "s") {
    save("AbstractCircle.png");
  }
}

