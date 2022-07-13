function grid(rows, cols) {
  const grid = [];
  for (let x = 0; x < cols; x++) {
    grid[x] = [];
    for (let y = 0; y < rows; y++) {
      grid[x][y] = 0;
    }
  }
  return grid;
}

function modleTerrain(grid, a, b, c, d) {
  const rows = grid.length;
  const cols = grid[0].length;
  var yoff = 0;
  for (var y = 0; y < cols; y++) {
    var xoff = 0;
    for (var x = 0; x < rows; x++) {
      grid[x][y] = map(noise(x, y), 0, 1, c, d) + cos(x * y) * 80;
      xoff += a;
    }
    yoff += b;
  }
}

function render(grid, scl) {
  const rows = grid.length;
  const cols = grid[0].length;
  for (let y = 0; y < rows - 1; y++) {
    beginShape(TRIANGLE_STRIP);
    for (let x = 0; x < cols; x++) {
      vertex(x * scl, y * scl, grid[x][y]);
      vertex(x * scl, (y + 1) * scl, grid[x][y + 1]);
      vertex(x * scl, (y + 2) * scl, grid[x][y + 2]);
    }
    
    endShape();
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  camera(0, 0, windowHeight, 0, 0, 0, 0, 1, 0);
  translate(-width / 2-200, -height / 2-200);
  noStroke();
  // stroke(255);

  const scl = 4;
  const cols = max(width, height)*2 / scl;
  const rows = max(width, height)*2 / scl;
  const terrain = grid(rows, cols);
  modleTerrain(terrain, 0.1, 0.141, -150, 150);

  specularMaterial(255);
  r = random(255)
  g = random(255)
  b = random(255)
  // print(r,g,b)
  // Sharp purple shade
  r = 176.06925339065143
  g = 57.760147867184436
  b = 138.37337539361025
  
  // Sky Blue shade
  r = 74.25765002033411
  g = 124.83179200614896
  b = 237.39675601743474
  
  // Pink flower shade
  r = 188.70003363460754
  g = 24.320839887950545
  b = 96.25317537286361
  

  pointLight(r,g,b, -width, 0, 100);
  pointLight(r*0.1,g*0.1,b*0.1, 0,-height, 100);
  pointLight(r*0.25,g*0.25,b*0.25, 0, height, 100);
  pointLight(r + (0.25 * (255 - r)),g + (0.25 * (255 - g)),b + (0.25 * (255 - b)), width,0, 100);
  // pointLight(r + (0.1 * (255 - r)),g + (0.1 * (255 - g)),b + (0.1 * (255 - b)), 0,800, 100);

  // pointLight(random(255), random(255), random(255), -800, 0, 100);
  // pointLight(random(255), random(255), random(255), 800, 0, 100);
  // pointLight(random(255), random(255), random(255), 0, 800, 100);
  // pointLight(random(255), random(255), random(255), 0, -800, 100);
  render(terrain, scl);
  
}

function keyTyped() {
  if (key === "s") {
    save("3DLossPeaks.png");
  }
}


