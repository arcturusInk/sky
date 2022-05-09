function placeHuman(){
  // Displays the image at point (0, height/2) at half size
  image(img, width/2, height/1.3, img.width/16, img.height/16);
  //image(img, 0, y, img.width/15, img.height/15);
}


function setup() {
  createCanvas(windowWidth, windowHeight);

  img = loadImage('human.png'); // Load the image
}

function draw() {  
  
  background(0,0,0);
  
  

  placeHuman();


  
}