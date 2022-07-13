function setup() {
  createCanvas(800, 800, WEBGL);
  noStroke()
  specularMaterial(0)
  pointLight(random(255), random(255), random(255), 120,30,400);
  
  // generate random lights
  // for (let a = 0; a < 10; a++) {
  //   let pos = createVector(random(-400, 400), random(-400, 400), 20);
  //   for (let t = 0; t < 2; t++) {
  //     pointLight(random(255), random(255), 255, pos.x, pos.y, pos.z);
  //     pos.add(p5.Vector.random3D().mult(10));
  //   }
  // }

  rectMode(CENTER);
   for (let a = 0; a < 2000; a++) {
     pos = p5.Vector.random3D().mult(random([random(280), 280]))
     push()
     translate(pos.x,pos.y,pos.z)
     sphere(random([8,20,32]));
     pop()
   }
  rect(0, 0, width, height);
  
  // save("cell.glow")
}


function mousePressed() {
  save("3DLigthSphere.png");
}
