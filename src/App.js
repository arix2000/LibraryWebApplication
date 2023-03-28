import NavBar from "./components/NavBar/NavBar";
import { useState } from "react";
import BookList from "./components/BookSearch/BookList";
import usersJson from './models/users.json';
import data from "./models/books.json";
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/styles/global-styles.css';
import AdminPanel from "./components/admin_panel/AdminPanel";
import FirstTimeManager from "./common/FirstTimeManager";
import LocalStorageKeys from "./common/LocalStorageKeys";
import LoginPage from "./components/LoginPage/LoginPage";

function App() {
    handleFirstTimeOpen();
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
            <LoginPage />
            {/* <NavBar onSubmit={handleSearchSubmit} /> */}
            {/* <AdminPanel /> */}
        </>
    )
};

export default App;


function handleFirstTimeOpen() {
    const firstTimeManager = new FirstTimeManager();
    if (firstTimeManager.isFirstTime()) {
        localStorage.setItem(LocalStorageKeys.userList, JSON.stringify(usersJson))
    }
}
