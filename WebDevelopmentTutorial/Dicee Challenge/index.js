/**
 * We are generating a variable and in that variable we are passing randam number using Math.random method
 * We then mutilpy the Math.random  with 6 to get the vallu till six , Note Math.random will generate only numbers between 0 -1
 * then we are rounding off using Math.floor and add it by 1 so 0 is elliminated and 6 is added in the result.
 */
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
//randomNumber1 = randomNumber1 * 6;
//console.log(number);
//randomNumber1 = Math.floor(randomNumber1) + 1;

/**
 * We are using concatination methon to get the random dice image from the first valraible randomNumber1 
 */
var randomDiceImage = "dice" + randomNumber1 + ".png";

/**
 * We create another variable so we can use it in the html file.
 * Output will be /images/dice1.png -> dice6.png
 */

var randomImageSource = "images/" + randomDiceImage;

/**
 * Now we will be changing the source attribute of image1 
 */

//var image1 = document.querySelectorAll("img")[0];
//image1.setAttribute("src", randomImageSource);

document.querySelectorAll("img")[0].setAttribute("src", randomImageSource);

/**
 * We will do the same steps for the second dice
 */

var randamNumber2 = Math.floor(Math.random() * 6) + 1;
//var randomDiceImage2 = "dice" + randamNumber2 + ".png";
var randomImageSource2 = "images/dice" + randamNumber2 + ".png"; //Simpiled format rather than using randomDiceImage2 and providing the data. 

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2); //Simpiled format of using setAttribute in a singe line.

/**
 * Using if else we are determining the winner
 */

if (randomNumber1 > randamNumber2) {
    document.querySelector("h1").innerHTML = "🚩Player 1 Wins";
} else if (randamNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins 🚩";
} else
    document.querySelector("h1").innerHTML = "Draw!"