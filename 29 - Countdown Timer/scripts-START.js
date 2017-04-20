let countdown;
const timerDisplay = document.querySelector('.display__time-left');
const endTime = document.querySelector('display__end-time');

function timer(seconds) {
  // figures out when the timer started,
  // uses static 'now' Method
  const now = Date.now()
  const then = now + seconds * 1000;
  displayTimeLeft(seconds);
  displayEndTime(then)

  countdown = setInterval(() => {
    const secondsLeft = Math.round((then - Date.now()) / 1000);
    // check if we should stop the interval
    if (secondsLeft < 0) {
      clearInterval(countdown);
      return;
    }
    // display it
    displayTimeLeft(secondsLeft);
  }, 1000)
}


function displayTimeLeft(seconds) {
  // Math.floor is required to get rid of the,
  // extra from division
  const minutes = Math.floor(seconds / 60);
  const remainderSeconds = seconds % 60;
  // ternary adds a zero as padding to the remaining time
  const display = `${minutes}:${remainderSeconds < 10 ? '0' : '' }${remainderSeconds}`;
  document.title = display;
  // displays the time
  timerDisplay.textContent = display;
}

function displayEndTime(timestamp) {
  const end = new Date(timestamp);
  const hour = end.getHours();
  const minutes = end.getMinutes();
  endTime.textContent = `Be Back at ${hour}:${minutes}`;
}
