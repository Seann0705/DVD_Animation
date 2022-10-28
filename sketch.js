let dvd;
var speed = 10;
var x = 0;
var y;
var colorX = 0;
var colorY = 0;
var colorZ = 0;

function preload(){  
  dvd = loadImage('DVD.png');
}

function setup() {
  createCanvas(800,480);
}

function draw() {
  background(0);
  
  y = 5/8 * x;
   
  if( x == width - 140  || y == height - 60)
  {
    colorX = random(0,255);
    colorY = 255;
    colorZ = random(0,255);
    speed = -4;
  }

  if( x == -8  || y == 0)
  {
    
    colorX = 255;
    colorY = random(0,225);
    colorZ = random(0,255);
    speed = 4;
  }

  tint(colorX, colorY, colorZ);
  image(dvd, x, y);
  
  x = x + speed;
}