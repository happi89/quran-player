# Quran Player

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)

## Overview
The Quran player is an audio player for some chapter of the Quran.

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Press play to play and press pause to pass
- Click on progress bar to change the current time of audio
- Progress bar that automatically changes with time played
- Go to next Surahs(chapters) or previous Surahs(chapters)

### Screenshot

![Screenshot from 2022-06-18 17-06-37](https://user-images.githubusercontent.com/101960666/174457082-4d1d0efe-eade-4a4e-96ac-015bad61b209.png)

### Links

- Live Site URL: [Quran Player](https://happi89.github.io/quran-player/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Vanilla Javascript

### What I learned


The funtion below chnages where in the audio your are depending on where you clicked, and also updates the progress bar accordingly.
```
  const setProgressBar = (e) => {
  const width = e.srcElement.clientWidth;
  const clickX = e.offsetX;
  const { duration } = audio;
  // console.log((clickX / width) * duration);
  audio.currentTime = (clickX / width) * duration;
}
```

### Continued development

Going forward I will make this website better by adding a volume controller.

### Useful resources

- [W3S schools](https://www.w3schools.com/jsref/dom_obj_audio.asp)
- This helped me for learning audio objects in Javascipt. I really liked this pattern and will use it going forward.
