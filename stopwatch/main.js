const startBtn = document.querySelector(".button--start");
const stopBtn = document.querySelector(".button--stop");
const resetBtn = document.querySelector(".button--reset");

let seconds = 0;
let minuts = 0;
let hours = 0;

const stopwatch =  document.querySelector(".stopwatch");

const GetStopwatchText = function () {
    let s = getTimeUnitText(seconds);
    let m = getTimeUnitText(minuts);
    let h = getTimeUnitText(hours);
    let connector = ":";

    return  `${s} ${connector}  ${m}  ${connector}  ${h}`;
} 

const getTimeUnitText = function (timeUnit) {
    let textTimeUnit = "0";
    if (timeUnit >= 10) {
        return textTimeUnit = timeUnit;
    } else {
        return textTimeUnit = textTimeUnit + timeUnit;
    }
}

stopwatch.textContent = GetStopwatchText();


// START
let interval = null;

startBtn.addEventListener ( "click", (e) => {
    interval = setInterval(startStopwatch, 1000);
})


const startStopwatch = function () {
    seconds++;

    if (seconds == 60) {
        seconds = 0;
        minuts++;

        if (minuts == 60) {
            minuts = 0;
            hours++
        }
    }

    stopwatch.textContent = GetStopwatchText();

}

// RESET

resetBtn.addEventListener ( "click", (e) => {
    resetStopwatch()
    clearInterval(interval);
})

const resetStopwatch = function () {
    seconds = 0;
    minuts = 0;
    hours = 0;

    stopwatch.textContent = GetStopwatchText();
}

// STOP

stopBtn.addEventListener( "click", (e) => {
    clearInterval(interval);
})