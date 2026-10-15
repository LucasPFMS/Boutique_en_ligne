import LignePanier from "./LignePanier.js";
//Panier va fabriquer des objets LignePanier avec new LignePanier(...), et cette classe est dans un autre fichier

export default class Panier {
    constructor(id) { //Le constructeur reçoit l’id, pas un article
        //Les articles arriveront plus tard, un par un, grâce à ajouter()
        this.id = id;
        this.lignes = [];    // ne vient d’aucun paramètre : un panier commence toujours vide
        //veut dire dans ce panier (this), crée une boîte appelée lignes, et mets-y une liste vide ([])
    }

    ajouter(article) {
        const ligne = this.lignes.find(l => l.article.id === article.id);
        //ranger dans une variable ligne
        //chercher dans this.lignes
        //la ligne dont l’article a le même id
        //Après cette ligne, la variable ligne contient soit la ligne trouvée, soit undefined si le livre n’est pas encore dans le panier
        if (ligne) { //« si ligne existe », sinon find() a renvoyé undefined et on ne rentre pas dans les accolades
            ligne.augmenter(); //appelle ta méthode de LignePanier
        } else {
            const nouvelleLigne = new LignePanier(article);
            //new LignePanier(article) fabrique une nouvelle ligne. On ne donne pas de quantité
            this.lignes.push(nouvelleLigne);
            //range cette ligne à la fin de la liste
        }
    }

    retirer(article) { //article ici c ets le livre sur lequel l utilisateur clique
        const ligne = this.lignes.find(l => l.article.id === article.id); //on trouve d'abord la ligne correspondant a ce livre, si undefined on s'arrete la
        if (!ligne) return; //si (if) il n’y a pas (!) de ligne, arrête-toi (return) »

        ligne.diminuer(); //si tu trouve la ligne alors appelle la méthode diminuer de LignePanier

        if (ligne.quantite === 0) { //« si la quantité de cette ligne est égale à (===) 0 » alors on retire la ligne 
            this.lignes = this.lignes.filter(l => l !== ligne);
            //« garde toutes les lignes différentes de (!==) celle-là, et range cette nouvelle liste dans this.lignes ».
            //  Ex : [ Dune×1, PetitPrince×0 ] devient [ Dune×1 ].
        }
    }

    supprimerLigne(article) {
        const ligne = this.lignes.find(l => l.article.id === article.id); //on trouve d'abord la ligne correspondant a l'article, si undefined on s'arrete la
        if (!ligne) return; //si (if) il n’y a pas (!) de ligne, arrête-toi (return) »

        this.lignes = this.lignes.filter(l => l !== ligne);
    }


    getTotal() {
    let total = 0;                       // avant la boucle on part de zéro

    for (const ligne of this.lignes) {   // pour chaque ligne de (of) la liste this.lignes, fais ce qu’il y a dans les accolades
        total += ligne.getSousTotal();   //    ajoute au total le sous total de la ligne du tour de boucle en cours en utilisant la méthode de Panier getSousTotal
    }                                  

    return total;                        // après la boucle on renvoie le résultat
}

}