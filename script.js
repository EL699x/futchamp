let wins = parseInt(localStorage.getItem("wins")) || 0;
let losses = parseInt(localStorage.getItem("losses")) || 0;
const score = document.getElementById("score");
const logo = document.getElementById("logo");

function updateDisplay() {
  score.textContent = `${wins} - ${losses}`;
}

updateDisplay();

logo.addEventListener("click", () => {
  wins++;
  localStorage.setItem("wins", wins);
  updateDisplay();
});

logo.addEventListener("contextmenu", (e) => {
  e.preventDefault();
  losses++;
  localStorage.setItem("losses", losses);
  updateDisplay();
});

logo.addEventListener("dblclick", () => {
  wins = 0;
  losses = 0;
  localStorage.setItem("wins", wins);
  localStorage.setItem("losses", losses);
  updateDisplay();
});
