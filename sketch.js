const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

function setup() {
  createCanvas(1000,600);
  engine = Engine.create();
  world = engine.world;

  GROUND = new Ground(500,595,1000,10);
  //column 1
  Box_1 = new Box(700,100,70,70);
  Box_2 = new Box(700,100,70,70);
  Box_3 = new Box(700,100,70,70);
  Box_4 = new Box(700,100,70,70);
  Box_5 = new Box(700,100,70,70);
  Box_6 = new Box(700,100,70,70);
  Box_7 = new Box(700,100,70,70);
  Box_8 = new Box(700,100,70,70);

  //column 2
  Box_9 = new Box(800,100,70,70);
  Box_10 = new Box(800,100,70,70);
  Box_11 = new Box(800,100,70,70);
  Box_12 = new Box(800,100,70,70);
  Box_13 = new Box(800,100,70,70);
  Box_14 = new Box(800,100,70,70);

  //column 3
  Box_15 = new Box(900,100,70,70);
  Box_16 = new Box(900,100,70,70);
  Box_17 = new Box(900,100,70,70);
  Box_18 = new Box(900,100,70,70);
  Box_19 = new Box(900,100,70,70);
  Box_20 = new Box(900,100,70,70);

  BALL = new Ball(500,200,40);

  ROPE = new Rope(BALL.body,{x:500,y:50});

  Engine.run(engine);

}

function draw() {
  background(0);

  GROUND.display();
  Box_1.display();
  Box_2.display();
  Box_3.display();
  Box_4.display();
  Box_5.display();
  Box_6.display();
  Box_7.display();
  Box_8.display();
  Box_9.display();
  Box_10.display();
  Box_11.display();
  Box_12.display();
  Box_13.display();
  Box_14.display();
  Box_15.display();
  Box_16.display();
  Box_17.display();
  Box_18.display();
  Box_19.display();
  Box_20.display();
  ROPE.display();
  BALL.display();
}

function mouseDragged(){
  Matter.Body.setPosition(BALL.body,{x:mouseX,y:mouseY});
}