let x = 200;
let y = 200;
let xspeed = 220;
let yspeed = -30;

function preload() {
  fontA = loadFont('type_writer.ttf');
  

}


function setup() {
  createCanvas(windowWidth, windowHeight); 
}

function draw() {
  background(0);

 
textSize(60);
text('TEXT.',40, 340); 
  


  
  circle(x, y, 100, 70, 1000);
 
  
  if (x > width) {
      xspeed = xspeed *-1;
  fill(random(255),random(255),random(255));
    textStyle(BOLD);
    textFont(fontA);
       
textSize(30);
text('THIS IS NOT A TEST',30, 270); 
  
  
   

  }
    else if(x < 0){
      xspeed = xspeed *-1;
  fill(random(255),random(255),random(255));
      textStyle(ITALIC);
     textFont(fontA);
      

  }
  
  if (y > height) {
    yspeed = yspeed *-1;
    fill(random(255),random(255),random(255));
    textStyle(BOLD)
     textFont(fontA);
      textSize(60);
text('HACKED',40, 410); 

  }
  else if(y < 0){
    yspeed = yspeed *-1;
    fill(random(255),random(255),random(255))
    
  }

  x = x + xspeed;
  y = y + yspeed;
}
