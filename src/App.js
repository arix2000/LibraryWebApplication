import NavBar from "./components/BookSearch/NavBar";
import { useState } from "react";
import BookList from "./components/BookSearch/BookList";
import usersJson from './models/users.json';
import data from "./models/books.json";
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/styles/global-styles.css';
import AdminPanel from "./components/admin_panel/AdminPanel";

function App() {
    localStorage.setItem("users-list", JSON.stringify(usersJson))

    const [books, setBooks] = useState([]);

    const handleSearchSubmit = (query) => {
            const result = data.filter((item) => {
                            return query === '' ? item :
                            item.title.toString().toLowerCase().includes(query.toLowerCase())
                            })
            setBooks(result);
    }


    return (
            <>
                <NavBar onSubmit={handleSearchSubmit}/>
                <AdminPanel/>
            </>
        )
};

export default App;
