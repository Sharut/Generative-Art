// From: http://30print.org/

let w,h;
let rad = 0;
length = 117;
r=0;
max_theta = 360;
theta = 0;
theta_speed = 3;
rad_speed = 10;
let my_colors = []
let acomb = []
let bcomb = []
let ccomb = []
let dcomb = []
let ecomb = []

function setup() {
  let c = createCanvas(windowWidth, windowHeight);
  w = windowWidth;
  h = windowHeight;
  rad = min(w,h)*0.40;
  background(0);
  fill(0);
  my_colors = ['#8E2D2C', '#BB6C28', '#E19E37', '#419094', '#A2D0BC', '#285D6A',]
  acomb = [color('#8E2D2C'),color('#BB6C28'), color('#E19E37'),color('#E8D7A8')];
  bcomb = [color('#8E2D2C'), color('#BB6C28'), color('#E19E37')];
  ccomb = [color('#8E2D2C'), color('#BB6C28')];
  dcomb = [color('#8E2D2C')];
  ecomb = [color('#A2D0BC'),color('#285D6A')];
  
  angleMode(DEGREES);
  translate(w/2,h/2);
  fill(0);
  
  
  paintwater(); 
  
}
function draw() {
  angleMode(DEGREES);
  translate(w/2,h/2);
  fill(0);
  translate(0,-length*0.3)
  strokeWeight(2)
  paintsky(); 
  r+=rad_speed; 
  if(r>rad){
    r=0;
    noLoop();
  }
  translate(0,-120)
  makeboat();
  
  
}

function makeboat(){
  translate(0,+length*0.3)
  stroke('black')
  fill('black')
  beginShape();
  vertex(83.317478,86.871304);
  bezierVertex(131.6362, 112.32678,162.39,155.26424, 168.60931, 182.82461)
  bezierVertex(139,173,
              125,174,
              101,206 )
  bezierVertex(108,162,
               99,130,
               83.317478,86.871304);       
  endShape();
  
  beginShape();
  vertex(75.420084,92.399476) 
  bezierVertex(89.877277,128.35277,106.43042,165.75164,93.189216,208.886);
  bezierVertex(81.784013,200.90799, 62.707456,198.75491, 48.174086,223.1013);       bezierVertex(72.391506,180.19208, 75.041434,136.34516, 75.420084,92.399476);
  endShape();

  beginShape();
    stroke('black')
    fill('black')
    vertex(37,238);
    vertex(186,186)
    vertex(185,193);
    vertex(185,193);
    vertex(87,225)
    vertex(37,238);
  endShape();
  beginShape();
    vertex(51,244)
    vertex(190,200)
    vertex(185,209)
    vertex(102,234)
    vertex(51,244)
  endShape();
  beginShape();
    vertex(71,249)
    vertex(185, 218)
    vertex(183,226)
    vertex(120,243)
    vertex(71,249)
  endShape();
}



function paintwater(){
  for(p=-rad;p<rad;p+=rad_speed){
    for(q=0;q<rad;q+=rad_speed){
      let inter = map(q, 0, rad*0.7, 0, 1);
      let c = lerpColor(ecomb[0], ecomb[1], inter);
      stroke(c); 
      if(p*p+q*q< rad*rad){knit(p+random(-5,5),q+random(-5,5));}
    }
  }
  
//   for(i=0;i<90;i+=theta_speed){
//     let inter = map(i, 0, 90, 0, 1);
//     let c = lerpColor(ecomb[0], ecomb[1], inter);
//     stroke(c);  
//     x = r*cos(i+90) ;
//     y = r*sin(i+90)
//     knit(x,y);
//   }
  
//   k = 90;
//   for(i=0;i<90;i+=theta_speed){
//     let inter = map(i, 0, 90, 0, 1);
//     let c = lerpColor(ecomb[0], ecomb[1], inter);
//     stroke(c);  
//     x = r*cos(k) ;
//     y = r*sin(k);
//     knit(x,y);
//     k-=theta_speed;
//   }
  
  
}

function paintsky(){
  if(r > 0.75*rad){
    color_list = acomb;
  }
  else if(r > 0.5*rad){
    color_list = bcomb;
  }
  else if(r > 0.25 * rad){
    color_list = ccomb;
  }
  else{
    color_list = dcomb;
  }
  
  ncolrs = color_list.length;
  
  j=1;
  for(i=0;i<100;i+=theta_speed){
    let inter = map(i, 0, 90, 0, 1);
    let c = lerpColor(color_list[0], color_list[ncolrs-1], inter);
    stroke(c);  
    x = r*cos(i+180) ;
    y = r*sin(i+180);
    knit(x+random(-5,5),y+random(-5,5));
  }
  k = 90;
  for(i=0;i<100;i+=theta_speed){
    let inter = map(i, 0, 90, 0, 1);
    let c = lerpColor(color_list[0], color_list[ncolrs-1], inter);
    stroke(c);  
    x = r*cos(k+270) ;
    y = r*sin(k+270);
    knit(x+random(-5,5),y+random(-5,5));
    k-=theta_speed;
  }
  

}
























// ################### Extra functions
function goodpaint(){
  if(theta > 0.75*90){
    color_list = acomb;
  }
  else if(theta > 0.5*90){
    color_list = bcomb;
  }
  else if(theta > 0.25 * 90){
    color_list = ccomb;
  }
  else{
    color_list = dcomb;
  }
  ncolrs = color_list.length;

  j=1
  for(i=0;i<rad;i+=rad_speed){
    let inter = map(i, 0, rad, 0, 1);
    let c = lerpColor(color_list[0], color_list[ncolrs-1], inter);
    stroke(c);
    x = i*cos(theta+180) + random(-2,2) ;
    y = i*sin(theta+180)+ random(-2,2) ;
    knit(x,y);
  }
  theta+=theta_speed;
  if(theta>90){noLoop();}  
}

function oldpaint(){
  if(r > 0.75*rad){
    color_list = acomb;
  }
  else if(r > 0.5*rad){
    color_list = bcomb;
  }
  else if(r > 0.25 * rad){
    color_list = ccomb;
  }
  else{
    color_list = dcomb;
  }
  
  ncolrs = color_list.length;
  
  j=1;
  for(i=0;i<90;i+=theta_speed){
    if(i > (j*90/ncolrs)){j++;} 
    stroke(color_list[j-1]);    
    x = r*cos(i+180) ;
    y = r*sin(i+180);
    knit(x,y);
  } 
  
  
  j=color_list.length-1;
  k=1;
  for(i=0;i<90;i+=theta_speed){
    if(i > (k*90/ncolrs)){j--;k++;} 
    stroke(color_list[j]);    
    x = r*cos(i+270);
    y = r*sin(i+270);
    knit(x,y);
  } 
  
  r+=rad_speed + random(-4,4); 
  if(r>rad){
    r=0;
    noLoop();
  }

}


function knit(x,y){
  gap = length/9;
  line(x,y,x,y+length);
  line(x-gap,y+2*gap,x+gap,y+2*gap);
  line(x-gap,y+3*gap,x+gap,y+3*gap);
  line(x-2*gap,y+4*gap,x+gap,y+4*gap);
  line(x-2*gap,y+5*gap,x+gap,y+5*gap);
  line(x-gap,y+6*gap,x+gap,y+6*gap);
  line(x-gap,y+7*gap,x+gap,y+7*gap);
}


function keyTyped() {
  if (key === 's' || key === 'S') {
    saveCanvas('ShapeTiling1', 'png');
    print("saving image");
  }
  return false;
  }
