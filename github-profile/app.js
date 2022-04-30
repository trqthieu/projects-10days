const inputFindName = document.querySelector(".user__input input");
const userCommon = document.querySelector(".user__info__common");

const numberRepos = document.querySelector(".info__repos__title span");
const reposHead = document.querySelector(".info__repos__head");

const reposList = document.querySelector(".info__repos__list");

const formatTime = time => {
  const date = time.split("T")[0];
  const hour = time.split("T")[1].split("Z")[0];
  return [date, hour];
};
const renderUserCommon = ({
  name,
  login,
  avatar_url,
  bio,
  followers,
  following,
  created_at,
  public_repos,
}) => {
  userCommon.innerHTML = `
    <div class="row">
        <div class="col-8 col-md-12">
            <div class="info__common__img mb-4">
                <img src="${avatar_url}" alt="">
            </div>
        </div>
        <div class="col-lg-12">
            <h3 class="info__common__name">${name}</h3>
            <h5 class="info__common__nickname">${login}</h5>
            <p class="info__common__desc">${bio || ""}</p>
            <ul class="info__common__follow">
                <i class="fa-solid fa-user-group"></i>
                <li><span class="info__common__followers">${followers}</span> followers</li>
                <li><span class="info__common__following">${following}</span> following</li>
            </ul>
            <p class="info__common__time-created"><i
                    class="fa-solid fa-right-to-bracket"></i>
                Joined at <span>${formatTime(created_at)[0]}</span></p>
        </div>
     </div>
    `;
  reposHead.innerHTML = `
    <h5 class="info__repos__title mb-4">Repositories <span>${public_repos}</span></h5>
    `;
};

const renderItemRepo = ({
  name,
  html_url,
  visibility,
  description,
  language,
  stargazers_count,
  updated_at,
}) => {
  const repoItem = document.createElement("div");
  repoItem.className = "info__repo__item pt-4";
  repoItem.innerHTML = `
    <h3 class="repo__item__name"><a href="${html_url}">${name}</a>
                                            <span>${visibility}</span>
    </h3>
    <p class="repo__item__desc">${description || ""}</p>
    <span class="repo__item__language">${language || "Some languages"}</span>
    <span class="repo__item__star">${stargazers_count}</span>
    <p class="repo__item__update mt-2">Updated at <span>${
      formatTime(updated_at)[0]
    }</span></p>
    `;
  reposList.appendChild(repoItem);
};
const fetchUser = async inputName => {
  const responseUser = await fetch(`https://api.github.com/users/${inputName}`);
  const dataUser = await responseUser.json();
  renderUserCommon(dataUser);

  const responseRepos = await fetch(dataUser.repos_url);
  const dataRepos = await responseRepos.json();

  reposList.innerHTML = "";
  dataRepos.forEach(dataRepo => {
    renderItemRepo(dataRepo);
  });
};
inputFindName.addEventListener("change", e => {
  if (e.target.value !== "") fetchUser(e.target.value);
});
