fps=60;
var capturer = new CCapture({ format: 'webm' , framerate: fps} );
let x;
let y;
let r;
let g;
let b;
var startMillis; 

function setup() {
  frameRate(fps);
  createCanvas(windowWidth, windowHeight);
  x = windowWidth / 2;
  y = windowHeight / 2;
  
  r = random(255);
  g = random(255);
  b = random(255);  
  background(80);
}

function draw() {
//   if (frameCount === 1) {
//     capturer.start();
//   }
//   if (startMillis == null) {
//     startMillis = millis();
//   }
  
//   var duration = 36000;
//   var elapsed = millis() - startMillis;
//   var t = map(elapsed, 0, duration, 0, 1);
  
  // if we have passed t=1 then end the animation.
  // if (t > 1) {
  //   noLoop();
  //   console.log('finished recording.');
  //   capturer.stop();
  //   capturer.save();
  //   return;
  // }
  
  for (let i = 0; i < 1000; i++) {
    step();
  }
  
  // handle saving the frame
  // console.log('capturing frame');
  // capturer.capture(document.getElementById('defaultCanvas0'));
  
}

function step() {
  x += random(-1, 1);
  y += random(-1, 1);
  
  x = constrain(x, 0, windowWidth);
  y = constrain(y, 0, windowHeight);
  
  r += random(-1, 1);
  g += random(-1, 1);
  b += random(-1, 1);
  
  r = constrain(r, 0, 255);
  g = constrain(g, 0, 255);
  b = constrain(b, 0, 255);
  
  stroke(r, g, b);
  point(x, y);
}

