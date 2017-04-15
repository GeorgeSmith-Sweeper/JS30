let countdown;

function timer(seconds) {
  // figures out when the timer started,
  // uses static 'now' Method
  const now = Date.now()
  const then = now + seconds * 1000;
  //console.log({now, then});

  countdown = setInterval(() => {
    const secondsLeft = Math.round((then - Date.now()) / 1000);
    // check if we should stop the interval
    if (secondsLeft < 0) {
      clearInterval(countdown);
      return;
    }
    console.log(secondsLeft)
  }, 1000)
}
