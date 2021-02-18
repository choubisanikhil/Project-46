var DarkBeast, Gun, Bullet, Ground, Background, groundImg;
var Rock1, Rock2, Rock3, Rock4, Rock5, Rock6, Rock7, Rock8, Rock9, rocks, RocksGroup;
var ZombiesGroup, zombies, Zomb1, DZomb1, Zomb2, DZomb2, Zomb3, DZomb3, Zomb4, DZomb4, Zomb5, DZomb5, Zomb6, DZomb6;

function preload(){
    groundImg = loadImage("Background.jpg");

    Rock1 = loadImage("Rock1.png");
    Rock2 = loadImage("Rock2.png");
    Rock3 = loadImage("Rock3.png");
    Rock4 = loadImage("Rock4.png");
    Rock5 = loadImage("Rock5.png");
    Rock6 = loadImage("Rock6.png");
    Rock7 = loadImage("Rock7.png");
    Rock8 = loadImage("Rock8.png");
    Rock9 = loadImage("Rock9.png");

    Zomb1 = loadImage("Z1(1.1).png");
    Zomb2 = loadImage("Z1(1.2).png");
    Zomb3 = loadImage("Z1(1.3).png"); 
    Zomb4 = loadImage("Z1(1.4).png");
    Zomb5 = loadImage("Z1(1.5).png");
    Zomb6 = loadImage("Z1(1.6).png");
    Zomb7 = loadImage("Z1(1.7).png");
    Zomb8 = loadImage("Z1(1.8).png");
}

function setup() {
    createCanvas(1000,500);

    DarkBeast = createSprite(100,404,50,80);
    DarkBeast.shapeColor="red";

    Gun = createSprite(120,404,20,10);
    Gun.shapeColor ="aqua";

    Bullet = createSprite(130,404,10,5);
    Bullet.shapeColor="purple";

    Ground = createSprite(500,455,1000,20);
    Ground.shapeColor="gold";
    Ground.visible = false;

    Background = createSprite(1000,230,1100,20);
    Background.shapeColor="blue";
    Background.addImage(groundImg);
    Background.scale = 1.5;
    Background.x = Background.width/2;

    Background.depth = DarkBeast.depth;
    DarkBeast.depth = DarkBeast.depth + 1;
}

function draw() {
    background(0);
    
    Background.velocityX = -4;

    Gun.y = DarkBeast.y;
    Bullet.y = DarkBeast.y;

    if (Background.x < 0){
        Background.x = Background.width/2;
      }

    if(keyDown("space")&& DarkBeast.y >= 404) {
        DarkBeast.velocityY = -12;
    } 
    DarkBeast.velocityY = DarkBeast.velocityY + 0.5
    DarkBeast.collide(Ground);
   
    if(keyDown("enter")) {
       Bullet.velocityX = 20;
    } 

    if(Bullet.x > 1000) {
       Bullet.x = 130;
       Bullet.velocityX = 0;
     } 

    RocksGroup = createGroup();
    ZombiesGroup = createGroup();

    Zombies();
    Rocks();
    drawSprites();
}

function Rocks(){
    if (frameCount % 200 === 0){
      var rocks = createSprite(1100,420,50,50);
      rocks.velocityX = -6;
       var rand = Math.round(random(1,9));
       switch(rand) {
         case 1: rocks.addImage(Rock1);
                 break;
         case 2: rocks.addImage(Rock2);
                 break;
         case 3: rocks.addImage(Rock3);
                 break;
         case 4: rocks.addImage(Rock4);
                 break;
         case 5: rocks.addImage(Rock5);
                 break;
         case 6: rocks.addImage(Rock6);
                 break;
         case 7: rocks.addImage(Rock7);
                 break;
         case 8: rocks.addImage(Rock8);
                 break;
         case 9: rocks.addImage(Rock9);
                 break;
         default: break;
       }
       rocks.scale = 0.5;
       rocks.lifetime = 1100;
       rocks.depth = Background.depth + 1;
       RocksGroup.add(rocks);

}}

function Zombies() {
     if (frameCount % 500 === 0) {
        var zombies = createSprite(1100,410,50,10);
        zombies.shapeColor = "gold";
        zombies.y = Math.round(random(150,400));
        var rand = Math.round(random(1,8));
        switch(rand) {
                case 1: zombies.addAnimation(Zomb1);
                        break;
                case 2: zombies.addAnimation(Zomb2);
                        break;
                case 3: zombies.addAnimation(Zomb3);
                        break;
                case 4: zombies.addAnimation(Zomb4);
                        break;
                case 5: zombies.addAnimation(Zomb5);
                        break;
                case 6: zombies.addAnimation(Zomb6);
                        break;
                default: break;
        }
        zombies.scale = 2;
        zombies.velocityX = -8;
        zombies.lifetime = 1200;
        ZombiesGroup.add(zombies);
}}
