import Categorie from "./Categorie.js";

export default class Article {
	constructor(picture, title, author, datePublishing, description, resume, editor, price, category) {
		if (!(category instanceof Categorie)) {
			throw new TypeError("category must be an instance of Categorie");
		}

		this.picture = picture;
		this.title = title;
		this.author = author;
		this.datePublishing = datePublishing;
		this.description = description;
		this.resume = resume;
		this.editor = editor;
		this.price = price;
		this.category = category;
	}
}
