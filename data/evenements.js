// titre, réalisateur, année, durée en minutes, genre, type, image
// Attention : genre et type doivent être écrits pareil que dans les filtres (minuscules, sans accent)
// Pour une série : la durée = durée d'un épisode
// Pas encore d'image ? on met "" et la carte affiche "image à venir"
const programme = [
  new Evenement("MEAN Girls", "Mark Waters", 2004, 97, "comedie", "film", "assets/films/mean-girls.jpg"),
  new Evenement("Maman, j'ai raté l'avion", "Chris Columbus", 1990, 103, "comedie", "film", "assets/films/maman-rate-avion.jpg"),
  new Evenement("Le Diable s'habille en Prada", "David Frankel", 2006, 109, "comedie", "film", "assets/films/diable-prada.jpg"),
  new Evenement("Princesse malgré elle", "Garry Marshall", 2001, 115, "comedie", "film", "assets/films/princesse-malgre-elle.jpg"),
  new Evenement("Gossip Girl", "Josh Schwartz et Stephanie Savage", 2007, 42, "", "serie", "assets/films/gossip-girl.jpg"),
  new Evenement("Desperate Housewives", "Marc Cherry", 2004, 43, "", "serie", "assets/films/desperate-housewives.jpg"),
  new Evenement("Pretty Little Liars", "Norman Buckley", 2010, 43, "", "serie", "assets/films/pretty-little-liars.jpg"),
  new Evenement("Gilmore Girls", "Amy Sherman-Pallading", 2000, 43, "", "serie", "assets/films/gilmore-girls.jpg"),
  new Evenement("Dracula", "Luc Besson", 2025, 129, "romance", "film", "assets/films/dracula.jpg"),
  new Evenement("The Notebook", "Nick Cassavetes", 2004, 123, "romance", "film", "assets/films/the-notebook.jpg"),
  new Evenement("Notting Hill", "Roger Michell", 1999, 124, "romance", "film", "assets/films/notting-hill.jpg"),
  new Evenement("Le Voyage de Chihiro", "Hayao Miyazaki", 2001, 125, "animation", "film", "assets/films/chihiro.jpg"),
  new Evenement("Barbie Casse-Noisette", "Owen Hurley", 2001, 78, "animation", "film", "assets/films/barbie-casse-noisette.jpg"),
];
