/* Get our Elements*/
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');


/* Build out functions*/

// handles the play and pause of the video
function togglePlay() {
  if(video.paused) {
    video.play();
  } else {
    video.pause();
  }
}

// switches the play & pause buttons based on the event listener
function updateButton() {
  const icon = this.paused ? '►' : '❚ ❚';
  toggle.textContent = icon;

}

function skip() {
  console.log('skipping');
}

/* Hook up the event listners*/
// onClick, the video will begin playing
video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);


toggle.addEventListener('click', togglePlay);
skipButtons.forEach(button => button.addEventListener('click', skip));
