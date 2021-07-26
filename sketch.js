var garden,rabbit;
var gardenImg,rabbitImg;
var appleImg;
var leaf1, leaf2;
var rand;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  leaf1 = loadImage("leaf.png");
  leaf2 = loadImage("orangeLeaf.png")
}

function setup(){
  
  createCanvas(400,400);
   edges= createEdgeSprites();
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating rabbit
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  
 
  rabbit.collide(edges);
  rabbit.x = mouseX
  
  var rand = Math.round(random(1,2));
    if(rand === 1){
      createApples();
    }
    else
      {
        createLeaves();
      }
  
  drawSprites();
}

function createApples(){
  if (frameCount%80 === 0){
  var apple = createSprite(random(50,350),40,10,10);
  apple.addImage(appleImg);
  apple.scale = 0.1;
  apple.velocityY = 3;
  apple.lifetime = 150; 
  }

  
}

function createLeaves(){
  if (frameCount%80 === 0){
  var leaf = createSprite(random(50,350),40,10,10);
  
  
  var rand = Math.round(random(1,2));
  switch(rand) {
      case 1: leaf.addImage(leaf1);
      break;
      case 2: leaf.addImage(leaf2);
      break;
      default:break;
  }
  leaf.scale = 0.2;
  leaf.velocityY = 3;
  leaf.lifetime = 150;
  }
  
}