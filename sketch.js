var canvas;
let img;
let a;
let b;
let pimg;
var myheading;
var mydiv;
var pg;

function windowResized(){
//console.log('resized');
resizeCanvas(windowWidth, windowHeight);

}

function mouseReleased() {
mydiv.style('color', 'black');
myheading.style('color', 'black');
fill(255);
background(255);
}

function setup(){
canvas = createCanvas(windowWidth, windowHeight);
canvas.position(0, 0);
canvas.style('z-index', '-1');
img = loadImage('neilo.png');
a = height / 2;
b = width /2;
//mic = new p5.AudioIn();
//mic.start();
font = loadFont('press_start_2p.ttf');
textFont(font);
pimg =loadImage('piskel.png');
myheading = createElement('h2', "I'm Neil Woodroffe");
mydiv = createP("- Occupational Therapist<br>- Sport and Exercise Scientist<br>- Hobbyist Programmer<br>- BJJ Blue Belt <br><br><br><br><br><br><br><br>");
mydiv.style('color', 'black');
}

function draw(){
background(255); 
  if (mouseIsPressed) {
    if (mouseButton === LEFT) {
      background(0);
      myheading.style('color', 'white');
      mydiv.style('color', 'white');
    }}

image(img, b, a);
  a = a - 0.5;
  if (a < 0) {
    a = height;
  }
  b = b - 0.5;
  if (b < 0) {
    b = width;
  }
//var vol = mic.getLevel();

//textSize(vol*windowWidth/5);
textSize(12 + (mouseX / width)*72);
text('Hello World', 100, 90);
fill(0, 102, 153);
image(pimg, mouseX, mouseY);

}
