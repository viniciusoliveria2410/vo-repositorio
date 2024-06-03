function setup() {
    createCanvas(400, 400);
  }
  
  function draw() {
    background("cyan");
    
    stroke("black")
    fill("blue")
    rect(100, 100, 200, 200) 
    //console.log(mouseIsPressed)
    rect(mouseX, mouseY,100, 100, 100) 
  
  }