// Daniel Shiffman
// http://codingtra.in
// https://youtu.be/IKB1hWWedMk
// https://thecodingtrain.com/CodingChallenges/011-perlinnoiseterrain.html

// Edited by SacrificeProductions

var cols, rows;
var scl = 20;
var w;
var h;

var flying = 0;

var terrain = [];
var rcolors = [];
var gcolors = [];
var bcolors = [];
var colors = [];

var mymax = -10000;
var mymin = 10000;
let from;
let to;
// color(238, 134, 50);
function setup() {
  // colorMode(HSB,100)
  colorMode(RGB);
       
  createCanvas(windowWidth, windowHeight, WEBGL);
  w = windowWidth*1.6;
  h = windowHeight*1.6;
  cols = w / scl;
  rows = h / scl;

  for (var x = 0; x < cols; x++) {
    terrain[x] = []; 
    rcolors[x] = []; gcolors[x] = []; bcolors[x] = []; colors[x] = [];
    for (var y = 0; y < rows; y++) {
      terrain[x][y] = 0; //specify a default value for now
      colors[x][y] = 0;
      rcolors[x][y] = 0; gcolors[x][y] = 0; bcolors[x][y] = 0;
    }
  }
}

function draw() {
  
  from = color(212, 161 , 211); //# light
  to = color(115, 68, 112);       //# dark
  flying -= 0.1;
  var yoff = flying;
  for (var y = 0; y < rows; y++) {
    var xoff = 0;
    for (var x = 0; x < cols; x++) {
      terrain[x][y] = map(noise(xoff, yoff), 0, 1, -100, 150); 
      if (terrain[x][y] > mymax){
        mymax = terrain[x][y];
      }
      if (terrain[x][y] < mymin){
        mymin = terrain[x][y];
      }
      rcolors[x][y] = map(noise(xoff, yoff+10), 0, 1, 0, 255);
      gcolors[x][y] = map(noise(xoff, yoff+15), 0, 1, 0, 255);
      bcolors[x][y] = map(noise(xoff, yoff+25), 0, 1, 0, 255); 
      xoff += 0.2;
    }
    yoff += 0.2;
  }
  
  for (var y = 0; y < rows; y++) {
    for (var x = 0; x < cols; x++) {
      colors[x][y] = lerpColor(from, to, terrain[x][y]/ (mymax-mymin));
    }
  }

  background(0);
  translate(0,50);
  rotateX(PI / 3);
  strokeWeight(0.5);
  stroke(115, 68, 112);
  translate(-w / 2, -h / 2);
  for (var y = 0; y < rows - 1; y++) {
    beginShape(TRIANGLE_STRIP);
    for (var x = 0; x < cols; x++) {
      // fill(color(x*y/100,100,100))
      fill(colors[x][y], 1);
      vertex(x * scl, y * scl, terrain[x][y]);
      vertex(x * scl, (y + 1) * scl, terrain[x][y + 1]);
    }
    endShape();
  }
}