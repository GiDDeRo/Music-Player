const song = document.getElementById("song");
const progress = document.getElementById("progress");
const play_pause = document.getElementById("play_pause");
const ctrlIcon = document.querySelector("#play_pause > i");
const link = document.querySelector("a")
const footer = document.querySelector("footer")

song.onloadedmetadata = function () {
    progress.max = song.duration;
    progress.value = song.currentTime;
}

song.pause();


play_pause.addEventListener("click", e=> {
    if(ctrlIcon.classList.contains("fa-play")) {
        song.play();
        ctrlIcon.classList.remove("fa-play");
        ctrlIcon.classList.add("fa-pause");
    } else if (ctrlIcon.classList.contains("fa-pause")) {
        song.pause();
        ctrlIcon.classList.remove("fa-pause");
        ctrlIcon.classList.add("fa-play");
        progress.value = song.currentTime;
    }
})

if(song.play()) {
    setInterval(()=> {
        progress.value = song.currentTime;
    }, 500)
}

progress.onchange = function () {
    console.log("yes")
    song.currentTime = progress.value;
    song.play()
    ctrlIcon.classList.remove("fa-play");
        ctrlIcon.classList.add("fa-pause");
}

footer.addEventListener("mouseover", e=> {
    link.style.color = "white";
})

footer.addEventListener("mouseout", e=> {
    link.style.color = "black";
})
