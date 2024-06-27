let [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
let timerRef = document.querySelector('.timerDisplay');
let int = null;
let isRunning = false;

// Start button function
document.getElementById('startTimer').addEventListener('click', () => {
    if (!isRunning) {
        isRunning = true;
        int = setInterval(displayTimer, 10); // Update every 10 milliseconds
    }
});

function displayTimer() {
    milliseconds += 10;
    if (milliseconds == 1000) {
        milliseconds = 0;
        seconds++;
        if (seconds == 60) {
            seconds = 0;
            minutes++;
            if (minutes == 60) {
                minutes = 0;
                hours++;
            }
        }
    }
    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;
    let ms = milliseconds < 10 ? "00" + milliseconds : milliseconds < 100 ? "0" + milliseconds : milliseconds;

    timerRef.innerHTML = `${h} : ${m} : ${s}`;
}

// Stop button function
document.getElementById('stopTimer').addEventListener('click', () => {
    clearInterval(int);
    isRunning = false;
});

// Reset button function
document.getElementById('resetTimer').addEventListener('click', () => {
    clearInterval(int);
    isRunning = false;
    [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
    timerRef.innerHTML = '00 : 00 : 00';
});
