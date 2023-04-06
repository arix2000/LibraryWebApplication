import { useState } from "react";
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
import NavigationPaths from "./common/NavigationPaths";

function App() {
  handleFirstTimeOpen();

  return (
    <>
      <BrowserRouter>
        <Container fluid style={{ padding: 0 }}>
          <Routes>
            <Route path={NavigationPaths.root} element={<AdminPanel />} />
            <Route path={NavigationPaths.adminPanel} element={<AdminPanel />} />
            <Route path={NavigationPaths.booksPage} element={<BookPage />} />
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
