'use strict';
/*
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = '🎊 🎉 Correct Number!';
console.log(document.querySelector('.message').textContent);

// if i need to the change the content in number and score

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

//for input value use value to read or to set a value

console.log(document.querySelector('.guess').value);
document.querySelector('.guess').value = 3;
console.log(document.querySelector('.guess').value);
*/

// click event

let secret_number = Math.floor(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

//refactoring the message

const displayMessage = function(message) {
    document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value); // converted the string to number
    console.log(guess, typeof guess);

    // When there is no input
    if (!guess) {
        // document.querySelector('.message').textContent = '⛔️ No Number inputted!';
        displayMessage('⛔️ No Number inputted!');

        // When the guess is equal to secret number
    } else if (guess === secret_number) {
        //document.querySelector('.message').textContent = '🎉 Correct Number';
        displayMessage('🎉 Correct Number');

        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        document.querySelector('.number').textContent = secret_number;
        if (score > highScore) highScore = score;
        document.querySelector('.highscore').textContent = highScore;

        // Guess is wrong
    } else if (guess !== secret_number) {
        if (score > 1) {
            //document.querySelector('.message').textContent =
            //  guess > secret_number ? '📈 Too High!' : '📉 Too Low!';
            displayMessage(guess > secret_number ? '📈 Too High!' : '📉 Too Low!');
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            //document.querySelector('.message').textContent = '💥 You lost the game!';
            displayMessage('💥 You lost the game!');
            document.querySelector('.score').textContent = 0;
        }
    }

    // When the guess is too high
    /*   
                                        else if (guess > secret_number) {
                                          if (score > 1) {
                                            document.querySelector('.message').textContent = '📈 Too High!';
                                            score--;
                                            document.querySelector('.score').textContent = score;
                                          } else {
                                            document.querySelector('.message').textContent =
                                              '💥 You lost the game!';
                                            document.querySelector('.score').textContent = 0;
                                          }

                                          // When the guess is too low.
                                        } else if (guess < secret_number) {
                                          if (score > 1) {
                                            document.querySelector('.message').textContent = '📉 Too Low!';
                                            score--;
                                            document.querySelector('.score').textContent = score;
                                          } else {
                                            document.querySelector('.message').textContent =
                                              '💥 You lost the game!';
                                            document.querySelector('.score').textContent = 0;
                                          }
                                        }
                                        */
});

document.querySelector('.again').addEventListener('click', function() {
    score = 20;
    secret_number = Math.floor(Math.random() * 20) + 1;

    //document.querySelector('.message').textContent = 'Start guessing...';
    displayMessage('Start guessing...');
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
});