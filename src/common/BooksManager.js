import LocalStorageKeys from "./LocalStorageKeys";

export default class BookManager {
    booksKey = LocalStorageKeys.books;
    storageKeyEvent = "booksStorage";

    getBooks() {
        return JSON.parse(localStorage.getItem(this.booksKey));
    }

    getBookBy(bookIsbn13) {
        return this.getBooks().find(book => book.isbn13 === bookIsbn13)
    }

    addBook(title, description, subtitle, authors, categories, rating, imageUrl) {
        var books = this.getBooks();
        var index = books[books.length - 1].isbn13 + 1;
        books.push({
            isbn13: index,
            title: title,
            subtitle: subtitle,
            authors: authors,
            categories: categories,
            thumbnail: imageUrl,
            description: description,
            average_rating: rating,
        });
        this.#setBooks(books);
    }

    editBook(bookIsbn13, title, description, subtitle, authors, categories, rating, imageUrl) {
        var books = this.getBooks();
        var index = books.findIndex(book => book.isbn13 === bookIsbn13);
        if (index != -1) {
            books[index].title = title;
            books[index].description = description;
            books[index].subtitle = subtitle;
            books[index].authors = authors;
            books[index].categories = categories;
            books[index].average_rating = parseFloat(rating);
            books[index].thumbnail = imageUrl;
        }
        this.#setBooks(books);
    }

    removeBook(bookIsbn13) {
        console.log("REMOVE FIRED!");
        var books = this.getBooks();
        var index = books.findIndex(book => book.isbn13 === bookIsbn13);
        if (index != -1) {
            books.splice(index, 1);
        }
        localStorage.setItem(this.booksKey, JSON.stringify(books));
        window.dispatchEvent(new CustomEvent("bookStorageRemove", { detail: bookIsbn13 }));
    }

    #setBooks(books) {
        localStorage.setItem(this.booksKey, JSON.stringify(books));
        window.dispatchEvent(new Event(this.storageKeyEvent));
    }
}