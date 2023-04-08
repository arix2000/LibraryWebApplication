import AdminPanel from "./components/AdminPanel/AdminPanel"
import usersJson from './models/users.json';
import LoginPage from "./components/LoginPage/LoginPage"
import BookPage from "./components/BookSearch/BookPage"
import './components/styles/global-styles.css';
import FirstTimeManager from "./common/FirstTimeManager";
import LocalStorageKeys from "./common/LocalStorageKeys";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Container } from "react-bootstrap";
import AppRoutes from "./common/AppRoutes";
import HomePage from "./components/HomePage/HomePage";

function App() {
  handleFirstTimeOpen();

  return (
    <>
      <BrowserRouter>
        <Container fluid style={{ padding: 0 }}>
          <Routes>
            <Route path={AppRoutes.root} element={<LoginPage />} />
            <Route path={AppRoutes.adminPanel} element={<AdminPanel />} />
            <Route path={AppRoutes.booksPage} element={<BookPage />} />
            <Route path={AppRoutes.homePage} element={<HomePage />} />
          </Routes>
        </Container>
      </BrowserRouter>
    </>
  )
};

export default App;

function handleFirstTimeOpen() {
  const firstTimeManager = new FirstTimeManager();
  if (firstTimeManager.isFirstTime()) {
    localStorage.setItem(LocalStorageKeys.userList, JSON.stringify(usersJson));
  }
}
