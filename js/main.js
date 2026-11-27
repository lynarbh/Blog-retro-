// ---------- Afficher une liste de films dans la page ----------
function afficher(liste) {
  // Les cartes, comme avant
  const zone = document.querySelector("#programme");
  zone.innerHTML = liste.map((ev) => ev.carte()).join("");

  // Le compteur : un message si la liste est vide, sinon le nombre
  const compteur = document.querySelector("#compteur");
  if (liste.length === 0) {
    compteur.textContent = "Aucun film ou série ne correspond";
  } else {
    compteur.textContent = liste.length + " films et séries";
  }
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

// ---------- Tout combiner : les deux choix du visiteur, retenus en mémoire ----------
let filtreChoisi = "tout"; // "tout", "comedie", "romance", "animation", "film" ou "serie"
let motCherche = "";

function mettreAJour() {
  // Je pars de tout le programme
  let liste = programme;
  // Filtre 1 : le bouton, si un bouton est choisi (genre ou type)
  if (filtreChoisi !== "tout") {
    liste = liste.filter((ev) => ev.genre === filtreChoisi || ev.type === filtreChoisi);
  }
  // Filtre 2 : le mot cherché
  liste = liste.filter((ev) => ev.titre.toLowerCase().includes(motCherche));
  // J'affiche ce qui reste
  afficher(liste);
}

// ---------- Les boutons : chacun change filtreChoisi, puis mettreAJour() ----------
const tout = document.querySelector("#tout");
const comedie = document.querySelector("#comedie");
const romance = document.querySelector("#romance");
const animation = document.querySelector("#animation");
const films = document.querySelector("#films");
const series = document.querySelector("#series");

tout.addEventListener("click", () => {
  filtreChoisi = "tout";
  mettreAJour();
  activer(tout);
});

comedie.addEventListener("click", () => {
  filtreChoisi = "comedie";
  mettreAJour();
  activer(comedie);
});

romance.addEventListener("click", () => {
  filtreChoisi = "romance";
  mettreAJour();
  activer(romance);
});

animation.addEventListener("click", () => {
  filtreChoisi = "animation";
  mettreAJour();
  activer(animation);
});

films.addEventListener("click", () => {
  filtreChoisi = "film";
  mettreAJour();
  activer(films);
});

series.addEventListener("click", () => {
  filtreChoisi = "serie";
  mettreAJour();
  activer(series);
});

// ---------- Chercher : écouter chaque lettre ----------
// Je trouve le champ de recherche
const recherche = document.querySelector("#recherche");

// À chaque lettre tapée ou effacée…
recherche.addEventListener("input", () => {
  // Le mot tapé, en minuscules
  motCherche = recherche.value.toLowerCase();
  mettreAJour();
});

// ---------- Trier : ranger les cartes dans un ordre ----------
// Je trouve le menu déroulant
const tri = document.querySelector("#tri");

// Quand le visiteur choisit une option…
tri.addEventListener("change", () => {
  if (tri.value === "nom") {
    // …par nom : ordre alphabétique des titres
    programme.sort((a, b) => a.titre.localeCompare(b.titre));
  } else if (tri.value === "duree") {
    // …par durée : du plus court au plus long
    programme.sort((a, b) => a.duree - b.duree);
  }
  // La liste est rangée : je l'affiche (en gardant le bouton et le mot choisis)
  mettreAJour();
});

// ---------- Au chargement : on montre tous les films ----------
afficher(programme);
