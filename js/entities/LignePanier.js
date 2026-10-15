export default class LignePanier {
    constructor(article, quantite = 1) {
        this.article = article;
        this.quantite = quantite;
    }
                   
    //« Un exemplaire de plus » touche la quantité. Pas l’article : le livre lui-même ne change pas. C’est donc this.quantite qu’on va modifier
    augmenter() {
        this.quantite++; 
        //this.quantite = this.quantite + 1;
        //ca veut dire « prends la quantité actuelle, ajoute 1, et range le résultat dans la quantité »
    }

    diminuer() {
        this.quantite--;
        //this.quantite = this.quantite - 1;
        //ca veut dire « prends la quantité actuelle, soustrait 1, et range le résultat dans la quantité »
    }

    getSousTotal() {
    return this.article.prix * this.quantite;
    }
}