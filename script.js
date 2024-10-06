
window.addEventListener('keydown', function () {
    play(event.key.toUpperCase());
});

var button = document.getElementById("song1").addEventListener("click", playSong1);

function playSong1() {
    // Q  2  W  3  E  4  R  T  6  Y  7  U  I  9  O  0  P  -  [  ]
    // F F#  G  G# A  A# B  C  C# D  D# E  F  F# G  G# A  A# B  C
    const notes1 = [
        "R", "U", "O", "R", "U", "O", "R", "U", "O", "R", "U", "O",
        "R", "U", "O", "R", "U", "O", "R", "U", "O", "R", "U", "O",
        "T", "U", "O", "T", "U", "O", "T", "I", "P", "T", "I", "P",
        "R", "7", "P", "R", "U", "O", "R", "U", "9", "T", "7", "9",
    ]

    const notes = [
        "T", "U", "O"
    ]

    for (i = 0; i < notes.length; i++) {
        play(notes[i]);
    }

}

function play(key) {
    const audio = document.querySelector(`audio[data-key="${key}"]`);
    const keyElement = document.querySelector(`.key[data-key="${key}"]`);
    if (!audio) return;

    keyElement.classList.add('active');
    audio.currentTime = 0;
    audio.play();

    setTimeout(() => {
        keyElement.classList.remove('active');
    }, 200);
}

var metAudio = new Audio('/audio/met.wav');
var slider = document.getElementById("myRange");
var output = document.getElementById("value");
var checkbox = document.querySelector('input[type="checkbox"]');


slider.oninput = function () {
    output.innerHTML = this.value;
}

checkbox.addEventListener('change', function () {
    if (checkbox.checked) {
        MetroInterval = setInterval(function () {
            metAudio.currentTime = 0;
            metAudio.play();
        }, ((60 / slider.value) * 1000));
    } else {
        clearInterval(MetroInterval);
    }
});



