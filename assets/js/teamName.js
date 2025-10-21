// requirements
// cookies.js
// timer.js


function nameDisplay(name) {
    const teamname = document.getElementById("team");
    teamname.textContent = name;
}

document.addEventListener("DOMContentLoaded", () => {
    
    const existingTeam = getCookie("teamName");

    if (existingTeam) {
        nameDisplay(existingTeam);
        startTimer();
        return; 
    }

    const popup = document.getElementById("teamname");
    const input  = popup.querySelector("input");
    const button = popup.querySelector("button");
    const feedback = popup.querySelector(".feedback");

    popup.style.display = "flex"; // afficher la popup
    
    button.addEventListener("click", () => {
        const name = input.value.trim();
        if (!name)  {
            feedback.textContent = "Entrez un nom valide";
            feedback.className = "feedback error";
            playSound("error");
        }
        else if (name.length > 12) {
            feedback.textContent = "Trouvez un nom de moins de 12 caractères.";
            feedback.className = "feedback error";
            playSound("error");
        }
        else {
            setCookie("teamName", encodeURIComponent(String(name))); 
            nameDisplay(name);
            feedback.className = "feedback";
            popup.style.display = "none";
            playSound("success");
            startTimer();
        } 
    });

    // Ajouter la touche Entrée pour valider
    input.addEventListener("keypress", (e) => {
        if (e.key === "Enter") button.click();
    }); 
});