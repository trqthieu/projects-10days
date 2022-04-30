const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const clockHour = document.querySelector(".clock__hour");
const clockMinute = document.querySelector(".clock__minute");
const clockSecond = document.querySelector(".clock__second");
const timeHour = document.querySelector(".time__hour");
const timeDateText = document.querySelector(".time__date__text");
const timeDateDOM = document.querySelector(".time__date__dom");
const darkMode = document.querySelector("#darkMode");
const btnChangeTheme = document.querySelector(".btn__change-theme");
const r = document.querySelector(":root");
function formatHour(hour, minute) {
  let suffix = "AM";
  if (hour > 12) {
    hour %= 12;
    suffix = "PM";
  }
  minute = minute < 10 ? "0" + minute : minute;
  return `${hour}:${minute} ${suffix}`;
}
function setClock() {
  let date = new Date();
  let hour = date.getHours();
  let minute = date.getMinutes();
  let second = date.getSeconds();
  let dow = date.getDay();
  let dom = date.getDate();
  let month = date.getMonth();
  clockHour.style.transform = `rotate(${(hour / 12) * 360}deg)`;
  clockMinute.style.transform = `rotate(${(minute / 60) * 360}deg)`;
  clockSecond.style.transform = `rotate(${(second / 60) * 360}deg)`;
  timeHour.innerHTML = formatHour(hour, minute);
  timeDateText.innerHTML = `${days[dow]}, ${months[month]}`;
  timeDateDOM.innerHTML = dom;
}
darkMode.addEventListener("change", () => {
  if (darkMode.checked) {
    r.style.setProperty("--text-color", "#fff");
    r.style.setProperty("--bg-color", "#000");
    btnChangeTheme.innerHTML = "Light Mode";
  } else {
    r.style.setProperty("--text-color", "#000");
    r.style.setProperty("--bg-color", "#fff");
    btnChangeTheme.innerHTML = "Dark Mode";
  }
});
setInterval(setClock, 1000);
