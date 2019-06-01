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
myheading1.style('color', 'black');
myheading2.style('color', 'black');
myheading3.style('color', 'black');
myheading4.style('color', 'black');
mylist1.style('color', 'black');
mylist2.style('color', 'black');
mylist3.style('color', 'black');
mylist4.style('color', 'black');
mylist5.style('color', 'black');
mylist6.style('color', 'black');
mylist7.style('color', 'black');
mylist8.style('color', 'black');
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
myheading1 = createElement('h1', "I'm Neil Woodroffe");
myheading2 = createElement('h3', "Qualifications:");
createElement('ul');
mylist1 = createElement('li', 'Bachelor of Occupational Therapy', 'Bachelor');
mylist2 = createElement('li', 'Bachelor of Science (Sport and Exercise)');
myheading3 = createElement('h3', 'Current Employment:');
mylist3 = createElement('li', 'Occupational Therapist at Queensland Health');
mylist4 =createElement('li', 'CEO of Doing Occupations');
myheading4 = createElement('h3', 'Hobbies:');
mylist5 = createElement('li', 'Brazilian Jiu Jitsu');
mylist6 = createElement('li', 'Strength and Conditioning');
mylist7 = createElement('li', 'Computer Programming and Coding');
mylist8 = createElement('li', 'Retro Computer Enthusiast');
mydiv = createP("<br>");
//mydiv.style('color', 'black');
}

function draw(){
background(255); 
  if (mouseIsPressed) {
    if (mouseButton === LEFT) {
      background(0);
      myheading1.style('color', 'white');
      myheading2.style('color', 'white');
      myheading3.style('color', 'white');
      myheading4.style('color', 'white');
      mylist1.style('color', 'white');
      mylist2.style('color', 'white');
      mylist3.style('color', 'white');
      mylist4.style('color', 'white');
      mylist5.style('color', 'white');
      mylist6.style('color', 'white');
      mylist7.style('color', 'white');
      mylist8.style('color', 'white');
      mydiv.style('color', 'white');
    }}

image(img, b, a,);
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
image(pimg, mouseX, mouseY, pimg.width * 1.5, pimg.height * 1.5);

}
