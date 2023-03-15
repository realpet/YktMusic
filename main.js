
player = document.querySelector('audio');

platBtn = document.getElementById("play");

platBtn.onclick = play;


function play() {
    player.play();
    platBtn.onclick = pause;
}

function pause() {
    player.pause();
    platBtn.onclick = play;
}
