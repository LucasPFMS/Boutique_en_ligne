import Categorie from "./Categorie.js";

export default class Article {
	constructor(picture, title, author, datePublishing, resume, editor, price, category) {
		if (!(category instanceof Categorie)) {
			throw new TypeError("Catégorie non existante");
		}

		this.picture = picture;
		this.title = title;
		this.author = author;
		this.datePublishing = datePublishing;
		this.resume = resume;
		this.editor = editor;
		this.price = price;
		this.category = category;
	}
}



export const articles = [
	new Article(
		"images/livre-prince.jpg",
		"Le Petit Prince",
		"Antoine de Saint-Exupéry",
		"1943",
		"Un conte poétique et philosophique sur l'amitié, la solitude et le sens de la vie.",
		"Gallimard",
		14.9,
		categories.roman
	),
	new Article(
		"images/livre-1984.jpg",
		"1984",
		"George Orwell",
		"1949",
		"Un roman dystopique qui explore la surveillance, la manipulation et la liberté individuelle.",
		"Seuil",
		12.5,
		categories.scienceFiction
	),
	new Article(
		"images/livre-clean-code.jpg",
		"Clean Code",
		"Robert C. Martin",
		"2008",
		"Un guide essentiel pour écrire du code propre, lisible et maintenable.",
		"Pearson",
		29.9,
		categories.developpement
	),
	new Article(
		"images/livre-meditation.jpg",
		"Les méditations",
		"Marc Aurèle",
		"-180",
		"Un texte intemporel sur la sagesse, la raison et la maîtrise de soi.",
		"Flammarion",
		9.9,
		categories.philosophie
	)
];

export const livres = articles;
