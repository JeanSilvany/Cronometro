const minutos = document.getElementById("minutos");
const segundos = document.getElementById("segundos");
const milesimos = document.getElementById("milesimos");
const init = document.getElementById("init");
const stop = document.getElementById("stop");
const clear = document.getElementById("clear");

let minutes = 0;
let seconds = 0;
let tens = 0;
let intervalMinutes = null;
let intervalSeconds = null;
let intervalTens = null;
let newTimer = true;

const btnInit = () => {
  if (newTimer === true) {
    newTimer = false;
    intervalMinutes = setInterval(() => {
      minutes++;
      minutos.innerHTML = `0${minutes}:`;
      if (minutes > 9 && minutes < 60) {
        minutos.innerHTML = `${minutes}:`;
      }
    }, 60000);

    intervalSeconds = setInterval(() => {
      seconds++;
      segundos.innerHTML = `0${seconds}:`;
      if (seconds > 9 && seconds < 60) {
        segundos.innerHTML = `${seconds}:`;
      }
      if (seconds === 59) {
        seconds = 0 - 1;
      }
    }, 1000);
    intervalTens = setInterval(() => {
      tens++;
      milesimos.innerHTML = `0${tens}`;
      if (tens > 9 && tens < 100) {
        milesimos.innerHTML = `${tens}`;
      }
      if (tens === 99) {
        tens = 0;
      }
    }, 10);
  }
};

const btnStop = () => {
  if (newTimer === false) {
    newTimer = true;
    clearInterval(intervalMinutes);
    clearInterval(intervalSeconds);
    clearInterval(intervalTens);
  }
};

const btnClear = () => {
  if (newTimer === true) {
    minutes = 0;
    seconds = 0;
    tens = 0;
    minutos.innerHTML = "00:";
    segundos.innerHTML = "00:";
    milesimos.innerHTML = "00";
  }
};
