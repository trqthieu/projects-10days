const squares = document.querySelectorAll(".square");
const imgItem = document.createElement("img");
imgItem.setAttribute("src", "https://source.unsplash.com/random/150x150");
imgItem.setAttribute("draggable", true);
imgItem.className = "img";
squares[0].appendChild(imgItem);
let dragged = imgItem;

document.addEventListener(
  "dragstart",
  function (event) {
    event.target.style.opacity = 0.5;
  },
  false
);
document.addEventListener(
  "dragend",
  function (event) {
    event.target.style.opacity = 1;
  },
  false
);
document.addEventListener(
  "dragover",
  function (event) {
    event.preventDefault();
  },
  false
);
document.addEventListener(
  "dragenter",
  function (event) {
    if (event.target.className == "square") {
      event.target.style.backgroundColor = "#fff";
      event.target.style.border = "2px dashed #333";
    }
  },
  false
);
document.addEventListener(
  "dragleave",
  function (event) {
    if (event.target.className == "square") {
      event.target.style.backgroundColor = "";
      event.target.style.border = "2px solid #fff";
    }
  },
  false
);
document.addEventListener(
  "drop",
  function (event) {
    event.preventDefault();
    if (event.target.className == "square") {
      event.target.style.background = "";
      dragged.parentNode.removeChild(dragged);
      event.target.appendChild(dragged);
      event.target.style.border = "2px solid #fff";
      event.target.style.opacity = 1;
    }
  },
  false
);
