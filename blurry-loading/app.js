const percentage = document.querySelector(".percentage");
const siteWrapper = document.querySelector(".site__wrapper");
let current = 0;
let myOpacity = 1;
let myBlur = 15;
const timer = setInterval(() => {
  if (current < 100) {
    current++;
    myOpacity -= 0.005;
    myBlur -= 0.15;
    percentage.innerHTML = current + "%";
    percentage.style.opacity = myOpacity;
    siteWrapper.style.filter = `blur(${myBlur}px)`;
  } else {
    clearInterval(timer);
    percentage.style.opacity = 0;
    siteWrapper.style.filter = `blur(0px)`;
  }
}, 20);
