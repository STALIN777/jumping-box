var music;
var player;
var surface1 , surface2 , surface3 , surface4;
var edges;
var rand;

 
function preload(){
    music = loadSound("music.mp3");
}
 
 
function setup(){
    canvas = createCanvas(700,600);
    
    player = createSprite(rand,300,30,30);
 
    surface1 = createSprite(80,580,150,20);
    surface2 = createSprite(255,580,150,20);
    surface3 = createSprite(435,580,150,20);
    surface4 = createSprite(615,580,150,20);
   
    player.velocityX=-4;
    player.velocityY=4;


}

function draw()
{
    background("skyblue");
    edges = createEdgeSprites();

    rand = Math.round(random(30,269));
    
    
    
    player.bounceOff(surface1);
    player.bounceOff(surface2);
    player.bounceOff(surface3);
    player.bounceOff(surface4);
    

    

    
    
    surface1.shapeColor="blue";
    surface2.shapeColor="pink";
    surface3.shapeColor="green";
    surface4.shapeColor="red";
    player.shapeColor="white";

    player.bounceOff(edges);
    
    
    
    
    
    

    surf1();
    surf2();

    drawSprites();

}

function surf1()
{
    if(surface1.isTouching(player))
    {
        player.shapeColor="blue";
        player.velocityX=0;
        player.velocityY=0;
    }
}

function surf2()
{
    if (player.isTouching(surface2))
    {
        player.shapeColor="pink";
        music.play();
    }
}