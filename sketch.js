function setup() {
    createCanvas(400, 400);
  }
  
  function draw() {
    background(220);
  }function setup() {
    createCanvas(600, 600);
    background("white");
  }
  
  function draw() {
    stroke("blue");
    fill("red");
  
    // console.log(mouseIsPressed)
  
    if (mouseIsPressed) {
      rect(mouseX, mouseY, 20, 35);
    }
  }
  