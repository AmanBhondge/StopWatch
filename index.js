let timeEl = document.getElementById("time");
let startBtn = document.getElementById("start-btn");
let stopBtn = document.getElementById("stop-btn");
let resetBtn = document.getElementById("reset-btn");

let startTime = 0;
let currentTime = 0;
let intervalId = null;
let isRunning = false;
let storedTime = 0; 

startBtn.addEventListener("click", startTimer);
stopBtn.addEventListener("click", stopTimer);
resetBtn.addEventListener("click", resetTimer);

function startTimer() {
    if (isRunning === false) {
        startTime = new Date().getTime() - storedTime;
        intervalId = setInterval(updateTime, 1000);
        isRunning = true;
        startBtn.disabled = true;
        stopBtn.disabled = false;
    }
}

function stopTimer() {
    if (isRunning === true) {
        clearInterval(intervalId);
        storedTime = new Date().getTime() - startTime;
        isRunning = false;
        startBtn.disabled = false;
        stopBtn.disabled = true;
    }
}

function resetTimer() {
    clearInterval(intervalId);            
    currentTime = 0;
    storedTime = 0; 
    timeEl.textContent = "00:00:00";
    startBtn.disabled = false;
    stopBtn.disabled = true;
    isRunning = false;
}

function updateTime() {
    currentTime = new Date().getTime() - startTime;
    let hours = Math.floor(currentTime / 3600000);
    let minutes = Math.floor((currentTime % 3600000) / 60000);
    let seconds = Math.floor((currentTime % 60000) / 1000);
    timeEl.textContent = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
}

function pad(number) {
    return (number < 10 ? "0" : "") + number;
}