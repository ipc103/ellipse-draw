var rslider, bslider, gslider, sizeSlider;

function setup() {
  // uncomment this line to make the canvas the full size of the window
  createCanvas(windowWidth, 500);
  background(255);
  colorMode(HSB, 255);
  rslider = createSlider(0, 255, 0);
  gslider = createSlider(0, 255, 200);
  bslider = createSlider(0, 255, 200);
  sizeSlider = createSlider(0, 100, 80);
  rslider.position(0, 550);
  gslider.position(200, 550);
  bslider.position(400, 550);
  sizeSlider.position(600, 550);
  var saveButton = createButton("Save");
  saveButton.position(800, 550);
  saveButton.mousePressed(saveImage);
}

function draw() {
  // draw stuff here
  // stroke(slider.value(), 255, 255);
  var size = sizeSlider.value();
  fill(rslider.value(), gslider.value(), bslider.value(), 0);
  if ( mouseIsPressed ) {
    ellipse(mouseX, mouseY, size, size);
  } 
  
}

function saveImage() {
  if ( confirm("Download a copy?") === true ) {
    var name = prompt("Enter a filename:", "ellipses");
    save(name);
  }
}