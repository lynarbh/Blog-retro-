// Un "événement" de notre blog = un film ou une série recommandé(e)
class Evenement {
  constructor(titre, realisateur, annee, duree, genre, type) {
    this.titre = titre;
    this.realisateur = realisateur;
    this.annee = annee;
    this.duree = duree; // en minutes (pour une série : durée d'un épisode)
    this.genre = genre; // "comedie", "romance" ou "animation" (sert au filtre)
    this.type = type;   // "film" ou "serie" (sert au filtre)
  }

  // Transforme 97 minutes en "1h37"
  dureeTexte() {
    const h = Math.floor(this.duree / 60);
    let m = this.duree % 60;
    if (m < 10) m = "0" + m;
    return h + "h" + m;
  }

  // Le HTML d'une carte film
  carte() {
    return `
      <li class="carte">
        <span class="type">${this.type}</span>
        <h3>${this.titre}</h3>
        <p>${this.realisateur} · ${this.annee} · ${this.dureeTexte()}</p>
      </li>`;
  }
}
