var timeDisplayEl = document.querySelector("#timeDisplay");
var startBtnEl = document.querySelector("#startBtn");
var pauseBtnEl = document.querySelector("#pauseBtn");
var resetBtnEl = document.querySelector("#resetBtn");

let startTime = 0;
let elapsedTime = 0;
let currentTime = 0;
let paused = true;
let intervalId;
let hrs = 0;
let mins = 0;
let secs = 0;

startBtnEl.addEventListener("click", () => {
    if (paused) {
        paused = false;
        startTime = Date.now() - elapsedTime;
        intervalId = setInterval(updateTime, 1000);
    }
});

pauseBtnEl.addEventListener("click", () => {
    if (!paused) {
        paused = true;
        // elapsedTime = Date.now() - startTime;
        clearInterval(intervalId);
    }
});

resetBtnEl.addEventListener("click", () => {
    paused = true;
    clearInterval(intervalId);
    startTime = 0;
    elapsedTime = 0;
    currentTime = 0;
    hrs = 0;
    mins = 0;
    secs = 0;
    timeDisplayEl.textContent = "00:00:00";
});

function updateTime() {
    elapsedTime = Date.now() - startTime;
    secs = Math.floor((elapsedTime/1000)%60);
    mins = Math.floor((elapsedTime/(1000*60))%60);
    hrs = Math.floor((elapsedTime/(1000*60*60))%60);

    if (secs<10) {
        secs = `0${secs}`;
    }

    if (mins<10) {
        mins = `0${mins}`;
    }

    if (hrs<10) {
        hrs = `0${hrs}`;
    }
    
    timeDisplayEl.textContent = `${hrs}:${mins}:${secs}`;

}