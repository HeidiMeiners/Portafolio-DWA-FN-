var colors=["red","blue","green","yellow"];
var order=[];
var clicked=[];
var started = false;
var level = 0;

$(document).keydown(function(){
    console.log("hola si sirvo");
    
    if (!started) {
        $("#level-title").text("Level " + level);
        nextSequence();
        started = true;
        
      }
});

$(".btn").click(function(){
    var userclick= $(this).attr("id");
    clicked.push(userclick);
    console.log("User pattern", clicked );
    
    playSound(userclick);
    animatePress(userclick);

    checkAnswer(clicked.length-1);
});

function checkAnswer(nivel){
    
    if (order[nivel]===clicked[nivel]){
        console.log("order nivel", order[nivel], " clicked nivel", clicked[nivel]);
 
        if(clicked.length===order.length){
            setTimeout(function () {
                nextSequence();
              }, 1000);
            }
        } else{
            playSound("wrong");
            $("body").addClass("game-over");
            $("#level-title").text("Game Over, Press Any Key to Restart");

            setTimeout(function () {
                $("body").removeClass("game-over");
            }, 200);

            startOver();
        }
    }


function nextSequence() {
    clicked=[]
    level++;
    $("#level-title").text("Level " + level);
    var ran=Math.floor(Math.random()*4);
    var random=colors[ran];
    order.push(random);

    console.log("UPDATE ", order);
    
    $("#"+random).fadeIn(100).fadeOut(100).fadeIn(100);
    
    playSound(random);
}
function animatePress(botonelegido){
    $("#"+botonelegido).addClass("pressed");
    setTimeout(function () {
        $("#" + botonelegido).removeClass("pressed");
      }, 100);
}

function playSound(ncolor){
    let audio=new Audio("sounds/"+ ncolor +".mp3");
    audio.play();
}





function startOver() {
    level = 0;
    order = [];
    started = false;
  }