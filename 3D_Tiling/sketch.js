// const colors = ["#AADDEE", "#EEAADD", "#527dff", "#ffb854"];
const colors = ["#AE93D9"]
function randomLight(c) {
  pointLight(
    red(c),
    green(c),
    blue(c),
    random(-400, 400),
    random(-400, 400),
    400
  );
}

function setup() {
  createCanvas(800, 800, WEBGL);
  randomLight(random(colors));
  randomLight(random(colors));
  const w = 500;
  const s = 10;
  const d = random(10, 40);

  fill(255);
  push();
  translate(0, 0, -400);
  rect(-width, -height, width * 2, height * 2);
  pop();

  push();
  rotateX(PI / 4);
  rotateZ(PI / 4);
  translate(-w / 2, -w / 2, 0);
  for (let x = 0; x < w; x += s) {
    for (let y = 0; y < w; y += s) {
      const z = noise(x * 0.01, y * 0.01) * 100 ;
      push();
      translate(x, y, z);
      rotateX(noise(x * 0.01, y * 0.01, z * 0.01) * TAU);
      box(s, s, 2);
      translate(0, 0, d);
      box(s, s, 2);
      translate(0, 0, d);
      box(s, s, 2);
      translate(0, 0, d);
      box(s, s, 2);
      pop();
    }
  }
  pop();
  // save("3DTiles.png")
}
