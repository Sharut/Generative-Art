var r= 350;
var minRadius = 10;
var maxIters = 10
var gap = 10;
var weight = 3;
var angleSpeed = 0.5;
var xcircleGap = 2*(minRadius + gap*maxIters)+20;
var ycircleGap =  gap*maxIters-30;
var waterx=-r;
var watery= r*0.15;
var counter=0;
var myscale = 2;


// Sky Parameters
theta = 0;
theta_speed = 3;
rad_speed = 10;
rad = r;
length = 117;
let my_colors = []
let acomb = []
let bcomb = []
let ccomb = []
let dcomb = []
let ecomb = []
var skyRad=0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  pal = ['#8E2D2C', '#BB6C28', '#E19E37', '#419094', '#A2D0BC', '#285D6A']
  water_pal = ['#A2D0BC', '#419094', '#285D6A'];
  sky_pal= ['#8E2D2C','#BB6C28', '#E19E37','#E8D7A8'];
  sky_pal= [ '#E8D7A8','#E19E37','#BB6C28','#8E2D2C'];
  my_colors = ['#8E2D2C', '#BB6C28', '#E19E37', '#419094', '#A2D0BC', '#285D6A',]
  acomb = [color('#8E2D2C'),color('#BB6C28'), color('#E19E37'),color('#E8D7A8')];
  bcomb = [color('#8E2D2C'), color('#BB6C28'), color('#E19E37')];
  ccomb = [color('#8E2D2C'), color('#BB6C28')];
  dcomb = [color('#8E2D2C')];
  ecomb = [color('#A2D0BC'),color('#285D6A')];
  angleMode(DEGREES);

  translate(width/2, height/2);
  // fill('#D6A14C')
  fill('black')
  circle(0,0,2*r)
  
  
  var iters = 40;
  var ncols = iters/sky_pal.length;
  var skyGap = 2*r/iters
  var skyR = 20;
  for(let j=0;j<iters;j++){
    noFill()
    stroke(sky_pal[int(j/ncols)]);
    strokeWeight(5)
    circle(0,0,skyR);
    skyR +=skyGap
    
  }
  translate(-78*myscale,-139*myscale)
  whale();
  
}

function draw() {
  translate(width/2, height/2);
  // ellipse(0,0,2*r,2*r);
  wave(waterx,watery)
  // noLoop();
  waterx+=xcircleGap
  if(waterx>width/2){
    watery+=ycircleGap;
    counter+=1
    if(counter%2==1){waterx = -r + xcircleGap/2}
    else{waterx=-r}
  }
  if(watery>height/2){
    noLoop()
  }
  // wave(random(-width,width), random(-height,height))
  // noLoop();
}

function whale(){
  fill('black')
  stroke('black')
  beginShape()
  vertex(83*myscale,158*myscale)
  bezierVertex(84*myscale,147*myscale,79*myscale,137*myscale,74*myscale,127*myscale)
  bezierVertex(67*myscale,118*myscale,54*myscale,118*myscale,45*myscale,111*myscale)
  bezierVertex(38*myscale,104*myscale,34*myscale,92*myscale,29*myscale,86*myscale)
  bezierVertex(36*myscale,89*myscale,37*myscale,89*myscale,42*myscale,89*myscale)
  bezierVertex(37*myscale,89*myscale, 55*myscale, 87*myscale, 60*myscale,89*myscale)
  bezierVertex(67*myscale,91*myscale,72*myscale,103*myscale,77*myscale,102*myscale)
  bezierVertex(82*myscale,100*myscale,83*myscale,92*myscale,88*myscale,88*myscale)
  bezierVertex(94*myscale,84*myscale,103*myscale,83*myscale,110*myscale,80*myscale)
  bezierVertex(114*myscale,78*myscale,122*myscale,74*myscale,123*myscale,73*myscale)
  bezierVertex(122*myscale,74*myscale,116*myscale,95*myscale,109*myscale,105*myscale)
  bezierVertex(105*myscale,112*myscale,94*myscale,115*myscale,92*myscale,123*myscale)
  bezierVertex(88*myscale,134*myscale,94*myscale,148*myscale,98*myscale, 97*myscale, 158*myscale)
  bezierVertex(92*myscale,156*myscale,88*myscale,158*myscale,83*myscale,158*myscale)
  endShape()
}

function wave(x,y){
  translate(x,y)
  noStroke();
  fill('black');
  circle(0,0,2*(minRadius + gap*maxIters));
  noFill();
  strokeWeight(weight);
  var nCols = maxIters/water_pal.length;
  var waveRad = minRadius
  for(let i=0;i<maxIters;i++){
    stroke(water_pal[int(i/nCols)]);
    // circle(0,0,waveRad)
    distortedCircle(x,y,waveRad);
    waveRad+=gap;
    // break;
  }
  translate(-x,-y)
}


function distortedCircle(x,y,circRad){
  // beginShape()
  // curveVertex(circRad, 0)
  for(let angle=0;angle<360;angle+=angleSpeed){
    localx = x+circRad*cos(angle)
    localy = y+circRad*sin(angle)
    // fill('white')
    // circle(-x,-y,2*r)
    // noFill()
    if((localx)*(localx)+(localy)*(localy) - r*r>=0){
      continue;
    }
    // print(localx,localy, angle);
    circle((circRad+random(-circRad/100,circRad/100))*cos(angle), circRad*sin(angle), weight)
  }  
}


