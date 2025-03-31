let img01;
let img02;
let img03;
let img04;
let img05;
let img06;
let state = 0;

function setup() {
  createCanvas(393, 852);
  img01 = loadImage('01_NavBar.png');
  img02 = loadImage('02_AdBanner.png');
  img03 = loadImage('03_Product.png');
  img04 = loadImage('04_GNB.png');
  img05 = loadImage('05_ai_icon.png');
  img06 = loadImage('06_green.png');
}

function draw() {
  background(225);
  
  if(state == 0){
  image(img01, 0, 0, 393,128);
  image(img02, 0, 128, 393,284);
  image(img03, 0, 412, 393,440);
  image(img04, 0, 764, 393,88);
  image(img05, 320,688,60,60);
  }else if(state == 1){
  image(img01, 0, 0, 393,128);
  image(img02, 0, 128, 393,284);
  image(img03, 0, 412, 393,440);
  image(img06, 0, 612, 393,152);
  image(img04, 0, 764, 393,88);
  image(img05, 320,688,60,60);
  }
  
}

function mouseClicked(){
  if(mouseX >= 320 && mouseX <=380){
    if(mouseY >= 688 && mouseY <=748){
      if(state == 0){
        state = 1;
      }else if(state == 1){
        state = 0;
      }
    }
  }
}