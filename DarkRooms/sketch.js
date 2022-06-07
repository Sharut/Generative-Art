let nrows = 6;
let ncols = 6;
let maxwidth = (600 - 10 * (ncols+1))/ncols;
let my_colors = ['#8E2D2C', '#BB6C28', '#E19E37', '#419094', '#A2D0BC', '#285D6A', '#E8D7A8' ]

var num=0;
function setup() {
  createCanvas(600, 600);
  background(0);
  fill(0);
  down = 0;
  for(let i=0;i<ncols;i++){
    right = 0;
    for(let j=0;j<nrows;j++){
      num = int(random(0, 7));
      hole_num = int(random(0, 7));
      my_rect(right+10,down+10,maxwidth,maxwidth, num, hole_num); 
      right = right + maxwidth +10;
    }
    down = down + maxwidth +10;
  }
}

function draw() {
  
}

function my_rect(x,y,width, height, num, hole_num){ 
  if(width < 10){
    return;
  }
  strokeWeight(2);
  stroke(my_colors[num]);
  rect(x,y,width,height);
  my_rect(x+ width/(2*hole_num+14), y+ width/(2*hole_num+14),width*8/9, height*8/9, num, hole_num);
}