const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];


const startBtn = document.querySelector('.start');
const stopBtn = document.querySelector('.stop');
const DELAY = 1000;
let intervalId = null;

startBtn.addEventListener('click', start);
stopBtn.addEventListener('click', stop);

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

function randomBodyColor() {
  document.body.style.backgroundColor = colors[randomIntegerFromInterval(0, colors.length)] 
}

function start() {
  intervalId = setInterval(randomBodyColor, DELAY);
  startBtn.disabled = true;
}

function stop() {
  clearInterval(intervalId);
  startBtn.disabled = false;
}

