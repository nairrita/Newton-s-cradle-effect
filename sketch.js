const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
const Constraint = Matter.Constraint

var engine, world;
var bobDiameter = 40;
function setup(){
  createCanvas(400,400)
  engine = Engine.create()
  world = engine.world

  roof = new Roof(200,100,300,50)
  bob1 = new Bob(100,300,20,20)
  bob2 = new Bob(180,300,20,20)
  bob3 = new Bob(240,300,20,20)
  bob4 = new Bob(300,300,20,20)
  bob5 = new Bob(360,300,20,20)
  rope1 = new Rope(bob1.body,roof.body,-80,0)
  rope2=new Rope(bob2.body,roof.body,-40,0)
	rope3=new Rope(bob3.body,roof.body,0,0)
	rope4=new Rope(bob4.body,roof.body,40,0)
	rope5=new Rope(bob5.body,roof.body,80,0)
  
}

function draw(){
  background(255)
  Engine.update(engine)
text("Press Space to give a cradle effect",200,50)

  roof.display();
  bob1.display()
  bob2.display()
  bob3.display()
  bob4.display()
  bob5.display()
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();


}


function keyPressed() {
  if (keyCode === 32) {
    Matter.Body.setStatic(bob1.body,false)
    Matter.Body.setStatic(bob2.body,false)
    Matter.Body.setStatic(bob3.body,false)
    Matter.Body.setStatic(bob4.body,false)
    Matter.Body.setStatic(bob5.body,false)
Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-45,y:-10})
  }
}
