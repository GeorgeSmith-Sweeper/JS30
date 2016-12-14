const secondHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
  const now = new Date();

  // handles the second hand
  const seconds = now.getSeconds();
  const secondDegrees = ((seconds / 60) * 360) + 90;
  secondHand.style.transform = `rotate(${secondDegrees}deg)`;

  // handles the minute hand
  const mins = now.getMinutes();
  const minDegrees = ((mins / 60) * 360) + 90;
  minHand.style.transform = `rotate(${minDegrees}deg)`;

  // handles the hour hand
  const hours = now.getHours();
  const hourDegrees = ((hours / 12) * 360) + 90;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;

}

setInterval(setDate, 1000);
