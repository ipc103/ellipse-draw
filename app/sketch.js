var slider;

function setup() {
  // uncomment this line to make the canvas the full size of the window
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB, 255);
  slider = createSlider(0, 255, 255);
}

function draw() {
  // draw stuff here
  // stroke(slider.value(), 255, 255);
  fill(slider.value(), 255, 255, 0);
  if ( mouseIsPressed ) {
    ellipse(mouseX, mouseY, 80, 80);
  } 
  
}