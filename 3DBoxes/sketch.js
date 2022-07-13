
const pal = ['#419094', '#A2D0BC', '#285D6A',]
// const pal = ['#8E2D2C', '#BB6C28', '#E19E37']

function setup() {
  createCanvas(800, 800, WEBGL);
  background(0);
  camera(0,0, 800, 0, 0, 0);
  rotateY(random(-0.2, 0.2));
  rotateX(random(-0.2, 0.2));
  for (let radius =  width / 2 - 30; radius > 0; radius -= 8) {
    for (let angle = 0; angle < TAU; angle += (TAU / radius) * 2) {
      const x = cos(angle) * radius;
      const y = sin(angle) * radius;
      const n = noise(x * 0.01, y * 0.01);
      col = random(pal)
      stroke(col)
      fill(col)
      push();
      translate(x, y);
      box(2, 2, n * 400);
      pop();
    }
  }
}
function keyTyped() {
  if (key === "s") {
    save("3DBoxes.png");
  }
}