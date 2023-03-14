import SearchBar from "./components/BookSearch/SearchBar";
import { useState } from "react";
import BookList from "./components/BookSearch/BookList";
import LoginPage from "./components/LoginPage/LoginPage";
import AdminPanel from "./components/AdminPanel";
import data from "./models/books.json"
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/styles/global-styles.css';

function App() {

    const [books, setBooks] = useState([]);

    const handleSearchSubmit = (term) => {
            const result = data.filter((item) => {
                            return term.toLowerCase() === '' ? item :
                            item.title.toString().toLowerCase().includes(term)
                            })
            setBooks(result);
    }


    return (
        <div className="background-color">
            <SearchBar onSubmit={handleSearchSubmit}/>
            <BookList books={books}/>
        </div>
        )
};

export default App;
