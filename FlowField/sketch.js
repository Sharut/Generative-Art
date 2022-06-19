var particles = [];
var maxLife;


function setup(){
    backgroundColor = color('#0a0a0a');
    createCanvas(windowWidth, windowHeight);
    background(color('#0a0a0a'));
    for(var i = 0; i < 1000; i++){
        particles[i] = new Particle();
    }
  pal = ["#04a3bd", "#f0be3d", "#931e18", "#da7901", "#247d3f", "#20235b"]//Lakota
}

function draw(){
    noStroke();
    smooth();  
 
    maxLife = 10;
    for(var i = 1; i < 1000; i++){
        var iterations = map(i,0,1000,100,1);
        var radius = 2;
        
        particles[i].move(iterations);
        particles[i].checkEdge();
        
        var alpha = 255;
        var particleColor;
        var fadeRatio;
        fadeRatio = min(particles[i].life * 5 / maxLife, 1);
        fadeRatio = min((maxLife - particles[i].life) * 5 / maxLife, fadeRatio);
        particleColor = color(pal[i%pal.length]);
        // let cNum = floor(random(pal.length))
    
        fill(red(particleColor), green(particleColor), blue(particleColor), alpha * fadeRatio);
        particles[i].display(radius);
    } 
}

function Particle(){
    this.dist = 0.2
    this.vel = createVector(0, 0);
    this.pos = createVector(random(-50, width+50), random(-50, height+50));
    this.life = random(0, maxLife);    
    this.move = function(iterations){
        if((this.life -= 0.01666) < 0)
            this.respawn();
        while(iterations > 0){

            var angle = noise(this.pos.x/800, this.pos.y/800)*TWO_PI*800;
            let v = p5.Vector.fromAngle(angle, this.dist) 
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
        this.pos.x = random(-50, width+50);
        this.pos.y = random(-50, height+50);
        this.life = maxLife;
    }

    this.display = function(r){
        ellipse(this.pos.x, this.pos.y, r, r);
    }
}

