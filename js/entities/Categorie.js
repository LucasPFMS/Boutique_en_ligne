export default class Categorie {
	constructor(name) {
		this.name = name;
	}
}


export const categories = {
	roman: new Categorie("Roman"),
	scienceFiction: new Categorie("Science-fiction"),
	developpement: new Categorie("Développement"),
	philosophie: new Categorie("Philosophie")
};