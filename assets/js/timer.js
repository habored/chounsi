// requirements
// sound.js
// 
function getCookie(name) {
  const cookies = document.cookie.split("; ");
  for (const cookie of cookies) {
    const [key, value] = cookie.split("=");
    if (key === name) return value;
  }
  return null;
}

function setCookieStart() {
  let start = getCookie("start");
  if (!start) {
    start = Date.now();
    document.cookie = `start=${start}; path=/; max-age=3600`; // 1h
    alert(`Choungi a pris le contrôle.\n\nRésolvez 4 énigmes puis validez vos missions.\n\nVous avez 60 minutes pour rétablir le système.`);
  }
  return Number(start);
}

function updateTimer() {
  const start = setCookieStart(); // garantit un cookie valide
  const now = Date.now();
  const elapsed = now - start;
  const remaining = Math.max(0, 3600000 - elapsed);
  const minutes = Math.floor(remaining / 60000);
  const seconds = Math.floor((remaining % 60000)/1000);

  const timer = document.getElementById("timer");
  if (timer) {
    timer.textContent = `${minutes.toString().padStart(2,'0')}:${seconds.toString().padStart(2,'0')}`;
  }

  if (remaining <= 0) {
    timerDown();
  }
}

function timerDown() {
  clearInterval(timerInterval); // stoppe le setInterval === updateTimer ne sera plus rappelé
  document.getElementById("timer").textContent = "00:00";
  document.cookie = "start=; path=/; max-age=0";
  alert("Temps écoulé !");
}

updateTimer();
const timerInterval = setInterval(updateTimer, 1000);
 