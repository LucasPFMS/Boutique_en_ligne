const fauxLivre = { titre: "Dune", prix: 12.5 };

const ligne = new LignePanier(fauxLivre);
console.log(ligne.quantite);         // 1
ligne.augmenter();
ligne.augmenter();
console.log(ligne.quantite);         // 3
console.log(ligne.getSousTotal());   // 37.5
ligne.diminuer();
console.log(ligne.getSousTotal());   // 25