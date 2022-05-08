//turbulence
//turbulence in the night sky
//water flow/blood
//fissure
let dotsArray = [];

function setup() {
  createCanvas(windowWidth, windowHeight);

  let totalDots = random(300,3000);
  console.log("totalDots: " + totalDots);
  
  r = random(0,255); 
  g = random(0,255); 
  b = random(0,255);
  al = random(0,10);
  console.log("alpha: " + al);

  strokeW = random(.5,2);
  console.log("strokeWeight: " + strokeW);

  noiseMultiplier = random([0.0009,0.003,0.004,0.005,0.008,0.009, 0.011]);
  console.log("noise multiplier: " + noiseMultiplier);
  
  for (let i = 0; i < totalDots; ++i){
    dotsArray.push(createVector(random(width), random(height)));
  }

}

function seenOnCanvas(speck){
  return speck.x >= 0 && speck.x <= width && speck.y >= 0 && speck.y <= height; 
}

function turbulence(){
  for(speck of dotsArray){ 
    strokeWeight(strokeW);
    stroke(r,g,b);
    point(speck.x, speck.y);
    let n = noise(speck.x * noiseMultiplier, speck.y * noiseMultiplier);
    //get an angle
    //console.log(n);
    let a = TAU * n;
    //convert angle to x & y
    speck.x += cos(a);
    speck.y += sin(a);
    if(!seenOnCanvas(speck)){
      speck.x = random(width);
      speck.y = random(height);
    }
  }
}

function draw() {  
  
  background(0,al);
  
  turbulence();
  
}

