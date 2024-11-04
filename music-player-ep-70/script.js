// DOM Object Model
const playListContainerTag = document.getElementsByClassName("playListContainer")[0];
const audioTag = document.getElementsByClassName("audioTag")[0];
const currentAndTotalTimeTag = document.getElementsByClassName("currentAndTotalTime")[0];
const currentProgress = document.getElementById("currentProgress");
const playButtonTag = document.getElementsByClassName("fa-circle-play")[0];
const pauseButtonTag = document.getElementsByClassName("fa-pause")[0];
const previousButtonTag = document.getElementsByClassName("fa-backward-step")[0];
const nextButtonTag = document.getElementsByClassName("fa-forward-step")[0];

const tracks = [
    { trackId: "./music/track1.mp3", trackItem: "OneTag Direction - 8 letter" },
    { trackId: "./music/track2.mp3", trackItem: "One Direction - Night Changes" },
    { trackId: "./music/track3.mp3", trackItem: "One Direction - What make your beautiful" },
    { trackId: "./music/track4.mp3", trackItem: "Jennie - You and Me" }
];

for (let i = 0; i < tracks.length; i++) {
    const trackTag = document.createElement("div");
    trackTag.addEventListener("click", () => {
        const soundTrack = tracks[i].trackId;
        audioTag.src = soundTrack;
        audioTag.play();
        isPlaying = true;
        updatePlayAndPauseButton();
        currentPlayingIndex = i;
    })
    trackTag.classList.add("trackItem");
    const soundTitle = (i + 1).toString() + ". " + tracks[i].trackItem;
    trackTag.textContent = soundTitle;
    playListContainerTag.append(trackTag);
}
let duration = "0";
let durationText = "00:00";
audioTag.addEventListener("loadeddata", () => {
    duration = Math.floor(audioTag.duration);
    // const minutes = Math.floor(duration / 60);
    // const seconds = duration % 60;
    // const minuteText = minutes < 10 ? "0" + minutes.toString : minutes;
    // const secondText = seconds < 10 ? "0" + seconds.toString() : seconds;
    durationText = createMinuteAndSecondText(duration);
});

audioTag.addEventListener("timeupdate", () => {
    currentTime = Math.floor(audioTag.currentTime);
    createMinuteAndSecondText(currentTime);
    const currentTimeText = createMinuteAndSecondText(currentTime);
    currentAndTotalTimeTag.textContent = currentTimeText + " / " + durationText;
    updateCurrentProgress(currentTime);
});

const updateCurrentProgress = (currentTime) => {
    const currentProgressWidth = (500 / duration) * currentTime;
    currentProgress.style.width = currentProgressWidth.toString() + "px";

};

const createMinuteAndSecondText = (totalSecond) => {
    const minutes = Math.floor(totalSecond / 60);
    const seconds = totalSecond % 60;
    const minuteText = minutes < 10 ? "0" + minutes.toString() : minutes;
    const secondText = seconds < 10 ? "0" + seconds.toString() : seconds;
    return minuteText + " : " + secondText;
};

let currentPlayingIndex = 0;
let isPlaying = false;
playButtonTag.addEventListener("click", () => {
    isPlaying = true;
    const currentTime = Math.floor(audioTag.currentTime);//497.67
    if (currentTime === 0) {
        const soundIdToPlay = tracks[currentPlayingIndex].trackId;
        audioTag.src = soundIdToPlay;
        audioTag.play();
        updatePlayAndPauseButton();

    } else {
        audioTag.play();
        updatePlayAndPauseButton();
    }

});

const updatePlayAndPauseButton = () => {
    if (isPlaying) {
        playButtonTag.style.display = "none";
        pauseButtonTag.style.display = "inline";
    } else {
        pauseButtonTag.style.display = "none";
        playButtonTag.style.display = "inline";
    }
};

pauseButtonTag.addEventListener("click", () => {
    isPlaying = false;
    audioTag.pause();
    updatePlayAndPauseButton();
});

previousButtonTag.addEventListener("click", () => {
    isPlaying=true;
    updatePlayAndPauseButton;
    if (currentPlayingIndex === 0) {
        return;
    }
    currentPlayingIndex -= 1;
        let soundIdToPlay = tracks[currentPlayingIndex].trackId;
        audioTag.src = soundIdToPlay;
        audioTag.play();
     
});

nextButtonTag.addEventListener("click", () => {
    isPlaying=true;
    updatePlayAndPauseButton;
    if (currentPlayingIndex === tracks.length - 1) {
        return;
    } 
    currentPlayingIndex += 1;
        let soundIdToPlay = tracks[currentPlayingIndex].trackId;
        audioTag.src = soundIdToPlay;
        audioTag.play();
      
});