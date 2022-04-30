const row = document.querySelector(".row.row-images");
async function randomImage() {
  let response = await fetch("https://picsum.photos/200/300");
  const colImage = document.createElement("div");
  colImage.className = "col-sm-4 col-lg-3 col-image";
  const imgElement = document.createElement("img");
  imgElement.setAttribute("src", response.url);
  colImage.appendChild(imgElement);
  row.appendChild(colImage);
}
for (let i = 0; i < 12; i++) {
  randomImage();
}
