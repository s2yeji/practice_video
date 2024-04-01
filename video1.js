const btnVideo = document.querySelector('.btnVideo');
const btnStop = document.querySelector('.btnStop');
const btnRestart = document.querySelector('.btnRestart');

const videoCurrentTime = document.querySelector('.videoCurrentTime');
const videoDuration = document.querySelector('.videoDuration');

const video = document.querySelector('.sec1 > video');

btnVideo.addEventListener('click', () => {
  //   console.log(video.currentTime);
  //   console.log(video.duration);
  videoCurrentTime.innerHTML = video.currentTime;
  videoDuration.innerHTML = video.duration;
  if (video.paused) {
    video.play();
    btnVideo.innerHTML = `<i class="fa-solid fa-pause"></i>`;
  } else {
    video.pause();
    btnVideo.innerHTML = `<i class="fa-solid fa-play"></i>`;
  }
});

btnStop.addEventListener('click', () => {
  video.pause();
  video.currentTime = 0;
});

btnRestart.addEventListener('click', () => {
  video.play();
});
