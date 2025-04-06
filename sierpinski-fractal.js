
  // a lógica de um polígono (regular) estrelado é simples :
  //
  // -> calcule os vértices de um polígono (regular) qualquer inscrito em uma circunferência
  // -> para cada par de vértices desse polígono, calcule um ponto médio entre eles
  // -> esses novos pontos devem estar circunscritos a uma cirfunferência menor, interna ao polígono
  // -> desenhe uma linha entre todos os pontos calculados

  let iteration;
  let angle = 0;

  function setup() {
    createCanvas(windowWidth, windowHeight);
    angleMode(DEGREES);

    iteration = createSlider(1, 8, 1);
    iteration.position(10, 30);
  }

  function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
  }

  function draw_fractal(p1, p2, p3, it) {

    if(it == 1) {
      triangle(p1[0], p1[1], p2[0], p2[1], p3[0], p3[1]);
    } 

    else if(it > 1) {
      const pm1 = [(p1[0] + p2[0])/2, (p1[1] + p2[1])/2];
      const pm2 = [(p2[0] + p3[0])/2, (p2[1] + p3[1])/2];
      const pm3 = [(p3[0] + p1[0])/2, (p3[1] + p1[1])/2];
      fill(255, 0, 0);
      draw_fractal(p1, pm1, pm3, it-1);
      draw_fractal(pm1, p2, pm2, it-1);
      draw_fractal(pm3, pm2, p3, it-1);
    }
  
  }
  
  function draw() {
    background(116, 81, 45);
    translate(width/2, height/2);

    angle += 1/(millis() / 1000);
    rotate(angle);

    strokeWeight(0);
    const r = 300;
    const p1 = createVector(0, -r);
    const p2 = createVector(r * cos(210), -r * sin(210));
    const p3 = createVector(r * cos(330), -r * sin(330));
    draw_fractal([p1.x, p1.y], [p2.x, p2.y], [p3.x, p3.y], iteration.value());

  }
  

  // function draw_fractal(p1, p2, p3, it) {

  //   if(it == 1) {
  //     triangle(p1.x, p1.y, p2.x, p2.y, p3.x, p3.y);
  //   } 

  //   else if(it > 1) {
  //     const pm1 = createVector((p1.x + p2.x)/2, (p1.y + p2.y)/2);
  //     const pm2 = createVector((p2.x + p3.x)/2, (p2.y + p3.y)/2);
  //     const pm3 = createVector((p3.x + p1.x)/2, (p3.y + p1.y)/2);
  //     fill(255, 0, 0);
  //     draw_fractal(p1, pm1, pm3, it-1);
  //     draw_fractal(pm1, p2, pm2, it-1);
  //     draw_fractal(pm3, pm2, p3, it-1);
  //   }
  
  // }