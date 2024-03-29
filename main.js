var mints = "00";
var seconds = "00";
var tens = "00";
var outputMints = document.querySelector(".mints");
var outputSecond = document.querySelector(".seconds");
var outputTens = document.querySelector(".tens");
var startBtn = document.querySelector(".start");
var stopBtn = document.querySelector(".stop");
var resetBtn = document.querySelector(".reset");
var loading = document.querySelector(".loading");
var Interval;

function dontshowLoading() {
  loading.classList("dont-show");
}
function showLoading() {
    loading.classList("show");
  }
startBtn.addEventListener("click", dontshowLoading);
stopBtn.addEventListener("click" , showLoading)
startBtn.addEventListener("click", () => {
  clearInterval(Interval);
  Interval = setInterval(startTime, 10);
});
stopBtn.addEventListener("click", () => {
  clearInterval(Interval);
});
resetBtn.addEventListener("click", () => {
  clearInterval(Interval);
  mints = "00";
  seconds = "00";
  tens = "00";
  outputMints.innerHTML = mints;
  outputSecond.innerHTML = seconds;
  outputTens.innerHTML = tens;
});

function startTime() {
  tens++;
  if (tens <= 9) {
    outputTens.innerHTML = "0" + tens;
  }
  if (tens > 9) {
    outputTens.innerHTML = tens;
  }
  if (tens > 98) {
    seconds++;
    outputSecond.innerHTML = "0" + seconds;
    tens = "0";
    outputTens.innerHTML = "0" + tens;
  }
  if (seconds > 9) {
    outputSecond.innerHTML = seconds;
  }
  if (seconds > 58) {
    mints++;
    outputMints.innerHTML = mints;
    seconds = "0";
  }
}
