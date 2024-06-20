
function PlayMusic() {
    const audio = new Audio('../audio/song.mp3')

    audio.play()
}

window.onload = PlayMusic()