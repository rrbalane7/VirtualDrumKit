function activateKey(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const drumKey = document.querySelector(`.drum[data-key="${e.keyCode}"]`);
    if (!audio) return;
    audio.currentTime = 0;
    audio.play()
    drumKey.classList.add("key-pressed");
    drumKey.addEventListener("transitionend", e => e.target.classList.remove("key-pressed"));

}


window.addEventListener("keydown", activateKey)





