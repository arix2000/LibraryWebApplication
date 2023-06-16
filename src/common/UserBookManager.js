import UserManager from "../components/AdminPanel/utils/UserManager";
import SessionManager from "./SessionManager";
import allBooks from "../models/books.json"
import HistoryManager from "./HistoryManager";
import HistoryObject from "../components/ProfilePage/history/HistoryObject"
import HistoryActions from "../components/ProfilePage/history/HistoryActionsEnum";

export default class UserBookManager {
  userManager = new UserManager();
  sessionManager = new SessionManager();
  historyManager = new HistoryManager();
  storageEventKey = "storage";


  #getUser() { return this.sessionManager.getLoggedUser(); }

  borrowBook(bookId) {
    let user = this.#getUser();
    user.borrowed_books.push(bookId);
    this.#updateUser(user);
    this.historyManager.logHistory(HistoryActions.Borrow, bookId, user);
  }

  reserviseBook(bookId) {
    let user = this.#getUser();
    user.reserved_books.push(bookId);
    this.#updateUser(user);
    this.historyManager.logHistory(HistoryActions.Reserve, bookId, user);
  }

  returnBook(bookId) {
    let user = this.#getUser();
    const index = user.borrowed_books.findIndex((borrowedBookId) => borrowedBookId == bookId);
    if (index > -1) {
      user.borrowed_books.splice(index, 1);
    }
    this.#updateUser(user);
    this.historyManager.logHistory(HistoryActions.Return, bookId, user);
  }

  cancelReservation(bookId) {
    let user = this.#getUser();
    const index = user.reserved_books.findIndex((reservedBookId) => reservedBookId == bookId);
    if (index > -1) {
      user.reserved_books.splice(index, 1);
    }
    this.#updateUser(user);
    this.historyManager.logHistory(HistoryActions.CancelReservation, bookId, user);
  }

  getAllBorrowedBooks() {
    const userBorrowedBooks = allBooks.filter(book => this.#getUser().borrowed_books.includes(book.isbn13));
    return userBorrowedBooks;
  }

  getAllReservedBooks() {
    const userReservedBooks = allBooks.filter(book => this.#getUser().reserved_books.includes(book.isbn13));
    return userReservedBooks;
  }

  isReserved(bookId) {
    return this.#getUser().reserved_books.includes(bookId);
  }

  isBorrowed(bookId) {
    return this.#getUser().borrowed_books.includes(bookId);
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