const image = document.querySelector("img");

image.addEventListener("load", function (event) {
  console.log("image loaded!");
});

const play = document.querySelector("play");
const pause = document.querySelector("pause");

play.addEventListener("play", function () {
  audio.play();
});

pause.addEventListener("pause", function () {
  audio.pause();
});

stop.addEventListener("stop", function () {
  audio.pause();
  audio.currentTime = 0;
});

fastForward.addEventListener("fast Forward", function () {
  audio.currentTime += 10;
});

rewind.addEventListener("rewind", function () {
  audio.currentTime -= 10;
});
