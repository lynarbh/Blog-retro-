// Un "événement" de notre blog = un film recommandé
class Evenement {
  constructor(titre, realisateur, annee, duree, genre) {
    this.titre = titre;
    this.realisateur = realisateur;
    this.annee = annee;
    this.duree = duree; // en minutes
    this.genre = genre; // "comedie", "romance" ou "animation" (sert au filtre)
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
        <h3>${this.titre}</h3>
        <p>${this.realisateur} · ${this.annee} · ${this.dureeTexte()}</p>
      </li>`;
  }
}
