const container = document.querySelector(".container");
const loginInput = document.querySelector(".login-input");
const loginForm = document.querySelector(".login-form");
const topArea = document.querySelector(".top-info-area");
const greetingArea = document.querySelector(".greeting-area");
const bottomArea = document.querySelector(".bottom-area");
let userName = localStorage.getItem("userName")

function paintScreen() {
  const currentHour = new Date().getHours();
  const greeting = currentHour < 5 
                  ? "Good Night, "
                  : currentHour < 12 
                  ? "Good Morning, "
                  : currentHour < 18
                  ? "Good Afternoon, "
                  : "Good Evening, ";

  greetingArea.innerHTML = `
    <span>${greeting}</span>
    <span>${userName}</span>
  `

  loginForm.classList.add("hidden");
  topArea.classList.remove("hidden");
  greetingArea.classList.remove("hidden");
  bottomArea.classList.remove("hidden");
}

if (userName) paintScreen();

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  userName = loginInput.value;
  localStorage.setItem("userName", userName);
  paintScreen();
})