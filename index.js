// Detecting Button Press

var numberOfDrumButtons = document.querySelectorAll(".drum").length;


for (var i = 0; i<numberOfDrumButtons; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var buttonInnerHTML = this.innerHTML;

        makeSound(buttonInnerHTML);

       }); 
}


// Detecting Keyboard Press

    document.addEventListener("keydown", function(keyboard) {        

       makeSound(keyboard.key);

    });

    function makeSound(key) {  

        switch (key) {
        case "1":
            var crash = new Audio("sounds/antimage.mp3");
            crash.play();
        
            break;

        case "2":
            var kickBass = new Audio("sounds/axe.mp3");
            kickBass.play();
            break;

        case "3":
            var snare = new Audio("sounds/hoodwink.mp3");
            snare.play();
            break;

        case "4":
            var tom1 = new Audio("sounds/invoker.mp3");
            tom1.play();
            break;

        case "5":
            var tom2 = new Audio("sounds/pudge.mp3");
            tom2.play();
            break;

        case "6":
            var tom3 = new Audio("sounds/rubick.mp3");
            tom3.play();
            break;
       
        case "7":
            var tom4 = new Audio("sounds/sniper.mp3");
            tom4.play();
            break;

        default:
            break;
       };
    
    
    };





//   var audio = new Audio("sounds/snare.mp3");
// audio.play(); 