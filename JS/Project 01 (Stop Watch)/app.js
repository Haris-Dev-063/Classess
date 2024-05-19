var hour = 0;
var min = 0;
var sec = 0;
var msec = 0;

var hours = document.getElementById("hour");
var mins = document.getElementById("min");
var secs = document.getElementById("sec");
var msecs = document.getElementById("msec");
var interval;
var button = document.getElementById("btn");

function timer() {
  msec++;
  msecs.innerHTML = msec;
  if (msec == 100) {
    sec++;
    secs.innerHTML = sec;
    msec = 0;
  } else if (sec == 10) {
    min++;
    mins.innerHTML = min;
    sec = 0;
  } else if (min == 2) {
    hour++;
    hours.innerHTML = hour;
    min = 0;
  }
}

function start() {
  interval = setInterval(timer, 10);
  button.disabled = true;
}

function stop() {
  clearInterval(interval);

  button.disabled = false;
}

function reset() {
  min = 0;
  hour = 0;
  sec = 0;
  msec = 0;
  mins.innerHTML = min;
  hours.innerHTML = hour;
  secs.innerHTML = sec;
  msecs.innerHTML = msec;
  stop();
}
