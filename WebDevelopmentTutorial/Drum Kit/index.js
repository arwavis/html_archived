/**
 * here .drum is the clase for the buttons so the action is only applied for the buttons that contain class drum.
 * here the variable numberOfDrums identifies the length of the drum
 * macke sure to use querySelectorAll.
 * and in the function mention the querySelectorAll with the [index] 
 */


// This part of code helps detect when the click is done
var noOfDrums = document.querySelectorAll(".drum").length;


for (var index = 0; index < noOfDrums; index++) {
    document.querySelectorAll("button")[index].addEventListener("click", function() {

        /**
         * this . represents a constructor to get the iner HTML
         * Using Switch the get the different innerHTML to play different sound
         */

        var buttonInnerHTML = this.innerHTML;
        // We are using one function makeSound has the switch statement and calling the buttonInnerHTML to make the sound when clicked
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);


    });
}

document.addEventListener("keydown", function(event) {

    // We are using the function makesound that has the switch statment and calling the event.key to make the sound when the appropriate sound is created.
    makeSound(event.key);
    buttonAnimation(event.key);
});


function makeSound(key) {

    switch (key) {

        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;

        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;

        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;

        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;

        case "j":
            var snare = new Audio("sounds/snare.mp3")
            snare.play();
            break;
        case "k":
            var crash = new Audio("sounds/crash.mp3")
            crash.play();
            break;
        case "l":
            var kick = new Audio("sounds/kick-bass.mp3")
            kick.play();
            break;
        default:
            console.log(buttonInnerHTML);

    }
}

// created a function for animation and calling this function inside clik and key press 

function buttonAnimation(currentKey) {

    /**'
     * this is similar calling the button class .w like document.queryselector(.w).
     * .pressed is a CSS element that we will call here to apply the animation.
     *  */

    var activeButton = document.querySelector("." + currentKey)
        //Use classlist method to get the CSS element.
    activeButton.classList.add("pressed");

    // Using timeout method to revert the above pressed method. Example setTimeout(function(){ alert("Hello"); }, 3000); https://www.w3schools.com/jsref/met_win_settimeout.asp
    // 100 is the time.
    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 100);
}