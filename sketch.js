
var backgroundImg;
var player;
var enemy1, enemy2,enemy3,enemy4, enemy5;
var playerbullet;
var playerbulletGroup;
var enemyBullet;
var enemyBulletGroup;

function preload() {

backgroundImg = loadImage("images/Spacebg.png");
playerImg = loadImage("images/Playership.png");
playerbulletImg = loadImage("images/Playerbullet.png")
enemyImg = loadImage("images/Enemyship.png");
enemyBulletImg = loadImage("images/Enemybullet.png");

}

function setup() {
  createCanvas(1000,600);

  player = createSprite(500, 525,50,50);
  player.addImage(playerImg);
  player.scale = 0.8;
  
  
  enemy1= createSprite(100,60,50,50);
  enemy1.addImage(enemyImg);
  enemy1.scale = 0.4

  enemy2= createSprite(300, 60,50,50);
  enemy2.addImage(enemyImg);
  enemy2.scale = 0.4


  enemy3= createSprite(500, 60,50,50);
  enemy3.addImage(enemyImg);
  enemy3.scale = 0.4

  enemy4= createSprite(700, 60,50,50);
  enemy4.addImage(enemyImg);
  enemy4.scale = 0.4

  enemy5= createSprite(900, 60,50,50);
  enemy5.addImage(enemyImg);
  enemy5.scale = 0.4

playerbulletGroup = new Group();
enemyBulletGroup = new Group();         

  




}

function draw() {
  background(backgroundImg);  




if(keyIsDown(LEFT_ARROW)){
  player.x = player.x-5;
}

if(keyIsDown(RIGHT_ARROW)){
  player.x = player.x+5;
}

if(keyDown("space")){
  spawnPlayerBullet();
 
}

if(frameCount% 80==0){
  spawnBullets();
}

if(playerbulletGroup.isTouching(enemy1)){
  enemy1.destroy();
  destroyBullet(enemy1);

 
}else if(playerbulletGroup.isTouching(enemy2)){
  enemy2.destroy();
  destroyBullet(enemy2)
  
}else if(playerbulletGroup.isTouching(enemy3)){
  enemy3.destroy();
  destroyBullet(enemy3)
  
}else if(playerbulletGroup.isTouching(enemy4)){
  enemy4.destroy();
  destroyBullet(enemy4)
  
}else if(playerbulletGroup.isTouching(enemy5)){
 enemy5.destroy(); 
 destroyBullet(enemy5)

}

  drawSprites();
}




function spawnBullets(){
  // position of bullet will be assigned to the corresponding position of the enemy(random event)
  var rand = Math.round(random(1,2));
   if(rand==1){
   // bullet1 =  createSprite(enemy1.x,enemy1.y,5, 20);
   spawnEnemyBullet(enemy1);
   //bullet2=  createSprite(enemy3.x,enemy3.y,5, 20);
   spawnEnemyBullet(enemy3);
    //bullet3=  createSprite(enemy5.x,enemy5.y,5,20);
    spawnEnemyBullet(enemy5);
   }

   else if(rand == 2){
   // bullet1 =  createSprite(enemy2.x,enemy2.y,5, 20);
   spawnEnemyBullet(enemy2);
    //bullet2 =  createSprite(enemy4.x,enemy4.y,5,20);
    spawnEnemyBullet(enemy4);
    //bullet3 =  createSprite(enemy1.x,enemy1.y,5,20);
    spawnEnemyBullet(enemy1);
   }
   
   

   /*bullet1.velocityY = Math.round(random(5,10));
   bullet1.velocityX = Math.round(random(-5,8));
   bullet2.velocityY = Math.round(random(5,10));
   bullet2.velocityX = Math.round(random(-5,8));
   bullet3.velocityX = Math.round(random(-5,8));
   bullet3.velocityY = Math.round(random(5,10));*/
}

function spawnPlayerBullet(){
  if(frameCount % 10 == 0){
  playerbullet = createSprite(player.x,player.y,5,20);
  playerbullet.addImage(playerbulletImg);
  playerbullet.scale=0.2;
  playerbullet.velocityY= -5;
  playerbulletGroup.add(playerbullet);
  }                  
}

function spawnEnemyBullet(enemy){
  enemyBullet = createSprite(enemy.x,enemy.y,5,10);
  enemyBullet.addImage(enemyBulletImg);
  enemyBullet.scale=0.2;
  enemyBullet.velocityX = Math.round(random(-5,8));
  enemyBullet.velocityY = Math.round(random(5,8));
  enemyBulletGroup.add(enemyBullet);
}

function destroyBullet(enemy){
  enemyBulletGroup.destroyEach();
}










