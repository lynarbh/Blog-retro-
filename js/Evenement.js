// Un "événement" de notre blog = un film ou une série recommandé(e)
class Evenement {
  constructor(titre, realisateur, annee, duree, genre, type, image) {
    this.titre = titre;
    this.realisateur = realisateur;
    this.annee = annee;
    this.duree = duree; // en minutes (pour une série : durée d'un épisode)
    this.genre = genre; // "comedie", "romance" ou "animation" (sert au filtre)
    this.type = type;   // "film" ou "serie" (sert au filtre)
    this.image = image; // chemin de l'image, ex : "assets/films/dracula.jpg"
  }

  // Transforme 97 minutes en "1h37"
  dureeTexte() {
    const h = Math.floor(this.duree / 60);
    let m = this.duree % 60;
    if (m < 10) m = "0" + m;
    return h + "h" + m;
  }

  // Le HTML d'une carte, façon affiche minimaliste
  carte() {
    // si on n'a pas encore d'image, on met une case vide à la place
    let image = `<div class="affiche-vide">image à venir</div>`;
    if (this.image) {
      image = `<img src="${this.image}" alt="${this.titre}">`;
    }

    return `
      <li class="carte">
        ${image}
        <h3>${this.titre} <span class="annee">${this.annee}</span></h3>
        <p>
          <span class="label">${this.type}</span> ${this.dureeTexte()}<br>
          <span class="label">réalisé par</span> ${this.realisateur}
        </p>
      </li>`;
  }
}
