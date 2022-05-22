//turbulence
//turbulence in the night sky
//water flow/blood
//fissure
let dotsArray = [], totalDots;
let r, g, b, al;
let r1, r2, g1, g2, b1, b2;
let decider, direction;

function setup() {
  createCanvas(windowWidth, windowHeight);

  //determines the color of the stroke
  decider = random(1);
  console.log("decider: " + decider);

  //how many points on the screen
  totalDots = random(300,3000);
  console.log("totalDots: " + totalDots);

  //determines the direction of the flow: left = 1 or right = -1
  direction = random([1,-1]);
  console.log("direction: " + direction);
  
  //determines the one color
  r = random(0,255); 
  g = random(0,255); 
  b = random(0,255);
  al = random(0,10);
  console.log("alpha: " + al);

  //determines the multiple color
  r1 = random(255);
  r2 = random(255);
  g1 = random(255);
  g2 = random(255);
  b1 = random(255);
  b2 = random(255);

  strokeW = random(.5,2);
  console.log("strokeWeight: " + strokeW);

  //noise value is between 0 to 1; values to multiply by
  noiseMultiplier = random([0.0009,0.003,0.004,0.005,0.008,0.009, 0.011]);
  console.log("noise multiplier: " + noiseMultiplier);
  
  //create the position of the pixel and add them to the array
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

    if(decider < 0.7){
      let rc = map(speck.x, 0, width, r1, r2);
      let gc = map(speck.y, 0, height, g1, g2);
      let bc = map(speck.x, 0, width, b1, b2); 

      stroke(rc, gc, bc);
    } else{
      stroke(r,g,b);
    }
  
    point(speck.x, speck.y);
    let n = noise(speck.x * noiseMultiplier, speck.y * noiseMultiplier);
    //console.log(n);

    //get an angle
    let angle = TAU * n;

    //convert angle to x & y || direction determines left or right
    speck.x += cos(angle) * direction;
    speck.y += sin(angle);


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

