// RESPONSIVE NAVIGATION

burger.addEventListener("click", toggleBurger);

function toggleBurger() {
  console.log('toggleBurger called');

  var burger = document.getElementById('burger');
  var menu = document.getElementById('menu');

  burger.classList.toggle('is-open');
  menu.classList.toggle('is-visible');
}

// RESPONSIVE VIDEO
// With help from: https://css-tricks.com/NetMag/FluidWidthVideo/Article-FluidWidthVideo.php

var video = document.getElementById('video');
// Numbers come from YouTube's assigned width and height for this video
var aspectRatio = 560 / 315;
var videoContainer = document.getElementById('trailer');
var videoContainerWidth = videoContainer.clientWidth;
var videoContainerHeight = videoContainer.clientHeight;
var newVideoWidth = videoContainerWidth;
var newVideoHeight = videoContainerWidth / aspectRatio;

video.setAttribute('width', newVideoWidth);
video.setAttribute('height', newVideoHeight);
