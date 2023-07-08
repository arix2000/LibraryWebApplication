import AdminPanel from "./components/AdminPanel/AdminPanel";
import usersJson from "./models/users.json";
import allBooks from "./models/books.json";
import LoginPage from "./components/LoginPage/LoginPage";
import BookPage from "./components/BookSearch/BookPage";
import "./components/styles/global-styles.css";
import FirstTimeManager from "./common/FirstTimeManager";
import LocalStorageKeys from "./common/LocalStorageKeys";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import AppRoutes from "./common/AppRoutes";
import HomePage from "./components/HomePage/HomePage";
import UserHistoryPage from "./components/ProfilePage/history/ui/UserHistoryPage";
import PrivateRoute from "./components/UiCommon/PrivateRoute";
import ContactPage from "./components/ContactPage/ContactPage";
import LoginRedirect from "./components/UiCommon/LoginRedirect";

function App() {
  handleFirstTimeOpen();
  return (
    <>
      <BrowserRouter>
        <Container className="text-light" fluid style={{ padding: 0 }}>
          <Routes>
            <Route
              path={AppRoutes.contactPage}
              element={
                <PrivateRoute>
                  <ContactPage />
                </PrivateRoute>
              }
            />

            <Route
              path={AppRoutes.root}
              element={
                <LoginRedirect>
                  <LoginPage />
                </LoginRedirect>} />
            <Route
              path={AppRoutes.adminPanel}
              element={
                <PrivateRoute>
                  <AdminPanel />
                </PrivateRoute>
              }
            />
            <Route
              path={AppRoutes.booksPage}
              element={
                <PrivateRoute>
                  <BookPage />
                </PrivateRoute>
              }
            />
            <Route
              path={AppRoutes.homePage}
              element={
                <PrivateRoute>
                  <HomePage />
                </PrivateRoute>
              }
            />
            <Route
              path={AppRoutes.userHistoryPage}
              element={
                <PrivateRoute>
                  <UserHistoryPage />
                </PrivateRoute>
              }
            />
          </Routes>
        </Container>
      </BrowserRouter>
    </>
  );
}

export default App;

function handleFirstTimeOpen() {
  const firstTimeManager = new FirstTimeManager();
  if (firstTimeManager.isFirstTime()) {
    localStorage.setItem(LocalStorageKeys.userList, JSON.stringify(usersJson));
    localStorage.setItem(LocalStorageKeys.books, JSON.stringify(allBooks));
  }
}
