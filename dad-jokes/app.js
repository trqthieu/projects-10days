const content = document.querySelector(".content");
const btn = document.querySelector(".btn");
const getJoke = async () => {
  content.innerHTML = `
    <div class="spinner-border" role="status"></div>
    `;
  try {
    let response = await fetch("https://api.chucknorris.io/jokes/random");
    let data = await response.json();
    content.innerHTML = data.value;
  } catch (error) {
    console.log(error);
  }
};
getJoke();
btn.addEventListener("click", getJoke);
window.addEventListener("keydown", e => {
  console.log(e.code);
});
