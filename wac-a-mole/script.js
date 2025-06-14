const res = document.getElementById('result');
const timestamp = document.getElementById('timeleft');
const squares = document.querySelectorAll('.square');
const button = document.getElementById('btn');

let score = 0;
let time = 59;
let moleInterval = null;
let countdownInterval = null;
let gameRunning = false;

let image = document.createElement('img');
image.setAttribute('class', 'mole');
image.setAttribute('src', 'diglett.png'); // Ensure diglett.png is in the same folder

function randomSquare() {
    squares.forEach(square => square.innerHTML = ''); // Clear all squares
    let randomPosition = squares[Math.floor(Math.random() * squares.length)];
    randomPosition.appendChild(image);
}

function startGame() {
    score = 0;
    res.innerText = score;
    time = 59;
    timestamp.innerText = time;

    moleInterval = setInterval(randomSquare, 500);
    countdownInterval = setInterval(countdown, 1000);

    gameRunning = true;
    button.innerText = 'Stop';
    button.style.backgroundColor = 'red';
}

function stopGame() {
    clearInterval(moleInterval);
    clearInterval(countdownInterval);
    squares.forEach(square => square.innerHTML = ''); // Clear mole
    gameRunning = false;
    button.innerText = 'Start';
    button.style.backgroundColor = 'lime';
}

button.addEventListener('click', function () {
    if (gameRunning) {
        stopGame();
    } else {
        startGame();
    }
});

// Score on square click if mole is inside
squares.forEach(square => {
    square.addEventListener('click', function () {
        if (square.contains(image) && gameRunning) {
            score++;
            res.innerText = score;
            square.innerHTML = ''; // optional: hide mole after click
        }
    });
});

function countdown() {
    timestamp.innerText = time;
    time--;

    if (time < 0) {
        stopGame();
        alert('⏰ Time\'s up! Your score is: ' + score);
    }
}




  

