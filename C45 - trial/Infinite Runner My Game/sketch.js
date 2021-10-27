var Outside, OutsideIMG
var  Start1,Start2, StartIMG1,StartIMG2
var GameState = "Start"
var playbutton, Play
var bk
function preload(){
  OutsideIMG=loadImage("Images/outside.jpeg")

  StartIMG1=loadImage("Images/Store BG.jpeg")
  StartIMG2=loadImage("Images/OutsideBg.png")

  playbutton=loadImage("Images/play button.jpeg")
}

function setup() {
  createCanvas(2000,800);
  bk= createSprite(1000,400,2000,800)
  //bk.shapeColor="black"

  Start1=createSprite(400,400,1000,800)
  Start1.shapeColor="blue"
  Start1.addImage(StartIMG1)
  Start1.scale=1.69

  Start2=createSprite(3300,400,1000,800)
  Start2.shapeColor="red"
  Start2.addImage(StartIMG2)
  Start2.scale=3

 //Start.addImage(StartIMG)
 // Start.visible = false
 
  
  //Outside.addImage(OutsideIMG)
  

  Play=createSprite(950,400,60,40)
  Play.addImage(playbutton)
  Play.scale=0.5
  Play.visible=true
}

function draw() {
background("black")
  
   drawSprites();
   if(GameState==="Start"){
    if(mousePressedOver(Play)){
      Play.visible=false
     // Start1.visible=false
     // Start2.visible=false
    
      GameState="Play"   
    }
   }
   if(GameState==="Play"){
     Start2.scale=3.5
      Start1.velocityX=-9
      Start2.velocityX=-9
     if(Start2.x< 0 ){
      Start2.x=Start2.width/2+100
     }
   }

}

