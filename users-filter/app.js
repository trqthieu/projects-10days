console.log(">>> start");
const userList = document.querySelector(".users-filter__list");
const userInput = document.querySelector(".user__input");

const renderUsers = users => {
  userList.innerHTML = "";
  users.forEach(user => {
    const userItem = document.createElement("div");
    userItem.className = "users-filter__item d-flex mt-4 pb-4 border-bottom";
    userItem.innerHTML = `
        <div class="users-filter__item__img mr-4">
        <img class="rounded-circle" src="${user.picture.large}" alt="">
        </div>
        <div class="users-filter__item__desc w-100">
            <h4 class="user__name">${user.name.title} ${user.name.first} ${user.name.last}</h4>
            <p class="user__address">${user.location.street.name}, ${user.location.city}, ${user.location.state}, ${user.location.country}</p>
            <p class="user__email">${user.email}</p>
        </div>
        `;
    userList.appendChild(userItem);
  });
};
const findUser = (input, users) => {
  return users.filter(user => {
    let userName = `${user.name.first} ${user.name.last}`.toLowerCase();
    let userAddress =
      `${user.location.street.name}, ${user.location.city}, ${user.location.state}, ${user.location.country}`.toLowerCase();
    return userName.includes(input) || userAddress.includes(input);
  });
};
const getUsers = async () => {
  console.log("Async start");
  try {
    const response = await fetch("https://randomuser.me/api?results=20");
    const data = await response.json();
    const users = data.results;
    console.log("Below await");
    renderUsers(users);
    userInput.addEventListener("input", e => {
      let userFilter = findUser(e.target.value, users);
      renderUsers(userFilter);
    });
  } catch (err) {
    console.log(err);
  }

  console.log("Async end");
};
getUsers();
console.log(">>> end");
