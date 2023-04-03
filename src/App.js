import { useState } from "react";
import AdminPanel from "./components/AdminPanel/AdminPanel"
import usersJson from './models/users.json';
import data from "./models/books.json";
import LoginPage from "./components/LoginPage/LoginPage"
import './components/styles/global-styles.css';
import FirstTimeManager from "./common/FirstTimeManager";
import LocalStorageKeys from "./common/LocalStorageKeys";
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";

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
            <div className="appContainer">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<LoginPage />} />
                    <Route path="/adminPanel" element={<AdminPanel />} />
                </Routes>
            </BrowserRouter>
            </div>
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
