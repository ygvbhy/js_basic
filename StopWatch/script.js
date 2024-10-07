const appendTens = document.getElementById("tens");
const appendSecond = document.getElementById("seconds");
const btnStart = document.getElementById("start");
const btnStop = document.getElementById("stop");
const btnReset = document.getElementById("reset");

let seconds = 0;
let tens = 0;
let interval;

btnStart.onclick = () => {
  interval = setInterval(startTimer, 10);
};

btnStop.onclick = () => {
  clearInterval(interval);
};

btnReset.onclick = () => {
  tens = seconds = appendTens.innerText = appendSecond.innerText = 0;
};

function startTimer() {
  tens++;

  if (tens > 99) {
    seconds++;
    appendSecond.innerText = seconds;

    tens = 0;
    appendTens.innerText = tens;
  } else {
    appendTens.innerText = tens;
  }
}
