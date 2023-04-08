import LocalStorageKeys from "./LocalStorageKeys";

export default class SessionManager {
  loggedUserKey = LocalStorageKeys.loggedUser;

  login(user) {
    localStorage.setItem(this.loggedUserKey, JSON.stringify(user));
  }

  getLoggedUser() {
    return JSON.parse(localStorage.getItem(this.loggedUserKey));
  }

  logout() {
    localStorage.removeItem(this.loggedUserKey);
  }
}