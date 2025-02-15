const playListContainerTag = document.getElementsByClassName("playListContainer")[0];
const audioTag = document.getElementsByClassName("audioTag")[0];
const currentAndTotalTimeTag = document.getElementsByClassName("currentAndTotalTime")[0];
const currentProgressTag = document.getElementById("currentProgress");
const playButtonTag = document.getElementsByClassName("fa-circle-play")[0];
const pauseButtonTag = document.getElementsByClassName("fa-pause")[0];
const previousButtonTag = document.getElementsByClassName("fa-backward-step")[0];
const nextButton = document.getElementsByClassName("fa-forward-step")[0];


const tracks = [
    { trackId: "./music/track1.mp3", trackItem: "One Direction - 8 letter" },
    { trackId: "./music/track2.mp3", trackItem: "One Direction - Night Changes" },
    { trackId: "./music/track3.mp3", trackItem: "One Direction - What make your beautiful" },
    { trackId: "./music/track4.mp3", trackItem: "Jennie - You and Me" }
]

for (let i = 0; i < tracks.length; i++) {
    const trackTag = document.createElement("div");
    trackTag.addEventListener("click", () => {
        currentPlayingIndex=i;
        playSong();
    });

    trackTag.classList.add("trackItem");
    const soundTitle = (i + 1).toString() + ". " + tracks[i].trackItem;
    trackTag.textContent = (soundTitle);
    playListContainerTag.append(trackTag);
}

let duration = 0;
let durationText = "00:00";

audioTag.addEventListener("loadeddata", () => {
    duration = Math.floor(audioTag.duration);
    
    durationText = createMinuteAndSecondText(duration);
});

audioTag.addEventListener("timeupdate", () => {
    const currentTime = Math.floor(audioTag.currentTime);
    const currentTimeText = createMinuteAndSecondText(currentTime);
    const currentTimeTextAndDurationText = currentTimeText + " / " + durationText;
    currentAndTotalTimeTag.textContent = currentTimeTextAndDurationText;
    updateCurrentProgress(currentTime);
});

const updateCurrentProgress = (currentTime) => {
    const currentProgressWidth = (500 / duration) * currentTime;
    currentProgressTag.style.width = currentProgressWidth.toString() + "px";
};

const createMinuteAndSecondText = (totalSecond) => {
    const minutes = Math.floor(totalSecond / 60);
    const seconds = totalSecond % 60;

    const minuteText = minutes < 10 ? "0" + minutes.toString() : minutes;
    const secondText = seconds < 10 ? "0" + seconds.toString() : seconds;
    return minuteText + " : " + secondText;
};

let currentPlayingIndex = 0;
isPlaying = false;
playButtonTag.addEventListener("click", () => {
    const currentTime = Math.floor(audioTag.currentTime);
    isPlaying = true;
    if (currentTime === 0) {
        playSong();
    } else {
        audioTag.play();
        updatePlayAndPauseButton();
    }
});

pauseButtonTag.addEventListener("click", () => {
    isPlaying = false;
    audioTag.pause();
    updatePlayAndPauseButton();

});

previousButtonTag.addEventListener("click", () => {
    if (currentPlayingIndex === 0) {
        return;
    } else {
        currentPlayingIndex -= 1;
        playSong();
        
    }
});

nextButton.addEventListener("click", () => {
    if (currentPlayingIndex === tracks.length - 1) {
        return;
    } else {
        currentPlayingIndex += 1;
        playSong();
    }
});


const updatePlayAndPauseButton = () => {
    if (isPlaying) {
        playButtonTag.style.display = "none";
        pauseButtonTag.style.display = "inline";
    } else {
        playButtonTag.style.display = "inline";
        pauseButtonTag.style.display = "none";
    }
};

const playSong =()=>{
    const songIdToPlay = tracks[currentPlayingIndex].trackId;
    audioTag.src = songIdToPlay;
    audioTag.play();
    isPlaying=true;
    updatePlayAndPauseButton();
}