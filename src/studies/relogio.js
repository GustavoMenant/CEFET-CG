const radius = 200;

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function clock() {
  stroke(255, 120, 50); 
  strokeWeight(1);

  let m = map(minute(), 0, 60, 0, 360) + (second()/10);
  let h = map(hour(), 0, 24, 0, 720) + (minute()/2);
  
  // Calculate end point of the seconds hand
  const xm = radius * cos(m - 90);
  const ym = radius * sin(m - 90);

  // Calculate end point of the seconds hand
  const xh = radius * cos(h - 90);
  const yh = radius * sin(h - 90);

  let minor_radius = radius/6;
  beginShape();
  vertex(minor_radius * cos(h - 83), minor_radius * sin(h - 83));
  vertex(xh, yh);
  vertex(minor_radius * cos(h - 97), minor_radius * sin(h - 97));
  vertex(0, 0);
  vertex(radius/5 * cos(m - 95), radius/5 * sin(m - 95));
  vertex(xm, ym);
  vertex(radius/5 * cos(m - 85), radius/5 * sin(m - 85));
  vertex(0, 0);
  endShape();

  strokeWeight(8);
  point(0, 0);
  
}

function draw() {
  background(24);
  translate(width/2, height/2);

  
  const points = 48;
  const offset = 360/points;

  stroke(55, 55, 55);
  strokeWeight(3);
  for(let i = 0; i < points; i++) {
    point(radius * cos(offset * i), radius * sin(offset * i)); 
    if(i % 4 == 0) line((radius - 10) * cos(offset * i), (radius - 10) * sin(offset * i), (radius + 2) * cos(offset * i), (radius + 2) * sin(offset * i));
  }

  clock();

}
