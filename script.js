const play = document.getElementById('play');
const previous = document.getElementById('prev');
const next = document.getElementById('next');
const time = document.getElementById('current-time');
const duration = document.getElementById('duration');
const audio = document.querySelector('audio');

let isPlaying = false;

// play audio
const playAudio = () => {
  isPlaying = true;
  audio.play();
  play.classList.replace('fa-play', 'fa-pause');
}

// pause audio
const pauseAudio = () => {
  isPlaying = false;
  audio.pause();
  play.classList.replace('fa-pause', 'fa-play');
}

// // next audio
// const nextAudio = () => {
//   audio.next();
// }

// // play audio
// const prevAudio = () => {
//   audio.prev();
// }

// const durationPlayed = () => {
//   audio.duration();
// }

play.addEventListener('click', () => !isPlaying ? playAudio() : pauseAudio());