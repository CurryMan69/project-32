const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;
var hour;
function preload() {
    // create getBackgroundImg( ) here
    getBackgroundImg(); 
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){
    if(backgroundImg){
    background(backgroundImg);
    }
    

    Engine.update(engine);

    
textSize(50)
    text("time:" + hour, 1000,100 );
    
}



    async function getBackgroundImg(){
        var response = await fetch("http://worldtimeapi.org/api/timezone/Australia/Sydney");
        var responseJSON = await response.json();
    
        var datetime = responseJSON.datetime;
         hour = datetime.slice(11,13);
        
        if(hour>=04 && hour<=06){
            bg = "sunrise1.png";
        }
        else if(hour>=06 && hour<=08){
            bg = "sunrise3.jpg";
        }
        else if(hour>=08 && hour<=010){
            bg = "sunrise5.png";
        }
        else if(hour>=023 && hour<=0){
            bg = "sunset7.png";
        }
        else if(hour>=0 && hour<=03){
            bg = "sunset9.png";
        }
        else {
            bg = "sunset11.png";
    }
    
        backgroundImg = loadImage(bg);
        console.log(backgroundImg);
    }


