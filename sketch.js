function circle58(x, y, r, n, sw, step) {
  for (let k = 0; k < n; k++) {
    let i = r;
    let t = random(360);
    let rnoise = random(10);
    let nstep = step;
    while (i >= sw/2) {
      noStroke();
      let nr = (i - sw/2) + noise(rnoise) * 30 - 15;
      rnoise += nstep;
      let nx = x + nr * cos(radians(t));
      let ny = y + nr * sin(radians(t));
      ellipse(nx, ny, sw, sw);
      i -= 0.08;
      t += 1;
    }
  }
}

function circle59(x, y, r) {
  let sw = 10; 
  let n = 10;
  for (let i = 0; sw > 1; i++) {
    fill(0, 10);
    circle58(x, y, r, n, sw, 0.01);
    //fill(255, 10);
    //_circle58(x, y, r, sw);
    sw /= 2;
    n *= 2;
  }
  fill(255, 80);
  circle58(x, y, r, 10, 1, 0.01);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  
  circle59(300, 200, 150);
}