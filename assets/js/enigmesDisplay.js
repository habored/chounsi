document.addEventListener("DOMContentLoaded", () => {
  const enigmes = document.getElementById("enigmes");
  const contents = document.querySelectorAll(".enigme");

  document.querySelectorAll(".enigme-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const target = document.getElementById(btn.dataset.target);
      enigmes.classList.add("hidden");
      contents.forEach(c => c.classList.add("hidden"));
      target.classList.remove("hidden");
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  });

  document.querySelectorAll(".back-btn").forEach(back => {
    back.addEventListener("click", () => {
      contents.forEach(c => c.classList.add("hidden"));
      enigmes.classList.remove("hidden");
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  });
});