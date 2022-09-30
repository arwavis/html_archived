'use strict';

// Selecting Elements
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1'); // Fetching the data using elementID
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
// Starting conditions
// score0El.textContent = 0;
// score1El.textContent = 0;
// diceEl.classList.add('hidden');

// const scores = [0, 0];
// let current_score = 0;
// let activePlayer = 0;
// let playing = true;

let scores, current_score, activePlayer, playing;

const init = function() {
    scores = [0, 0];
    current_score = 0;
    activePlayer = 0;
    playing = true;

    score0El.textContent = 0;
    score1El.textContent = 0;
    current0El.textContent = 0;
    current1El.textContent = 0;

    diceEl.classList.add('hidden');
    player0El.classList.remove('player--winner');
    player1El.classList.remove('player--winner');
    player0El.classList.add('player--active');
    player1El.classList.remove('player--active');
};
init();
const switchPlayer = function() {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    current_score = 0;
    activePlayer = activePlayer == 0 ? 1 : 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
};
// Rolling Dice functionality

btnRoll.addEventListener('click', function() {
    if (playing) {
        // Generate a Random Dice Roll
        const dice_random = Math.trunc(Math.random() * 6 + 1);

        diceEl.classList.remove('hidden');
        diceEl.src = `dice-${dice_random}.png`; // using the src attribute, then dice- is the common image name , We will then insert the
        // random dice number to it.
        //check for the rolled 1, if true, switch the next player
        if (dice_random !== 1) {
            current_score += dice_random;
            //console.log(activePlayer);
            document.getElementById(`current--${activePlayer}`).textContent =
                current_score;

            // current0El.textContent = current_score; // TODO: change later
        } else {
            //console.log(activePlayer);
            // document.getElementById(`current--${activePlayer}`).textContent = 0;
            // current_score = 0;
            // activePlayer = activePlayer == 0 ? 1 : 0;
            // player0El.classList.toggle('player--active');
            // player1El.classList.toggle('player--active');
            // current0El.textContent = current_score;
            switchPlayer();
        }
    }
});

btnHold.addEventListener('click', function() {
    if (playing) {
        // Add Current score to the active players score
        scores[activePlayer] += current_score;
        document.getElementById(`score--${activePlayer}`).textContent =
            scores[activePlayer];

        //check if players score is already atleast greater than 100
        if (scores[activePlayer] >= 100) {
            playing = false;
            // If Yes finish the game
            diceEl.classList.add('hidden');
            document
                .querySelector(`.player--${activePlayer}`)
                .classList.add('player--winner');
            document
                .querySelector(`.player--${activePlayer}`)
                .classList.remove('player--active');
        }

        // If not switch the player
        else {
            switchPlayer();
        }
    }
});

// Here you dont have to call init() in the listener event just the value init is fine and Javascript will call the funciton init()
btnNew.addEventListener('click', init);