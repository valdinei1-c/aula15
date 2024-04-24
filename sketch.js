function setup() {
  createCanvas(900, 300);
  background("blue");
}

function draw() {
  stroke("blue");//alterandoa cor da borda
  fill("red");//altera cor de preenchimento do desenho

   
if(mouseIsPressed){
   rect(mouseX, mouseY, 40,40);
}
 }