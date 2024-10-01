
window.addEventListener('keydown', function () {
    const audio = document.querySelector(`audio[data-key="${event.key.toUpperCase()}"]`);
    const key = document.querySelector(`.key[data-key="${event.key.toUpperCase()}"]`);
    if (!audio) return;

    key.classList.add('active');
    audio.currentTime = 0;
    audio.play();

    setTimeout(() => {
        key.classList.remove('active');
    }, 100);


});
