// 🔹 Get DOM elements
let timerDisplay = document.querySelector('.timerDisplay');
let stopBtn = document.getElementById('stopBtn');
let startBtn = document.getElementById('startBtn');
let resetBtn = document.getElementById('resetBtn');

// 🔹 Timer variables
let msec = 0;
let secs = 0;
let mins = 0;

// 🔹 Holds the setInterval ID; null means timer is stopped
let timerId = null;

// 🔸 START button logic
startBtn.addEventListener('click', () => {
    // Prevent starting multiple timers
    if (timerId !== null) return;

    // Start the timer and store its ID
    timerId = setInterval(startTimer, 10);
});

// 🔸 STOP button logic
stopBtn.addEventListener('click', () => {
    clearInterval(timerId); // Stop the timer
    timerId = null;         // Reset the ID to mark it as "stopped"
});

// 🔸 RESET button logic
resetBtn.addEventListener('click', () => {
    clearInterval(timerId); // Stop the timer
    timerId = null;         // Reset the ID

    // Reset all timer values
    msec = secs = mins = 0;

    // Update the display to initial state
    timerDisplay.innerHTML = `00 : 00 : 00`;
});

// 🔹 Main timer function: called every 10ms
function startTimer() {
    msec++;

    // If 100 x 10ms = 1 second passed
    if (msec === 100) {
        msec = 0;
        secs++;

        // If 60 seconds passed, increase minute
        if (secs === 60) {
            secs = 0;
            mins++;
        }
    }

    // Add leading zero for display formatting
    let msecString = msec < 10 ? `0${msec}` : msec;
    let secsString = secs < 10 ? `0${secs}` : secs;
    let minsString = mins < 10 ? `0${mins}` : mins;

    // Show updated time
    timerDisplay.innerHTML = `${minsString} : ${secsString} : ${msecString}`;
}
