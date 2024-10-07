// Adds an event listener to the window to detect keyboard input
window.addEventListener('keydown', function () {
    play(event.key.toUpperCase());
});

// Keyboard keys vs. music notes
// Q  2  W  3  E  4  R  T  6  Y  7  U  I  9  O  0  P  -  [  ]
// F F#  G  G# A  A# B  C  C# D  D# E  F  F# G  G# A  A# B  C
const fScale = [
    "Q", "W", "E", "4", "T", "Y", "U", "I", "U", "Y", "T", "4", "E", "W", "Q"
]
const gScale = [
    "W", "E", "R", "T", "Y", "U", "9", "O", "9", "U", "Y", "T", "R", "E", "W"
]
const aScale = [
    "E", "R", "6", "Y", "U", "9", "0", "P", "0", "9", "U", "Y", "6", "R", "E"
]
const bScale = [
    "R", "6", "7", "U", "9", "0", "-", "[", "-", "0", "9", "U", "7", "6", "R"
]
const cScale = [
    "T", "Y", "U", "I", "O", "P", "[", "]", "[", "P", "O", "I", "U", "Y", "T"
]

// Adds an event listener to each of the scale buttons 
// so that when clicked the corresponding scale gets played 
document.getElementById("scale1").addEventListener("click", () => { playScales(fScale); });
document.getElementById("scale2").addEventListener("click", () => { playScales(gScale); });
document.getElementById("scale3").addEventListener("click", () => { playScales(aScale); });
document.getElementById("scale4").addEventListener("click", () => { playScales(bScale); });
document.getElementById("scale5").addEventListener("click", () => { playScales(cScale); });

// Plays the scale that's passed through the notes parameter
function playScales(notes) {
    let i = 0;
    songInterval = setInterval(function () { 
        play(notes[i]);
        if (i < notes.length) {
            i++; // If not at the end of the scale, play the next note
        } else {
            clearInterval(songInterval); // If at the end of the scale, stop the cycle
        }
    }, 300); // Cycles every 0.3s

}

// Plays the audio for the key given
function play(key) {
    // select the HTML audio file in correspondence to the key
    const audio = document.querySelector(`audio[data-key="${key}"]`); 
    // select the HTML div element in correspondence to the key
    const keyElement = document.querySelector(`.key[data-key="${key}"]`);
    if (!audio) return;

    // tells CSS to make the key looked pressed down
    keyElement.classList.add('active'); 
    // plays the audio from the start
    audio.currentTime = 0;
    audio.play();

    setTimeout(() => { // tells CSS to make the key look unpressed again
        keyElement.classList.remove('active');
    }, 200);
}

// Metronome code:
var metAudio = new Audio('/audio/met.wav');
var slider = document.getElementById("myRange");
var output = document.getElementById("value");
var checkbox = document.querySelector('input[type="checkbox"]');

slider.oninput = function () {
    output.innerHTML = this.value; // displays the value of the slider
}

checkbox.addEventListener('change', function () {
    if (checkbox.checked) { // if the metronome is switched on
        MetroInterval = setInterval(function () { // repeatedly plays the metronome audio
            metAudio.currentTime = 0;
            metAudio.play(); 
        }, ((60 / slider.value) * 1000)); // cycles at a speed dependent on the slider value
    } else {
        clearInterval(MetroInterval); 
    }
});



