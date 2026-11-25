// ---------- Afficher une liste de films dans la page ----------
function afficher(liste) {
  const zone = document.querySelector("#programme");
  zone.innerHTML = liste.map((ev) => ev.carte()).join("");
}

// ---------- Allumer le bouton cliqué (et éteindre les autres) ----------
function activer(bouton) {
  document.querySelectorAll(".filtres button").forEach((b) => {
    b.classList.remove("actif");
    b.setAttribute("aria-pressed", "false");
  });
  bouton.classList.add("actif");
  bouton.setAttribute("aria-pressed", "true");
}

// ---------- Les boutons ----------
const tout = document.querySelector("#tout");
const comedie = document.querySelector("#comedie");
const romance = document.querySelector("#romance");
const animation = document.querySelector("#animation");
const films = document.querySelector("#films");
const series = document.querySelector("#series");

tout.addEventListener("click", () => {
  afficher(programme);
  activer(tout);
});

comedie.addEventListener("click", () => {
  afficher(programme.filter((ev) => ev.genre === "comedie"));
  activer(comedie);
});

romance.addEventListener("click", () => {
  afficher(programme.filter((ev) => ev.genre === "romance"));
  activer(romance);
});

animation.addEventListener("click", () => {
  afficher(programme.filter((ev) => ev.genre === "animation"));
  activer(animation);
});

films.addEventListener("click", () => {
  afficher(programme.filter((ev) => ev.type === "film"));
  activer(films);
});

series.addEventListener("click", () => {
  afficher(programme.filter((ev) => ev.type === "serie"));
  activer(series);
});

// ---------- Au chargement : on montre tous les films ----------
afficher(programme);
