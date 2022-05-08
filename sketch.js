//turbulence
//turbulence in the night sky
//water flow/blood
//fissure 3,4,7,12,13,14,19,30
let particles = [];

function placeHuman(){
  // Displays the image at point (0, height/2) at half size
  image(img, width/2, height/1.3, img.width/16, img.height/16);
  //image(img, 0, y, img.width/15, img.height/15);
}

function drawRange (divider,starter) {
    let incAmount = starter//0.01;
    let whatever = 0;
    for (let t = 0; t < incAmount*width; t += incAmount) {
        let n = noise(t);
        let y = map(n, 0, 1, 0, height/divider);
        //console.log(y);
        //stroke(26, 29, 31);
        //stroke(0, 8, 20);


        stroke(1, 8, 18);
        noFill()
        rect(t*100, height-y, 1, y);

        //console.log(height-y)

        if ((height/divider)-(y-height/divider) > whatever){
          whatever = y;
          //console.log(whatever);
        }

    }
}

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
  // for (let i = 0; sw > 1; i++) {
  //   fill(0, 10);
  //   circle58(x, y, r, n, sw, 0.01);
  //   sw /= 2;
  //   n *= 2;
  // }
  fill(255, 255);
  circle58(x, y, r, 10, 1, 0.01);
}

function flow(){
  for(speck of particles){ 
    strokeWeight(strokeW);
    stroke(r,g,b);
    point(speck.x, speck.y);
    let n = noise(speck.x * noiseScale, speck.y * noiseScale);
    //get an angle
    //console.log(n);
    let a = TAU * n;
    //convert angle to x & y
    speck.x += cos(a);
    speck.y += sin(a);
    if(!onScreen(speck)){
      speck.x = random(width);
      speck.y = random(height);
    }
  }
}

function positionEllipse() {
  circleColor = color(random(200,255),random(200,255),random(200,255));
  fill(circleColor);
  //fill(255)
 //strokeWeight(4); 
 //stroke('white');
  ellipse(windowWidth/2,windowHeight/2,windowWidth/4,windowHeight/3);

}

function setup() {
  createCanvas(windowWidth, windowHeight);
  /*let cnv = createCanvas(500, 500);
  let x = (windowWidth - width) / 2;
  let y = (windowHeight - height) / 2;
  cnv.position(x, y);
  strokeWeight(4);
  stroke(51);*/
 //createCanvas(500, 500);

  let num = random(300,3000);
  //console.log(num);
  
  r = random(0,255); // r is a random number between 0 - 255
  g = random(0,255); // g is a random number betwen 100 - 200
  b = random(0,255);
  a = random(0,10);
  strokeW = random(.5,2);
  //console.log(strokeW);
  
  noiseScale = random([0.0009,0.003,0.004,0.005,0.008,0.009, 0.011]);
console.log(noiseScale);

  
  for (let i = 0; i < num; ++i){
    particles.push(createVector(random(width), random(height)));
  }
  
  //circle59(windowWidth/2,windowHeight/2, 40);

  img = loadImage('human.png'); // Load the image
}

function draw() {  
  
  background(0,a);
  
  
  //flow();
  
  //circle59(windowWidth/1.2,windowHeight/4.2, 50);
  

  //placeHuman();

  //drawRange('grey',5);
  //drawRange(3.5,0.01);
  
  //positionEllipse();

  
}

function onScreen(vec){
  return vec.x >= 0 && vec.x <= width && vec.y >= 0 && vec.y <= height; 
}