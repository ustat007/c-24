const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;


function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(600,700,1200,20)
    box1 = new Box(920,320,70,70);
    box2 = new Box(700,320,70,70);
    box3 = new Box(920,240,70,70);   
    box4 = new Box(700,240,70,70);
    pig1 = new Pig(810,350);
    //PI = 180 degreee PI/2=90 degree
    log1 = new Log(810,260,300,PI/2);
    red = new Bird(100,100);
}
function draw(){
    background("blue");
    Engine.update(engine);
    ground.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    pig1.display();
    log1.display();
    red.display();
}