let countdown;
const timerDisplay = document.querySelector('.display__time-left');

function timer(seconds) {
  // figures out when the timer started,
  // uses static 'now' Method
  const now = Date.now()
  const then = now + seconds * 1000;
  displayTimeLeft(seconds);

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
  // displays the time
  timerDisplay.textContent = display;
}

