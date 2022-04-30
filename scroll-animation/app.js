const contents = document.querySelectorAll(".content");
function setTranslateX(index) {
  if (index % 2 !== 0) {
    contents[index].style.transform = "translateX(-300%)";
  } else {
    contents[index].style.transform = "translateX(300%)";
  }
}
for (let i = 2; i < contents.length; i++) {
  setTranslateX(i);
}

window.onscroll = () => {
  let scrollHeight = window.innerHeight + window.scrollY;
  for (let i = 2; i < contents.length; i++) {
    let elementHeight =
      contents[i].getBoundingClientRect().top + window.scrollY;
    if (scrollHeight > elementHeight) {
      contents[i].style.transform = "translateX(0)";
    } else {
      setTranslateX(i);
    }
  }
};
