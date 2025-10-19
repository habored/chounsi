// Définition des sons
// Le navigateur calcule le chemin relatif depuis URL + repo..
const _SOUNDS = {
  ambiant: new Audio(`${BASEURL}/assets/sounds/ambiants/rythmic_remix.ogg`),
  error: new Audio(`${BASEURL}/assets/sounds/notifs/mixkit-fail.ogg`),  
  success: new Audio(`${BASEURL}/assets/sounds/notifs/mixkit-instant_win.wav`),
  start_counter: new Audio(`${BASEURL}/assets/sounds/notifs/mixkit-start_countdown_slow.wav`),
  redirect: new Audio(`${BASEURL}/assets/sounds/notifs/mixkit-transition.wav`),
  win: new Audio(`${BASEURL}/assets/sounds/notifs/mixkit-final_win.wav`)
};

// Préchargement des sons
Object.values(_SOUNDS).forEach(sound => sound.load());

/* Fonction de base pour jouer un son */
function playSound(name) {
  _SOUNDS[name]?.play().catch(err => {
    console.log("Impossible de jouer le son :", err);
  });
}

// Fonction pour l'ambiant
function _playAmbiant() {
  const a = _SOUNDS.ambiant;
  a.volume = 0.5;
  a.loop = true;
  a.play().catch(err => console.log("Impossible de jouer le son :", err));
  document.removeEventListener("click", _playAmbiant, { once: true });
}

/** Appelé pour préparer le déblocage explicite
 * parce que les navigateurs bloquent les sons auto,
 * joués sans que l'utilisateur n'interagisse
 */
function domReload() {
  document.addEventListener("click", _playAmbiant, { once: true });
}

// Fonction pour la win depuis finale
function playWin() {
  const a = _SOUNDS.win;
  a.play().catch(err => console.log("Impossible de jouer le son :", err));
  document.body.removeEventListener("click", playWin, { once: true });
  playSound("win");
}

document.addEventListener("DOMContentLoaded", domReload);

