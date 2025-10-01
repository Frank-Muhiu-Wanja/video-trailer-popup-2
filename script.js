// btn
//close-icon
//trailer-container
// video
const btnEL = document.querySelector(".btn");
const closeIcon = document.querySelector(".close-icon");
const trailerContainer = document.querySelector(".trailer-container");
const video = document.querySelector(".videos");

btnEL.addEventListener("click", () => {
  trailerContainer.classList.remove("active");
});
closeIcon.addEventListener("click", () => {
  trailerContainer.classList.add("active");
  video.pause();
  video.currentTime = 0;
});
