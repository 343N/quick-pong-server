
var wHeight = window.innerHeight;
var wWidth = window.innerWidth;
var nmb = new SSNum(200, 5, 10, 10);

function setup(){


  createCanvas(wWidth, wHeight);


}


function draw(){

  background(128);
  nmb.show();

}
