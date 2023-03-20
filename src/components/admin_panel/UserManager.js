
export default class UserManager {

    getUsers() {
        return JSON.parse(localStorage.getItem("users-list"));
    }

    removeUser(user) {
        var users = this.getUsers();
        const index = users.findIndex((userEl) => userEl.id == user.id);
        if (index > -1) {
            users.splice(index, 1);
        }
        localStorage.setItem("users-list", JSON.stringify(users));
        window.dispatchEvent(new Event('storage'));
    } 

    addUser(name, surname, login, password, role) {
        var users = this.getUsers();
        const lastUser = users[users.length -1];
        users.push({id: lastUser.id+1, name: name, surname: surname, login: login, password:password, role: role, 
            reserved_books: [], history: [], borrowed_books: []})
        localStorage.setItem("users-list", JSON.stringify(users));
        window.dispatchEvent(new Event('storage'));
    }

    updateUser(id, name, surname, login, password, role) {
        var users = this.getUsers();
        const index = users.findIndex((userEl) => userEl.id == id);
        if (index > -1) {
            users[index].name = name;
            users[index].surname = surname;
            users[index].login = login;
            users[index].password = password;
            users[index].role = role;
        }
        localStorage.setItem("users-list", JSON.stringify(users));
        window.dispatchEvent(new Event('storage'));
    }
}