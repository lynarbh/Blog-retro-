// titre, réalisateur, année, durée en minutes, genre, type
// Attention : genre et type doivent être écrits pareil que dans les filtres (minuscules, sans accent)
// Pour une série : la durée = durée d'un épisode
const programme = [
  new Evenement("MEAN Girls", "Mark Waters", 2004, 97, "comedie", "film"),
  new Evenement("Maman, j'ai raté l'avion", "Chris Columbus", 1990, 103, "comedie", "film"),
  new Evenement("Le Diable s'habille en Prada", "David Frankel", 2006, 109, "comedie", "film"),
  new Evenement("Princesse malgré elle", "Garry Marshall", 2001, 115, "comedie", "film"),
  new Evenement("Gossip Girl", "Josh Schwartz et Stephanie Savage", 2007, 42, "comedie", "serie"),
  new Evenement("Desperate Housewives", "Marc Cherry", 2004, 43, "comedie", "serie"),
  new Evenement("Dracula", "Luc Besson", 2025, 129, "romance", "film"),
  new Evenement("The Notebook", "Nick Cassavetes", 2004, 123, "romance", "film"),
  new Evenement("Notting Hill", "Roger Michell", 1999, 124, "romance", "film"),
  new Evenement("Le Voyage de Chihiro", "Hayao Miyazaki", 2001, 125, "animation", "film"),
  new Evenement("Barbie Casse-Noisette", "Owen Hurley", 2001, 78, "animation", "film"),
];
