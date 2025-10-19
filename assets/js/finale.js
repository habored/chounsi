// requirements
// utilise isFinished() de fl4g.js
// sound.js


function _resetMission() {
  alert("Fin de la mission, félicitations !");
  // clearEnigmes() {
  document.cookie = "enigmesDone=; path=/; max-age=0";
  document.cookie = "start=; path=/; max-age=0";
  // redir
  location.reload();
}


function finalize() {
  const divMessage = document.getElementById("message");
  if (isFinished()) {
    document.body.id = "success";
    document.body.addEventListener("click", playWin, { once: true });
    document.getElementById("timer").innerHTML="";
    document.getElementById("soustitre").innerHTML="";
    divMessage.innerHTML = "<p><b>Félicitations</b> Agent du numérique, <br>Vous avez démontré <b>les qualités d'une future informaticienne</b> ou d'un futur informaticien !<br>Mais n'oubliez pas : l'objectif est de <b>comprendre la démarche</b>, pas seulement de gagner.</p>";
    setTimeout(() => _resetMission(), 7000);
  } else {
    divMessage.innerHTML = "<p>Vous vous êtes égarés, agents ?</p><p>Terminez les énigmes avant de venir ici...</p>";
    setTimeout(() => {
      window.location.href = `${BASEURL}`;
    }, 3000);
  }
}

document.addEventListener("DOMContentLoaded", finalize);
