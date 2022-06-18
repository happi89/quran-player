const play = document.getElementById('play');
const previous = document.getElementById('prev');
const next = document.getElementById('next');
const audio = document.querySelector('audio');
const progressContainer = document.getElementById('progress-container');
const progress = document.getElementById('progress')
const durationEl = document.getElementById('duration');
const currentEl = document.getElementById('current-time');
const title = document.getElementById('title');
const reciter = document.getElementById('reciter');
const img = document.querySelector('img');
const time = document.getElementById('current-time');
const duration = document.getElementById('duration');

let isPlaying = false;
let surahIndex = 0;
durationEl.textContent = '0:37';

const SURAHS = [
  {
    name: 'surah-fatiha',
    title: 'Surah Fatiha',
    reciter: 'Hazza al Balushi',
    img: 'img-1'
  },
  {
    name: 'surah-rahman',
    title: 'Surah Rahman',
    reciter: 'Hazza al Balushi',
    img: 'img-2'
  },
  {
    name: 'surah-yaseen',
    title: 'Surah Yaseen',
    reciter: 'Hazza al Balushi',
    img: 'img-3'
  },
  {
    name: 'surah-kahaf',
    title: 'Surah Kahaf',
    reciter: 'Hazza al Balushi',
    img: 'img-4'
  }
];

// play audio
const playAudio = () => {
  isPlaying = true;
  audio.play();
  play.classList.replace('fa-play', 'fa-pause');
  play.setAttribute('title', 'Pause');
}

// pause audio
const pauseAudio = () => {
  isPlaying = false;
  audio.pause();
  play.classList.replace('fa-pause', 'fa-play');
  play.setAttribute('title', 'Play');
}

// next audio
const nextAudio = () => {
  surahIndex++;
  if(surahIndex === SURAHS.length) {
    surahIndex = 0;
  }
  loadSurah(SURAHS[surahIndex]);
  playAudio();
}

// play audio
const prevAudio = () => {
  surahIndex--;
  if(surahIndex < 0) {
    surahIndex = SURAHS.length - 1;
  }
  loadSurah(SURAHS[surahIndex]);
  playAudio();
}

// pause and play button
play.addEventListener('click', () => !isPlaying ? playAudio() : pauseAudio());

// Update UI
const loadSurah = (surah) => {
  title.textContent = surah.title;
  reciter.textContent = surah.reciter;
  audio.src = `quran/${surah.name}.mp3`;
  img.src = `img/${surah.img}.jpg`
}

// On Load
loadSurah(SURAHS[surahIndex]);

// update Progress bar
const updateProgressBar = (e) => {
  if(isPlaying) {
    const { duration, currentTime } = e.srcElement;
    // update progress bar 
    const progressPercent = (currentTime / duration) * 100;
    progress.style.width = `${progressPercent}%`
    // get the duration in correct format
    const durationMinutes = Math.floor(duration / 60);
    let durationSeconds = Math.floor(duration % 60);
    // adds 0 infront of numbers less then 10 ie 5 -> 05
    if(durationSeconds < 10) {
      durationSeconds = `0${durationSeconds}`
    }
    // adds delay so element doesnt display NaN
    if (durationSeconds) {
      durationEl.textContent = `${durationMinutes}:${durationSeconds}`;
    }

    // updates current time
    const currentTimeMinutes = Math.floor(currentTime / 60);
    let currentTimeSeconds = Math.floor(currentTime % 60);
    // adds 0 infront of numbers less then 10 ie 5 -> 05
    if(currentTimeSeconds < 10) {
      currentTimeSeconds = `0${currentTimeSeconds}`;
    }
    currentEl.textContent = `${currentTimeMinutes}:${currentTimeSeconds}`;
  }
}

// set progress bar
const setProgressBar = (e) => {
  const width = e.srcElement.clientWidth;
  const clickX = e.offsetX;
  const { duration } = audio;
  // console.log((clickX / width) * duration);
  audio.currentTime = (clickX / width) * duration;
}

// event listeners 
prev.addEventListener('click', prevAudio);
next.addEventListener('click', nextAudio);
audio.addEventListener('timeupdate', updateProgressBar)
progressContainer.addEventListener('click', setProgressBar)
audio.addEventListener('ended', nextAudio);