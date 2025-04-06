  // a lógica de um polígono (regular) estrelado é simples :
  //
  // -> calcule os vértices de um polígono (regular) qualquer inscrito em uma circunferência
  // -> para cada par de vértices desse polígono, calcule um ponto médio entre eles
  // -> esses novos pontos devem estar circunscritos a uma cirfunferência menor, interna ao polígono
  // -> desenhe uma linha entre todos os pontos calculados

  function setup() {
    createCanvas(windowWidth, windowHeight);
    angleMode(DEGREES);
  }

  function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
  }
  
  function draw() {
    background(116, 81, 45);
    translate(width/2, height/2);

  }