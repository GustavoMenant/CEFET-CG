
let pvec;
let radius;

function setup() {
    createCanvas(windowWidth, windowHeight);
    angleMode(RADIANS);

    pvec = createVector(0, 0);

    radius = createSlider(0, 250, 50);
    radius.position(width/2 + 100, 30);
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function draw_grid() {
    stroke(193, 70, 0);
    strokeWeight(4);

    line(-width/2, 0, width/2, 0);
    line(0, -height/2, 0, height/2);

    // 50 pixels ~= 1.0cm 
    // PS.: provavelmente essa conversão não está muito correta rs
    for(let i = 50; i < width; i+= 50) 
    {
        line(i, -4, i, 4);
        line(-i, -4, -i, 4);
        line(-4, i, 4, i);
        line(-4, -i, 4, -i);
    }
}

function draw() {
    background(254, 249, 225);

    translate(width/2, height/2);

    strokeWeight(2);
    circle(0, 0, (radius.value() * 2));

    pvec.x = map(mouseX, 0, width, -width/2, width/2);
    pvec.y = map(mouseY, 0, height, -height/2, height/2);

    const d = dist(0, 0, pvec.x, pvec.y);
    let theta;
    if (pvec.y > 0) {
        theta = TWO_PI - acos(pvec.x/d); 
    } else {
        theta = acos(pvec.x/d);
    }

    pvec.x = (radius.value() * cos(theta));
    pvec.y = -(radius.value() * sin(theta));

    stroke(254, 249, 225);
    strokeWeight(4);
    fill(255, 157, 35);
    line(0, 0, pvec.x, pvec.y);
    line(pvec.x, 0, pvec.x, pvec.y);

    draw_grid();

    stroke(193, 70, 0);
    strokeWeight(13);
    point(pvec.x, pvec.y);
    
}