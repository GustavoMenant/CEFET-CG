
  // a fractal de sierpinski segue a seguinte lógica :
  //
  // -> calcule os vértices de um triângulo qualquer
  // -> para cada par de vértices desse triângulo, calcule um ponto médio entre eles
  // -> agora crie 3 novos triângulos utilizando os pontos iniciais e os pontos médios

  let iteration;
  let angle = 0;

  function setup() {
    createCanvas(windowWidth, windowHeight);
    angleMode(DEGREES);

    iteration = createSlider(1, 7, 1);
    iteration.position(width/2 - (iteration.width/2), height * 0.15);

  }

  function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    iteration.position(width/2 - (iteration.width/2), 30);

  }

  function draw_fractal(p1, p2, p3, it) {
    if(it == 1) {
      triangle(p1[0], p1[1], p2[0], p2[1], p3[0], p3[1]);
    } 

    else if(it > 1) {
      const pm1 = [(p1[0] + p2[0])/2, (p1[1] + p2[1])/2];
      const pm2 = [(p2[0] + p3[0])/2, (p2[1] + p3[1])/2];
      const pm3 = [(p3[0] + p1[0])/2, (p3[1] + p1[1])/2];

      draw_fractal(p1, pm1, pm3, it-1);
      draw_fractal(pm1, p2, pm2, it-1);
      draw_fractal(pm3, pm2, p3, it-1);
    }
  
  }
  
  function draw() {
    background(229, 208, 172);
    translate(width/2, height/2);

    angle = (angle + deltaTime * 0.05) % 360;
    rotate(angle);

    fill(254, 249, 225);
    stroke(193, 70, 0);
    strokeWeight(2);

    const r = 300;
    const p1 = [0, -r];
    const p2 = [r * cos(210), -r * sin(210)];
    const p3 = [r * cos(330), -r * sin(330)];

    draw_fractal(p1, p2, p3, iteration.value());

  }
  