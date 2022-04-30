const icon = document.querySelector(".my__icon");
const navbar = document.querySelector(".my__navbar");
const siteWrapper = document.querySelector(".site__wrapper");

let isChecked = false;
icon.addEventListener("click", function () {
  isChecked = !isChecked;
  if (isChecked) {
    this.style.transform = "rotate(-90deg)";
    siteWrapper.style.transform = "rotate(-20deg)";
    navbar.style.transform = "translateX(200px)";
  } else {
    {
      this.style.transform = "rotate(0deg)";
      siteWrapper.style.transform = "rotate(0deg)";
      navbar.style.transform = "translateX(-200px)";
    }
  }
});
