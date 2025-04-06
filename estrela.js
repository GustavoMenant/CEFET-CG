
  // a lógica de um polígono (regular) estrelado é simples :
  //
  // -> calcule os vértices de um polígono (regular) qualquer inscrito em uma circunferência
  // -> para cada par de vértices desse polígono, calcule um ponto médio entre eles
  // -> esses novos pontos devem estar circunscritos a uma cirfunferência menor, interna ao polígono
  // -> desenhe uma linha entre todos os pontos calculados

  function setup() {
    createCanvas(windowWidth, windowHeight);
  }

  function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
  }
  
  function draw() {
    background(80, 75, 56);
    translate(width/2, height/2);
  
    const outer_radius = (width/height) * 135;
    const inner_radius = outer_radius/2;
    // qtd. mínima de pontos : 3 || qtd. máxima de pontos : 30
    const points = ~~map(mouseX, 0, width, 3, 30); // '~~' aproxima um 'Math.floor()'
    const offset = (TWO_PI/points);
    let x1, y1, x2, y2;
  
    strokeWeight(5);
    stroke(185, 178, 138);
  
    for(let i = 0; i < points; i++) 
    {
      x1 = outer_radius * cos(offset * i);
      y1 = outer_radius * sin(offset * i);
  
      x2 = inner_radius * cos((offset * i) + (offset/2));
      y2 = inner_radius * sin((offset * i) + (offset/2));
  
      line(x1, y1, x2, y2);
  
    // (i+1) resultará em uma draw call redundante
      x1 = outer_radius * cos(offset * (i+1));
      y1 = outer_radius * sin(offset * (i+1));
      
      line(x2, y2, x1, y1);
    }
  
  }
  