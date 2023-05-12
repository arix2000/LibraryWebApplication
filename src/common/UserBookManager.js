import UserManager from "../components/AdminPanel/utils/UserManager";
import SessionManager from "./SessionManager";
import allBooks from "../models/books.json"

export default class UserBookManager {
  userManager = new UserManager();
  sessionManager = new SessionManager();
  storageEventKey = "storage";


  getUser() { return this.sessionManager.getLoggedUser(); }

  borrowBook(bookId) {
    let user = this.getUser();
    user.borrowed_books.push(bookId);
    this.#updateUser(user);
  }

  reserviseBook(bookId) {
    let user = this.getUser();
    user.reserved_books.push(bookId);
    this.#updateUser(user);
  }

  returnBook(bookId) {
    let user = this.getUser();
    const index = user.borrowed_books.findIndex((borrowedBookId) => borrowedBookId == bookId);
    if (index > -1) {
      user.borrowed_books.splice(index, 1);
    }
    this.#updateUser(user);
  }

  cancelReservation(bookId) {
    let user = this.getUser();
    const index = user.reserved_books.findIndex((reservedBookId) => reservedBookId == bookId);
    if (index > -1) {
      user.reserved_books.splice(index, 1);
    }
    this.#updateUser(user);
  }

  getAllBorrowedBooks() {
    const userBorrowedBooks = allBooks.filter(book => this.getUser().borrowed_books.includes(book.isbn13));
    return userBorrowedBooks;
  }

  getAllReservedBooks() {
    const userReservedBooks = allBooks.filter(book => this.getUser().reserved_books.includes(book.isbn13));
    return userReservedBooks;
  }

  isReserved(bookId) {
    let user = this.getUser();
    return user.reserved_books.includes(bookId);
  }

  isBorrowed(bookId) {
    let user = this.getUser();
    return user.borrowed_books.includes(bookId);
  }

  #updateUser(user) {
    this.userManager.updateUser(user);
    this.sessionManager.updateLoggedUser(user);
    window.dispatchEvent(new Event(this.storageEventKey));
  }

  setOnBookChangeListener(onChange) {
    window.addEventListener(this.storageEventKey, (storageEvent) => {
      onChange();
    });
  }
}