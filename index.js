// Detecting Button Press

var numberOfDrumButtons = document.querySelectorAll(".drum").length;


for (var i = 0; i<numberOfDrumButtons; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var buttonInnerHTML = this.innerHTML;

        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);

       }); 
}


// Detecting Keyboard Press

    document.addEventListener("keydown", function(event) {        

        makeSound(event.key);
        buttonAnimation(event.key);

    });

    function makeSound(key) {  

        switch (key) {
        case "q":
            var crash = new Audio("sounds/antimage.mp3");
            crash.play();
        
            break;

        case "w":
            var kickBass = new Audio("sounds/axe.mp3");
            kickBass.play();
            break;

        case "e":
            var snare = new Audio("sounds/hoodwink.mp3");
            snare.play();
            break;

        case "a":
            var tom1 = new Audio("sounds/invoker.mp3");
            tom1.play();
            break;

        case "s":
            var tom2 = new Audio("sounds/pudge.mp3");
            tom2.play();
            break;

        case "d":
            var tom3 = new Audio("sounds/rubick.mp3");
            tom3.play();
            break;
       
        case "z":
            var tom4 = new Audio("sounds/sniper.mp3");
            tom4.play();
            break;

        default:
            break;
       }
    
    }


function buttonAnimation(event)  {

    var activeButton = document.querySelector("." + event);
    
    activeButton.classList.add("pressed");

    setTimeout(function() {
        activeButton.classList.remove("pressed"); 
    }, 2500);
}


//   var audio = new Audio("sounds/snare.mp3");
// audio.play(); 