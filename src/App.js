import SearchBar from "./components/BookSearch/SearchBar";
import LoginPage from "./components/LoginPage/LoginPage";
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/styles/global-styles.css';

function App() {

    const handleSearchSubmit = (term) => {
        console.log("You've searched for", term);
    }

    return (
        <div>
            <SearchBar onSubmit={handleSearchSubmit}/>
            <LoginPage/>
        </div>
        )
};

export default App;
