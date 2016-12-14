
  function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
    // prevents the function from running if there is no matching div
    if (!audio) return;
    // resets the sound
    audio.currentTime = 0;
    audio.play();
    // adds the CSS class 'playing'
    key.classList.add('playing');
  }

  function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    this.classList.remove('playing');
  }
  const keys = document.querySelectorAll('.key');
  keys.forEach(key => key.addEventListener('transitionend', removeTransition))
  window.addEventListener('keydown', playSound);
