const startStpBtn = document.querySelector('#startStpButton'); 
const resetBtn = document.querySelector('#resetBtn');

let seconds = 0;
let minutes = 0;
let hours = 0;

let timerInterval = null;
let timerStatus = 'stopped';

function stopWatch() {
    seconds++;
    if (seconds === 60) {
        seconds = 0;
        minutes++;
        if (minutes === 60) {
            minutes = 0;
            hours++;
        }
    }

    let leadingSeconds = seconds < 10 ? "0" + seconds : seconds;
    let leadingMinutes = minutes < 10 ? "0" + minutes : minutes;
    let leadingHours = hours < 10 ? "0" + hours : hours;

    document.getElementById('timer').innerText = `${leadingHours}:${leadingMinutes}:${leadingSeconds}`;
}

startStpBtn.addEventListener('click', function () {
    if (timerStatus === 'stopped') {
        timerInterval = setInterval(stopWatch, 1000);
        startStpBtn.innerHTML = '<i class="fa-solid fa-pause" id="pause"></i>';
        timerStatus = "started";
    } else {
        clearInterval(timerInterval);
        startStpBtn.innerHTML = '<i class="fa-solid fa-play" id="play"></i>';
        timerStatus = "stopped";
    }
});

resetBtn.addEventListener('click', function () {
    clearInterval(timerInterval);
    seconds = 0;
    minutes = 0;
    hours = 0;
    document.getElementById('timer').innerText = "00:00:00";
    startStpBtn.innerHTML = '<i class="fa-solid fa-play" id="play"></i>';
    timerStatus = "stopped";
});
