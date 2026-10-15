import Panier from "./entities/Panier.js";
import LignePanier from "./entities/LignePanier.js";

const dune = { id: 3, titre: "Dune", prix: 12.5 };
const petitPrince = { id: 7, titre: "Le Petit Prince", prix: 8.9 };

const panier = new Panier(1);
panier.ajouter(dune);
panier.ajouter(dune);
panier.ajouter(petitPrince);

panier.retirer(dune);
panier.retirer(petitPrince);
console.log(panier.lignes);

console.log(panier.lignes);