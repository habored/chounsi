// requirements
// utilise isFinished() de fl4g.js
// sound.js
// cookies.js



function finalize() {
  const divMessage = document.getElementById("message");
  if (isFinished()) { 
    const teamName = decodeURIComponent(getCookie("teamName"));
    const duration = getTotalDuration();
    document.body.id = "success";
    document.body.addEventListener("click", playWin, { once: true });
    document.getElementById("timer").innerHTML="";
    document.getElementById("soustitre").innerHTML="";
    deleteCookies();
    divMessage.innerHTML = `<p><b>Félicitations</b> équipe <b>${teamName}</b>, </p><p>Vous avez terminé en <b>${duration}</b> !</p><p>Vous avez démontré <b>les qualités d'une future informaticienne</b> ou d'un futur informaticien !</p><p>Mais n'oubliez pas : l'objectif est de <b>comprendre la démarche</b>, pas seulement de gagner.</p>`;
  } else {
    divMessage.innerHTML = "<p>Vous vous êtes égarés, agents ?</p><p>Terminez les énigmes avant de venir ici...</p>";
    setTimeout(() => {
      window.location.href = `${BASEURL}/`;
    }, 3000);
  }
}

document.addEventListener("DOMContentLoaded", finalize);
