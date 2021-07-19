var path,pathImg;
var jaxon,jaxon_running;
var energyDrink;
var coinImage;
var rightInvisibleGround;
var leftInvisibleGround;
var bombImage;
function preload(){
  //pre-load images
 jaxon_running = loadAnimation("Runner-1.png","Runner-2.png")

 pathImg = loadImage("path.png")

 energyDrinkImage = loadImage("energyDrink.png");
 coinImage = loadImage("coin.png");
 bombImage = loadImage("bomb.png");



}

function setup(){
  createCanvas(400,400);
 

  path = createSprite(200,200);
  path.addImage(pathImg);
  path.velocityY=4;
  path.scale=1.4;
  jaxon = createSprite(250,250,40,60)
  jaxon.addAnimation("running",jaxon_running)
  jaxon.scale=0.1;

  rightInvisibleGround = createSprite(390,200,10,400);
  rightInvisibleGround.visible= false;
  leftInvisibleGround = createSprite(10,200,10,400);
  leftInvisibleGround.visible = false;

}

function draw() {
  background(180);
 
 

 console.log(jaxon.X);
 spawnBombs();
 spawnCoins();
 spawnEnergydrinks();

 jaxon.x=mouseX;
 jaxon.collide(rightInvisibleGround);
 jaxon.collide(leftInvisibleGround);



 if (path.y> 400){

  path.y= height/2;
 }  

 
drawSprites();
}

function spawnBombs(){
  if(frameCount%100===0){
    bomb= createSprite(300,10,40,60)
    bomb.x=Math.round(random(375,10))
    bomb.addImage(bombImage)
    bomb.scale=0.1;
    bomb.velocityY=4
    bomb.lifetime=144;
  bomb.depth=jaxon.depth;
  jaxon.depth=jaxon.depth+1;
  }}
  
    function spawnCoins(){
      if(frameCount%50===0){
        coin= createSprite(300,10,40,60)
        coin.x=Math.round(random(380,10))
        coin.addImage(coinImage)
        coin.velocityY=4;
        coin.scale=0.3;
        coin.lifetime=144;
      coin.depth=jaxon.depth;
      jaxon.depth=jaxon.depth+1;
    }}
     function spawnEnergydrinks(){
       if(frameCount%200===0){
          energyDrink= createSprite(300,10,40,60)
          energyDrink.x=Math.round(random(380,10))
          energyDrink.addImage(energyDrinkImage)
          energyDrink.scale=0.1;
          energyDrink.velocityY=4
          energyDrink.lifetime=144;
          energyDrink.depth=jaxon.depth;
      jaxon.depth=jaxon.depth+1;
        }}
          
