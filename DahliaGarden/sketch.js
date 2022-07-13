var angleSpeed=8;
var r=10;
var len = 80;
var counter = 0;
var strokeWidth=2;
function setup() {
  cnv = createCanvas(windowWidth, windowHeight);
  background(0);
  // stroke(0, 15);
  noFill();
  angleMode(DEGREES);
  
  
  
  pal = ['#8E2D2C', '#BB6C28', '#E19E37', '#419094', '#A2D0BC', '#285D6A',]
  
  
  pal=["#9e5082",
"#ad84ae",
"#f1d1de",
"#ece6d8"]
  
  pal = [
"#a86807",
"#e49a03",
"#f8ca02",
"#ffe900"]
  
  pal =["#A34162", "#63283C", "#F06090", "#C95179"]
  centre_pal =["#e49a03", "#a86807", "#ffe900", "#f8ca02"]
  //flower palette
  
  pal=["#f9d5e5",
      "#eeac99",
      "#e06377",
      "#c83349",
      "#5b9aa0",
      "#d6d4e0",
      "#b8a9c9",
      "#622569"]
  
  pal =["#A34162", "#63283C", "#F06090", "#C95179"]
  // pal = ["#04a3bd", "#f0be3d", "#931e18", "#da7901", "#247d3f", "#20235b"]//Lakota
  
  push()
  fill("#5b9aa0");
  textSize(20);
  stroke("#5b9aa0")
  text("Click at various locations on the screen to generate your own garden!", 10, 50);
  pop()
  
}

function draw() {
  cnv.mousePressed(dandelion); 
  // counter+=1;
  // if(counter>80){
  //   noLoop();
  // }
  // noLoop();
}

function dandelion(){
  
  var dandelionLength = len + random(-len/5,len/5);
  translate(mouseX, mouseY);
  // var color_index = floor(random(0,pal.length));
  var color_index = counter%pal.length;
  
  strokeWeight(strokeWidth);
  ellipse(0,0,2*r,2*r)
  
  for(let angle=0;angle<=360;angle+=angleSpeed + random(-2,2)){
    var h = r+dandelionLength+ random(-dandelionLength/10,dandelionLength/10);
    stroke(pal[color_index])
    push();
    noStroke();
    fill(0)
    rotate(angle);
    rect(0,0,h+10,strokeWidth*2)
    rotate(-angle)
    pop();
    line(r*cos(angle), r*sin(angle), h*cos(angle), h*sin(angle));
    
    push();
    rotate(angle);
    translate(h*cos(angle), h*sin(angle));
    flowerEnd(color_index);
    translate(-h*cos(angle), -h*sin(angle));
    rotate(-angle)
    pop();
  }
  noFill();
  beginShape();
  curveVertex(0,0);
  curveVertex(0,0);
  var x = random(-20,20)
  curveVertex(random(-100,100),random(0,600));
  curveVertex(x, height)
  curveVertex(x, height)
  endShape();
  
  // fill("#FFD700")
  // ellipse(0,0,r,r);
  // for(let x=0;x<=360;x+=30){
  //   var y = r/2 +  random(-r/10,r/10);
  //   stroke(centre_pal[color_index]);
  //   line(0,0, y*cos(x), y*sin(x));
  // }
  
  
  counter+=1;
    
  
  
}


function flowerEnd(index){
  fill(pal[index])
  stroke(pal[index])
  ellipse(0,0,12,6);
}
