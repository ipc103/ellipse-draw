var rslider, bslider, gslider;

function setup() {
  // uncomment this line to make the canvas the full size of the window
  createCanvas(windowWidth, 500);
  colorMode(HSB, 255);
  rslider = createSlider(0, 255, 100);
  gslider = createSlider(0, 255, 55);
  bslider = createSlider(0, 255, 255);
  rslider.position(0, 550);
  gslider.position(200, 550);
  bslider.position(400, 550);
}

function draw() {
  // draw stuff here
  // stroke(slider.value(), 255, 255);
  fill(rslider.value(), gslider.value(), bslider.value(), 0);
  if ( mouseIsPressed ) {
    ellipse(mouseX, mouseY, 80, 80);
  } 
  
}