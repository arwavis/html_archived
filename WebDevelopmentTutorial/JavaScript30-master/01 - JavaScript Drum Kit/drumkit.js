function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if (!audio) return; // Stop the function from running altogether.
    audio.currentTime = 0; //this is going to rewind the audio files when they are played continously.
    audio.play();
    key.classList.add('playing'); // This adds the playing element from style.css (playing)

}


function removeTransition(e) {

    if (e.propertyName !== 'transform') // skip it if its not a transform
        this.classList.remove('playing')

}

const keys = document.querySelectorAll('.key')
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

document.addEventListener('keydown', playSound);