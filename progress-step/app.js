const currentProgress = document.querySelector(".progress__current");
const nextButton = document.querySelector(".progress__btn .next");
const prevButton = document.querySelector(".progress__btn .prev");
const listCount = document.querySelectorAll(".progress__count__item");
function setProgress(current) {
  let percentage = ((current - 1) / 3) * 100;
  currentProgress.style.width = percentage + "%";
  for (let i = 1; i <= 4; i++) {
    if (i <= current) {
      listCount[i - 1].classList.add("active");
    } else {
      listCount[i - 1].classList.remove("active");
    }
  }
}
let current = 1;
setProgress(current);
nextButton.addEventListener("click", () => {
  if (current < 4) {
    current++;
    setProgress(current);
  }
});
prevButton.addEventListener("click", () => {
  if (current > 1) {
    current--;
    setProgress(current);
  }
});
