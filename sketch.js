//turbulence
//turbulence in the night sky
//water flow
let particles = [];

let noiseScale = 0.011;

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
  let num = 900//random(300,3000);
  //console.log(num);
  
  r = random(0,255); // r is a random number between 0 - 255
  g = random(0,255); // g is a random number betwen 100 - 200
  b = random(0,255);
  a = random(0,10);
  strokeW = random(.5,2);
  console.log(strokeW);
  
  for (let i = 0; i < num; ++i){
    particles.push(createVector(random(width), random(height)));
  }
}

function draw() {  
  
  background(0,a);
  
  for(speck of particles){ 
    strokeWeight(strokeW);
    stroke(r,g,b);
    point(speck.x, speck.y);
    let n = noise(speck.x * noiseScale, speck.y * noiseScale);
    let a = TAU * n;
    speck.x += cos(a);
    speck.y += sin(a);
    if(!onScreen(speck)){
      speck.x = random(width);
      speck.y = random(height);
    }
  }
  
  //positionEllipse();
  
}

function onScreen(v){
  return v.x >= 0 && v.x <= width && v.y >= 0 && v.y <= height; 
}