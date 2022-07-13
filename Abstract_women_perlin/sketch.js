var particles = [];
var maxLife = 40;
var numParticles = 300;
var numIters = 10
var initRadius = 0.1;
var finalRadius = 12;
var minLife = 2;
var womenScale=3
var iterCounter = 0
function setup(){
    backgroundColor = color(255);
    createCanvas(windowWidth, windowHeight);
    background(color('#fff'));
    for(var i = 0; i < numParticles; i++){
        particles[i] = new Particle();
    }
    pal = ["#04a3bd", "#f0be3d", "#931e18", "#da7901", "#247d3f", "#20235b"]//Lakota
    pal = ['#8E2D2C', '#BB6C28', '#E19E37', '#419094', '#A2D0BC', '#285D6A',]
    fill('#0a0a0a');
    push();
    translate(windowWidth*0.1,0);
    draw_women(womenScale);
    pop();
}

function draw(){
    translate(windowWidth*0.1,0);
    noStroke();
    smooth(); 
    for(var i = 1; i < numParticles; i++){
        var iterations = map(i,0,numParticles,numIters,1);
        particles[i].move(iterations);
        particles[i].checkEdge();
        var particleColor = color(pal[i%pal.length]);
        
        fill(red(particleColor), green(particleColor), blue(particleColor), 255*(particles[i].rad/particles[i].original_life));
      
        if(particles[i].life >= minLife){
          particles[i].display();
        }
        if(iterCounter>1200){
          noLoop();
        }
    } 
  
}

function Particle(){
    this.dist = 0.2
    this.vel = createVector(0, 0);
    this.pos = createVector(random(26*womenScale,width), random(-50, height+50));
    this.life = random(1, maxLife); 
    this.original_life = this.life;
    this.rad = initRadius;
    this.move = function(iterations){
        // if((this.life -= 0.01666) < 0)
        //     this.respawn();
      
        if(this.pos.y > 207*womenScale && this.pos.x <= 107*womenScale){
          this.life=0;
        }
        if(this.pos.y < 20*womenScale && this.pos.x < 80*womenScale || this.pos.y < 40*womenScale && this.pos.x < 60*womenScale || this.pos.y < 100*womenScale && this.pos.x < 47*womenScale || this.pos.y > 235*womenScale && this.pos.x < 140*womenScale){
          this.life=0;
        }
      
        // These show the areas corresponding to the "if" conditions designed above
//         ////////////////////////////////////////////  
//         stroke('blue')
//         line(80*womenScale,0,80*womenScale, height)
//         line(0, 20*womenScale, width, 20*womenScale)
      
//         stroke('red')
//         line(60*womenScale,0,60*womenScale, height)
//         line(0, 40*womenScale, width, 40*womenScale)
      
//         stroke('green')
//         line(47*womenScale,0,47*womenScale, height)
//         line(0, 100*womenScale, width, 100*womenScale)
      
//         stroke('yellow')
//         line(140*womenScale,0,140*womenScale, height)
//         line(0, 235*womenScale, width, 235*womenScale)
//         ////////////////////////////////////////////
     
      
      
        while(iterations > 0){

            // var angle = noise(this.pos.x/800, this.pos.y/800)*TWO_PI*800;
            // var angle = noise(this.pos.x/1000, this.pos.y/1000)*1000*TWO_PI;
            var angle = noise(this.pos.x/400, this.pos.y/400)*TWO_PI;
            angle = map(angle, 0, TWO_PI,  4*PI/3, 17*PI/6)
            // print(angle)
            let v = p5.Vector.fromAngle(angle, this.dist) 
            // print(angle, v.x, v.y)
            this.pos.x += v.x;
            this.pos.y += v.y;
            --iterations;
        }
    }

    this.checkEdge = function(){
        if(this.pos.x > width || this.pos.x < 0 || this.pos.y > height || this.pos.y < 0){
            this.respawn();
        }
    }
    
    this.respawn = function(){
        this.pos.x = random(26*womenScale,width+50);
        this.pos.y = random(-50, height+50);
        this.life = random(1, maxLife); 
        this.original_life = this.life;
        iterCounter +=1;
    }

    this.display = function(){
        // r = r + (finalRadius - r)*(this.life);
      // print(this)
      // if(this.life > minLife){
        this.rad = (initRadius-finalRadius)/(this.original_life - minLife)*this.life + (initRadius*minLife - finalRadius*this.original_life)/(minLife - this.original_life);
      // } 
      // else{rad=2;}
        // print(rad)
        ellipse(this.pos.x, this.pos.y, this.rad, this.rad);
        this.life -= 0.1
    }
}


function draw_women(x){
  beginShape();
  vertex(109.74355*x,0.55991603*x)
  bezierVertex(50.392446*x,30.795382*x, 47.231973*x,85.592846*x, 47.231973*x,85.592846*x)
  bezierVertex(50.28*x,103*x, 31*x,114*x, 18.5*x, 119.5*x)
  bezierVertex(10*x,122*x,40*x,134*x, 39*x,142*x)
  bezierVertex(38*x,146*x,23*x,150*x,22*x,152*x)
  // bezierVertex(30*x,148*x,23*x,150*x,22*x,152*x)
  bezierVertex(23*x,160*x,38*x,166*x, 37*x,167*x)
  bezierVertex(32*x,166*x,27*x,164*x,26*x,167*x)
  bezierVertex(24*x,171*x,28*x,179*x,27*x,184*x)
  bezierVertex(25*x,188*x,17*x,191*x,19*x,195*x)
  bezierVertex(24*x,210*x,49*x,208*x,64*x,206*x)
  bezierVertex(77*x,205*x,90*x,198*x,100*x,204*x)
  bezierVertex(129*x,221*x,138*x,273*x,139*x,296*x)
  endShape();
  beginShape();
  vertex(139*x,296*x)
  vertex(windowWidth, 296*x)
  vertex(windowWidth, 0.55991603*x)
  vertex(109.74355*x,0.55991603*x)
  endShape();
  
  
}
