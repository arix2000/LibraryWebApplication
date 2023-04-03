export default function translateRole(role) {
    switch (role) {
        case "admin": return "Administrator";
        case "user": return "Użytkownik";
        case "librarian": return "Bibliotekarz";
        case "Administrator": return "admin";
        case "Użytkownik": return "user";
        case "Bibliotekarz": return "librarian";
        default: return role;
    }
}