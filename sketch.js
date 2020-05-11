const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constrained = Matter.Constraint;

var engine, world;
var ball;
var ground;
var obstacle;
var obstacle2;
var obstacle3;
var obstacle4;
var obstacle5;
var obstacle6;
var obstacle7;
var score = 0;





function setup(){
    var canvas = createCanvas(1200,600);

    engine = Engine.create();
    world = engine.world;



    ball = new Ball(200,300);
   
   
    hold = new Hold(ball.body,{x:177,y:440});
   
    ground = new Ground(600,height,1550,5);
    obstacle = new Obstacle(800,570,70,70,PI/2);
    obstacle2 = new Obstacle(900,570,70,70,PI/2);
    obstacle3 = new Obstacle(1000,570,70,70,PI/2);
    obstacle4 = new Obstacle(1100,570,70,70,PI/2);
    obstacle5 = new Obstacle(850,500,70,70,PI/2);
    obstacle6 = new Obstacle(950,500,70,70,PI/2);
    obstacle7 = new Obstacle(1050,500,70,70,PI/2);
    obstacle8 = new Obstacle(900,420,70,70,PI/2);
    obstacle9 = new Obstacle(1000,420,70,70,PI/2);
    obstacle10 = new Obstacle(950,347,70,70,PI/2);
    ground2 = new Ground(1060,230,250,5);
    obstacle11 = new Obstacle(1010,160,50,50,PI/2);
    obstacle12 = new Obstacle(1072,160,50,50,PI/2);
    obstacle13 = new Obstacle(1132,160,50,50,PI/2);
    obstacle14 = new Obstacle(1045,110,50,50,PI/2);
    obstacle15 = new Obstacle(1105,110,50,50,PI/2);
    obstacle16 = new Obstacle(1075,60,50,50,PI/2);
    

   
}

function draw(){
    background("lightblue");
    fill("blue");
    textSize(25);
    text("Score : " + score,200,200);
    strokeWeight(6);
    stroke("black")
    fill("brown");
    textSize(30)
    text("Hit the upper level ground blocks to get 10 extra points",150,150);
    Engine.update(engine);


    ball.display();
   

    hold.display();
    ground.display();
    obstacle.display();
    obstacle2.display();
    obstacle3.display();
    obstacle4.display();
    obstacle5.display();
    obstacle6.display();
    obstacle7.display();
    obstacle8.display();
    obstacle9.display();
    obstacle10.display();
    ground2.display();
    obstacle11.display();
    obstacle12.display();
    obstacle13.display();
    obstacle14.display();
    obstacle15.display();
    obstacle16.display();
    obstacle.score();
    obstacle2.score();
    obstacle3.score();
    obstacle4.score();
    obstacle5.score();
    obstacle6.score();
    obstacle7.score();
    obstacle8.score();
    obstacle9.score();
    obstacle10.score();
    obstacle11.score2();
    obstacle12.score2();
    obstacle13.score2();
    obstacle14.score2();
    obstacle15.score2();
    obstacle16.score2();
    
   
}

function keyPressed(){
    if(keyCode === 32){
 
    
    hold.attach(ball.body);
    }
 
}
function mouseDragged(){
    Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});
    
}

function mouseReleased(){
    hold.fly();
    
} 




