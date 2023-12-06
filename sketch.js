const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body=Matter.Body;
const Constraint=Matter.Constraint
var constrainedlog
var slingshot
var platform
var engine, world;
var box1, pig1;
var backgroundImg
var gameState="onSling"
var bg="Assets/bg.png"
var score=0
var birds=[]

function preload(){
getBgimg()
birdFlySound=loadSound("Assets/bird_flying.mp3")
pigSnortSound=loadSound("Assets/pig_snort.mp3")
birdSelectSound=loadSound("Assets/bird_select.mp3")
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
//examples of diffrent types of data in javascript
//string 
var string="this is a string"
console.log(string)
//number-integers and float
var num1=100
var num2=100.12
console.log(num1,num2)
//boolean
var bool=true
console.log(bool)
//undefined
var object
console.log(object)
//null
object=null
console.log(object)
// 1-dimension arrays
var array1=[1,2,3,4,5,6,7,8,9,0]
console.log(array1)
var array2=["krishna",12,true]
console.log(array2)
//2-dimension arrays
var array3=[[11,12],[13,14,15],[15,16]]
console.log(array3[1])
console.log(array3)
console.log(array3[2][1])
array3.push("krishna")
console.log(array3)
array3.pop()
console.log(array3)
//Json(javascript object notation) -reffer restitution here also we can store multiple values
//API(application programming interface)

    ground = new Ground(600,height,1200,20)
    platform=new Ground(150,305,300,170)
    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1 = new Pig(810, 350);
    log1 = new Log(810,260,300, PI/2);
    constrainedlog=new Log(230,180,80,PI/2)

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pig3 = new Pig(810, 220);

    log3 =  new Log(810,180,300, PI/2);

    box5 = new Box(810,160,70,70);
    log4 = new Log(760,120,150, PI/7);
    log5 = new Log(870,120,150, -PI/7);

    bird = new Bird(200,50);
    bird2= new Bird(150,170);
    bird3 = new Bird(100,170);
    bird4 = new Bird(50,170);
    birds.push(bird4)
    birds.push(bird3)
    birds.push(bird2)
    birds.push(bird)
    slingshot=new Slingshot(bird.body,{x:190,y:50})

}

function draw(){
  if(backgroundImg)
    background(backgroundImg);
    Engine.update(engine);
    // console.log(box2.body.position.x);
    // console.log(box2.body.position.y);
    // console.log(box2.body.angle);
    textSize(30)
    fill ("white")
    text("Score:"+ score,width-300,50)
    box1.display();
    box2.display();
    ground.display();
    platform.display();
    pig1.display();
    pig1.score()
    log1.display();

    box3.display();
    box4.display();
    pig3.display();
    pig3.score()
    log3.display();

    box5.display();
    log4.display();
    log5.display();
    constrainedlog.display();

    bird.display();
    bird2.display();
    bird3.display();
    bird4.display();
    slingshot.display();
}
function mouseDragged(){
  // if(gameState !== "launched"){
    Body.setPosition(birds[birds.length-1].body,{x:mouseX,y:mouseY})
    Body.applyForce(birds[birds.length-1].body,birds[birds.length-1].body.position,{x:5,y:5})
  birdSelectSound.play()
    // } 
      }

function mouseReleased(){
  slingshot.fly()
  birdFlySound.play()
  gameState="launched"
  birds.pop()
 }

function keyPressed(){
  if(keyCode===32 && gameState==="launched"){ 
    Body.setPosition(birds[birds.length-1].body,{x:200,y:50})
    slingshot.attach(birds[birds.length-1].body)
    gameState="onSling"
    birdSelectSound.play()
  }
}

async function getBgimg(){
    var response=await fetch("https://worldtimeapi.org/api/timezone/asia/Kolkata")
    var responseJson=await response.json()
    var datetime=responseJson.datetime
    var hour=datetime.slice(11,13)
    if(hour>=06 && hour<=17){
      bg="Assets/bg.png"
    }else if(hour>17){
      bg="Assets/bg2.jpg"
    }
    backgroundImg=loadImage(bg)
}