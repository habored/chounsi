// requirements
// sound.js
// cookies.js

let timerInterval; 

/* start or restart; depending cookie */
function startTimer() {
  updateTimer();
  timerInterval = setInterval(updateTimer, 1000);
}

function updateTimer() {
  const start = setCookieStart(); // garantit un cookie valide
  const now = Date.now();
  const elapsed = now - start;
  const remaining = Math.max(0, 3600000 - elapsed);
  const text = getMMSS4Display(remaining);

  const timer = document.getElementById("timer");
  if (timer) {
    timer.textContent = text; 
  }

  if (remaining <= 0) {
    timerDown();
  }
}

function timerDown() {
  clearInterval(timerInterval); // stoppe le setInterval === updateTimer ne sera plus rappelé
  document.getElementById("timer").textContent = "00:00";
  alert("Temps écoulé !");
}
