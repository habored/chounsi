// requirements
// sound.js


/* ========== consts ========== */

const _0xANSWERS = { 
  "binaire": "QUxHT1JJVEhNRQ==", 
  "python": "MjAzNQ==", 
  "microbit": "TQ==",  
  "final": "QUxHT1JJVEhNRTIwMzVN" 
};

/* ========== utilitaires cookie ========== */

function __getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
  return null;
}

/**
 * options: { maxAge: number (s), path: string, expires: Date }
 */
function __setCookie(name, value, options = {}) {
  let cookie = `${name}=${value}`;
  if (options.maxAge) cookie += `; max-age=${options.maxAge}`;
  if (options.path) cookie += `; path=${options.path}`;
  if (options.expires) cookie += `; expires=${options.expires.toUTCString()}`;
  document.cookie = cookie;
}

/* ========== gestion des énigmes dans le cookie ========== */

/**
 * Lit le cookie 'enigmesDone'
 * Renvoie une list des enigmes enregistrées
 * eg, ["binaire", "python"]
 **/
function _getEnigmesCookie() {
  const rawCookie = __getCookie("enigmesDone");
  if (!rawCookie) return [];
  const enigmesArr = rawCookie.split(",").map(s => s.trim()).filter(Boolean);
  return enigmesArr;
}

/**
 * Pour chaque cookie d'énigme enregistré, on applique 
 * l'action d'enregistrer l'énigme. 
 **/
function domReload() { 
  const enigmesDoneArray = _getEnigmesCookie();
  if (enigmesDoneArray) { 
    enigmesDoneArray.forEach(sectionId => { _setEnigmeDone(sectionId); });
  }
}

function __addEnigmeToCookie(nameToAdd, options = {}) {
  if (!nameToAdd) return;
  const defaults = { maxAge: 3600, path: "/" };
  const opt = Object.assign({}, defaults, options);
  // recup
  let enigmesDoneArray = _getEnigmesCookie(); 
  if (!enigmesDoneArray) enigmesDoneArray = [];
  if (!enigmesDoneArray.includes(nameToAdd)) {
    // ajout
    enigmesDoneArray.push(nameToAdd); 
    // mise à jour
    __setCookie("enigmesDone", enigmesDoneArray.join(","), opt);
  }
  return enigmesDoneArray;
}

function _setEnigmeDone(sectionId) {
  // recup la section parent
  const section = document.getElementById(sectionId);
  if (!section) return null;  
  
  // ajout aux cookies
  __addEnigmeToCookie(`${sectionId}`); 
  
  const feedback = section.querySelector(".feedback");
  // feeedback
  feedback.textContent = "Bonne réponse ! Redirection en cours...";
  feedback.className = "feedback success";

  const input = section.querySelector("input");
  // disuade la modification de l'entrée
  input.disabled = true;
  // retirer l'écouteur de l'input
  if (input._handleEnter) {
    input.removeEventListener("keypress", input._handleEnter);
  }
  //defer
  setTimeout(() => {
      // Retour automatique à la liste des énigmes
      const backBtn = section.querySelector(".back-btn");
      if (backBtn) backBtn.click();
      // vide le feedback
      feedback.innerHTML = "";
      feedback.className = "feedback";
      // obligé de defer aussi sinon on voit plus le feedback =)
      // Ajoute la classe css done à la section et au bouton
      section.classList.add("done");
      const button = document.querySelector(`.enigme-btn[data-target="${sectionId}"]`);
      if (button) button.classList.add("done");
  }, 2500);
  // en cas de domReload
  // Récupère l'input et le feedback associés
  const encoded = _0xANSWERS[sectionId];
  if (encoded) {
    const correctAnswer = atob(encoded).trim();
    input.value = correctAnswer;
  }
  
  if (isFinished()) {
    /* ça fait juste la redirection */
    playSound("win");
    setTimeout(() => {
      window.location.href = "finale.html";
    }, 10);
  }
}

/**
 * Renvoie true si toutes les énigmes ont été complétées ou false sinon
 * @returns {boolean}
 */
function isFinished() {
  const enigmesDoneArray = _getEnigmesCookie(); // list[str]
  if (!enigmesDoneArray) return false;
  const answerKeys = Object.keys(_0xANSWERS);
  if (enigmesDoneArray.length !== answerKeys.length) return false;
  return answerKeys.every(k => enigmesDoneArray.includes(k));
}

// appelle domReload au (re)chargement
document.addEventListener("DOMContentLoaded", domReload);

// c'est pour les écouteurs et les retours de feedback
document.addEventListener("DOMContentLoaded", () => {
  const inputs = document.querySelectorAll(".enigme > input");
  inputs.forEach(input => {
    const handleEnter = function(e) {
      if (e.key === "Enter") {
        e.preventDefault();
        const parent = input.closest(".enigme");
        const feedback = parent.querySelector(".feedback");
        const encodedHex = _0xANSWERS[parent.id];
        const correctAnswer = atob(encodedHex).trim();
        const userAnswer = input.value.trim();
        if (userAnswer === "") {
          feedback.textContent = "Entre une réponse !";
          feedback.className = "feedback";
        } else if (userAnswer.toLowerCase() === correctAnswer.toLowerCase()) { 
          _setEnigmeDone(parent.id, feedback, input);  
          playSound("success");
        } else {
          feedback.textContent = "Incorrect, réessayez.";
          feedback.className = "feedback error";
          playSound("error");
        }
      }
    };
    // Ajout de l'écouteur nommé
    input.addEventListener("keypress", handleEnter);
  });
});


