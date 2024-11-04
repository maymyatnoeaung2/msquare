// Stopwatch DOM 

const container = document.getElementsByClassName("container")[0];
const stopWatchTag = document.getElementsByClassName("stopWatch")[0];
const btnContainerTag = document.getElementsByClassName("btnContainer")[0];
const startButton = document.getElementsByClassName("startButton")[0];
const pauseButton = document.getElementsByClassName("pauseButton")[0];
const continueButton = document.getElementsByClassName("continueButton")[0];
const restartButton = document.getElementsByClassName("restartButton")[0];
const stopButton = document.getElementsByClassName("stopButton")[0];
const minisecondTag = document.getElementsByClassName("minisecond")[0];

let seconds = 0, minutes = 0, hours = 0, miniseconds = 0;

const startTime = () => {
    miniseconds += 1;
    // seconds += 1;
    if (miniseconds === 1000) {
        miniseconds = 0;
        seconds += 1;
        if (seconds === 60) {
            seconds = 0;
            minutes += 1;
            if (minutes === 60) {
                minutes = 0
                hours += 1;
            }
        }
    }
    // stopWatchTag.textContent = hours + ":" + minutes + ":" + seconds;
    const secondText = seconds < 10 ? "0" + seconds.toString() : seconds;
    const minuteText = minutes < 10 ? "0" + minutes.toString() : minutes;
    const hourText = hours < 10 ? "0" + hours.toString() : hours;
    const miniText = miniseconds <99 ? "00" + miniseconds.toString() :"0"+ miniseconds.toString();
    stopWatchTag.textContent = hourText + ":" + minuteText + ":" + secondText;
    minisecondTag.textContent = miniText;
}

// const miniTime = () => {
// miniseconds += 1;
// if(miniseconds ===1000 ){
//     miniseconds += 1;
// }
// minisecond.textContent= miniseconds;
// }

let intervalTag;
let miniIntervalTag;

startButton.addEventListener("click", () => {
    // clearInterval(intervalTag);
    intervalTag = setInterval(startTime, 1);
    // miniIntervalTag = setInterval(miniTime, 1);
});

pauseButton.addEventListener("click", () => {
    clearInterval(intervalTag);
});

continueButton.addEventListener("click", () => {
    clearInterval(intervalTag);
    intervalTag = setInterval(startTime, 1);
});

restartButton.addEventListener("click", () => {
    seconds = 0, minutes = 0, hours = 0;

});


stopButton.addEventListener("click", () => {
    seconds = 0, minutes = 0, hours = 0;
    // stopWatchTag.textContent="00 :"+"00 :"+"00";
})

