import NavBar from "./components/BookSearch/NavBar";
import { useState } from "react";
import BookList from "./components/BookSearch/BookList";
import LoginPage from "./components/LoginPage/LoginPage";
import AdminPanel from "./components/AdminPanel";
import data from "./models/books.json"
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/styles/global-styles.css';

function App() {

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
                <BookList books={books}/>
            </>
        )
};

export default App;
