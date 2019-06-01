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
mydiv = createP("I started programming BASIC when I was a kid in the 80s on my Commodore 64 and enjoyed using DOS on my mate's IBM compatible. In the early 90s, I was a teenager and I lost interest in computers until about 1995. I started a job in a small manufacturing workshop and was reintroduced to Windows 95 and then bought my first IBM compatible computer. I was mainly used Windows until 2012, and then I was introduced to Linux. Ever since then I have been fascinated with all sorts of retro computers (Atari is my favourite) and operating systems. <br><br>I restarted programming in C language and though I am not proficent in any programming language I am now able to read and understand a few programming languages. Probably my favourite is JavaScript, because of it's use on the web and portability. I think the main reason why I love programming is because it involves problem solving, which goes hand in hand with my job (Occupational Therapy) and my other hobby (Brazilian Jui Jistsu). I have included a few p5.js tricks in this page. In the menu is a link to my Github projects, Doing Occupations site and a few games that I've made.<br><br><br><br><br><br><br><br>");
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
