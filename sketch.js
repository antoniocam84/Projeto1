function setup() {
    createCanvas(800, 800);
       background("black");
  
  }
  
  function draw() {
    
    stroke("blue");
    fill ("red");
    
    if(mouseIsPressed){
      circle(mouseX, mouseY, 20, 10);
    }
  }
  