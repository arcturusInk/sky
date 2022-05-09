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


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {  
  
  background(255);
  
  
  //drawRange('grey',5);
  drawRange(3.5,0.01);
  
  
}
