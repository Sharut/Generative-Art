var particles = [];
var sky = [];
var radius=0;
var water_maxLife = 6;
var sky_maxLife = 2;
// Sun parameters
var init_radius = 30;
var sky_radius = 30;
var max_iters = 10;
var rad_speed =20;
var counter=0;

function setup(){
    backgroundColor = color('#0a0a0a');
    createCanvas(windowWidth, windowHeight);
    background(color('#0a0a0a'));
    for(var i = 0; i < 500; i++){
        particles[i] = new Particle(water_maxLife, is_water = 1);
    }
  
    for(var j = 0; j < 2000; j++){
        sky[j] = new Particle(sky_maxLife, is_water = 0);
    }
  
  water_pal = ['#20235b',"#0f5e9c", "#2389da", "#1ca3ec", "#5abcd8","#74ccf4", "#83d7ee",]
  sun_pal = ["#FFE484", "#FFCC33", "#FC9601", "#D14009"]
  sky_pal = ["##FFC0CB", "#FFB6C1", "#FF69B4", "#FF1493", "#9F2B68", "#BF40BF", "#702963", "#AA336A", "#CF9FFF"]//Lakota

  init_radius = radius;
}



function draw(){
    noStroke();
    smooth();  
    make_water();
    make_sky();
  // push();
    make_sun();
  //   pop();
}


function make_sun(){
  if(counter>=max_iters){
    return;
  }
  noFill();
  strokeWeight(3);
  arc(width*0.8, height*0.2, sky_radius, sky_radius, HALF_PI, 0);
  angle = random(0,PI/2);
  while(angle< TWO_PI){
    index = int(random(max(0, (sun_pal.length-2)* sky_radius/(max_iters*rad_speed)),(sun_pal.length-1) * sky_radius/(max_iters*rad_speed)))
    stroke(sun_pal[index]);
    arc(width*0.8, height*0.2, sky_radius, sky_radius, angle, angle + random(0,PI/4));
    angle+=PI/10;
  }
  sky_radius+=rad_speed;
  counter+=1
  
  
}


function make_sky(){
  for(var i = 1; i < 2000; i++){
        var iterations = map(i,0,2000,5,1);
        var radius = 3;
        if(sky[i].life<0){
          continue;
        }
    
        sky[i].move(iterations);
        sky[i].checkEdge();
        
        var alpha = 255;
        var particleColor;
        var fadeRatio;
        fadeRatio = min(sky[i].life * 5 / water_maxLife, 1);
        fadeRatio = min((sky_maxLife - sky[i].life) * 5 / sky_maxLife, fadeRatio);
        particleColor = color(sky_pal[i%sky_pal.length]);
        // let cNum = floor(random(water_pal.length))
    
        fill(red(particleColor), green(particleColor), blue(particleColor), alpha * fadeRatio);
        
        var final_rad = (init_radius + rad_speed*max_iters)/2
        var x_center = width*0.8;
        var y_center = height*0.2;
        if((sky[i].pos.x-x_center)*(sky[i].pos.x-x_center) + (sky[i].pos.y-y_center)*(sky[i].pos.y-y_center) > (final_rad*final_rad +4000)){
          sky[i].display(2);
        }
        
        
    } 
  
}



function make_water(){
  for(var i = 1; i < 500; i++){
        var iterations = map(i,0,500,5,1);
        var radius = 3;
        
        // if(particles[i].life<0){
        //   continue;
        // }
    
        particles[i].move(iterations);
        particles[i].checkEdge();
        
        var alpha = 255;
        var particleColor;
        var fadeRatio;
        fadeRatio = min(particles[i].life * 5 / water_maxLife, 1);
        fadeRatio = min((water_maxLife - particles[i].life) * 5 / water_maxLife, fadeRatio);
        particleColor = color(water_pal[i%water_pal.length]);
        // let cNum = floor(random(water_pal.length))
    
        fill(red(particleColor), green(particleColor), blue(particleColor), alpha * fadeRatio);
        particles[i].display(radius);
    } 
  
}

function Particle(particle_life, is_water){
    this.dist = 0.2
    this.max_life = particle_life;
    this.vel = createVector(0, 0);
    this.pos = createVector(random(0,windowWidth),random(windowHeight*0.7, windowHeight));
    this.is_water = is_water;
    if(this.is_water == 0) {
        this.pos = createVector(random(0,windowWidth),random(0, windowHeight*0.7));
    }
    this.life = random(0, particle_life); 
    this.move = function(iterations){
        if((this.life -= 0.01666) < 0){
            this.respawn();
        }
        while(iterations > 0){

            // var angle = noise(this.pos.x/800, this.pos.y/800)*TWO_PI*800;
            var angle = noise(this.pos.x/200, this.pos.y/200)*TWO_PI;
            
            if (this.pos.y < windowHeight * 0.60 && this.is_water==1){
               this.respawn();
            }
          
            if (this.pos.y > windowHeight * 0.70 && this.is_water==0){
               this.respawn();
            }
          
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
        this.pos.x = random(0,windowWidth)
        this.pos.y = random(windowHeight*0.7, windowHeight)
        if(this.is_water == 0) {
          this.pos.y = random(0, windowHeight*0.7);
        }
        this.life = this.max_life;
    }

    this.display = function(r){
        // drawingContext.shadowBlue=32
        // drawingContext.shadowColor= color(207,7,99)
        ellipse(this.pos.x, this.pos.y, r, r);
        this.life -=0.01666;
    }
}

