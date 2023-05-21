
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var ball;
var ball1;
var ground;
var wall;
var wall1;
var rock;
function setup()
{
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

  var ground_options = {
    isStatic:true
  }

  var ball_options = {
    restitution:1.5
  }
  var ball1_options = {
    restitution:1
  }
  var rock_options = {
    restitution:0.75
  }
  ground = Bodies.rectangle(200, 390, 400, 20, ground_options);
  World.add(world, ground);

  wall = Bodies.rectangle(250, 200, 200, 20, ground_options);
  World.add(world, wall)

  wall1 = Bodies.rectangle(50, 200, 20, 400, ground_options);
  World.add(world, wall1)

  ball = Bodies.circle(100, 10, 15, ball_options);
  World.add(world, ball);

  ball1 = Bodies.circle(300, 10, 15, ball1_options);
  World.add(world, ball1);

  rock = Bodies.circle(50, 10, 15, rock_options);
  World.add(world, rock);

  rectMode(CENTER);
  ellipseMode(RADIUS)


}

function draw() 
{
  background(51);
  Engine.update(engine);
  ellipse(ball.position.x, ball.position.y, 15);
  ellipse(ball1.position.x, ball1.position.y, 15);
  ellipse(rock.position.x, rock.position.y, 15);
  rect(ground.position.x, ground.position.y, 400, 20);
  rect(wall.position.x, wall.position.y, 150, 10);
  rect(wall1.position.x, wall1.position.y, 10, 100);
 
}

