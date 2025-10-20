let wins = 0;
let losses = 0;

// Charger les données sauvegardées
if (localStorage.getItem("wins")) wins = parseInt(localStorage.getItem("wins"));
if (localStorage.getItem("losses")) losses = parseInt(localStorage.getItem("losses"));

update();

function win() {
  wins++;
  save();
  update();
}

function lose() {
  losses++;
  save();
  update();
}

function reset() {
  wins = 0;
  losses = 0;
  save();
  update();
}

function update() {
  document.getElementById("score").textContent = `${wins} - ${losses}`;
}

function save() {
  localStorage.setItem("wins", wins);
  localStorage.setItem("losses", losses);
}
