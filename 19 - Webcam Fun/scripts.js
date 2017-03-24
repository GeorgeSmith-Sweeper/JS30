const video = document.querySelector('.player');
const canvas = document.querySelector('.photo');
const ctx = canvas.getContext('2d');
const strip = document.querySelector('.strip');
const snap = document.querySelector('.snap');

function getVideo() {
  navigator.mediaDevices.getUserMedia({video: true, audio: false})
    .then(localMediaStream => {
      video.src = window.URL.createObjectURL(localMediaStream);
      video.play();
    })
    .catch(err => {
      console.error(`OHH NOOO`, err);
    })
}


/*
  sets the width and height of the video to the heigh of the canvas element.
  specifies the interval of the drawing on the canvas element
*/
function paintToCanvas() {
  const width = video.videoWidth;
  const height = video.videoHeight;
  canvas.width = width;
  canvas.height = height;

  return setInterval(() => {
    ctx.drawImage(video, 0, 0, width, height);
    let pixels = ctx.getImageData(0, 0, width, height);
    pixels = redEffect(pixels);
  },16);
}

function takePhoto() {

  // plays the sound
  snap.currentTime = 0;
  snap.play();

  // take the data out of the canvas
  const data = canvas.toDataURL('image/jpeg');
  const link = document.createElement('a');
  link.href = data;

  // allows the file to be downloaded with the name handsome
  link.setAttribute('download', 'handsome');
  link.innerHTML = `<img src="${data}" alt="Handsome Man" />`
  strip.insertBefore(link, strip.firstChild);
}

function redEffect(pixels) {
 for(let i = 0; i < pixels.length; i += 4) {
   pixels[i + 0] = pixels.data[i + 0] + 100; // RED
   pixels[i + 1] = pixels.data[i + 1] - 50; // GREEN
   pixels[i + 2] = pixels.data[i + 2] * 0.5; // BLUE
 }
}
getVideo();

video.addEventListener('canplay', paintToCanvas);
