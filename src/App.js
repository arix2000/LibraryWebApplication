import AdminPanel from "./components/AdminPanel/AdminPanel";
import usersJson from "./models/users.json";
import LoginPage from "./components/LoginPage/LoginPage";
import BookPage from "./components/BookSearch/BookPage";
import "./components/styles/global-styles.css";
import FirstTimeManager from "./common/FirstTimeManager";
import LocalStorageKeys from "./common/LocalStorageKeys";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import AppRoutes from "./common/AppRoutes";
import HomePage from "./components/HomePage/HomePage";
import UserHistoryPage from "./components/ProfilePage/UserHistoryPage";
import PrivateRoute from "./components/UiCommon/PrivateRoute";
import UserBookManager from "./common/UserBookManager";
import { useState, useEffect } from "react";

function App() {
  handleFirstTimeOpen();

  const userBookManager = new UserBookManager();

  const [isBookBorrowed, setIsBookBorrowed] = useState();
  const [isBookReserved, setIsBookReserved] = useState();

  const handleBorrowClick = (book) => {
    userBookManager.borrowBook(book.isbn13);
    setIsBookBorrowed(true);
    setIsBookReserved(false);
  };
  const handleReturnClick = (book) => {
    userBookManager.returnBook(book.isbn13);
    setIsBookBorrowed(false);
  };
  const handleReserveClick = (book) => {
    userBookManager.reserviseBook(book.isbn13);
    setIsBookReserved(true);
    setIsBookBorrowed(false);
  };
  const handleCancelClick = (book) => {
    userBookManager.cancelReservation(book.isbn13);
    setIsBookReserved(false);
  };

  return (
    <>
      <BrowserRouter>
        <Container className="text-light" fluid style={{ padding: 0 }}>
          <Routes>
            <Route path={AppRoutes.root} element={<LoginPage />} />
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
                  <BookPage
                    handleBorrowClick={handleBorrowClick}
                    handleCancelClick={handleCancelClick}
                    handleReserveClick={handleReserveClick}
                    handleReturnClick={handleReturnClick}
                    isBookBorrowed={isBookBorrowed}
                    isBookReserved={isBookReserved}
                    setIsBookBorrowed={setIsBookBorrowed}
                    setIsBookReserved={setIsBookReserved}
                  />
                </PrivateRoute>
              }
            />
            <Route
              path={AppRoutes.homePage}
              element={
                <PrivateRoute>
                  <HomePage
                    handleBorrowClick={handleBorrowClick}
                    handleCancelClick={handleCancelClick}
                    handleReserveClick={handleReserveClick}
                    handleReturnClick={handleReturnClick}
                    isBookBorrowed={isBookBorrowed}
                    isBookReserved={isBookReserved}
                    setIsBookBorrowed={setIsBookBorrowed}
                    setIsBookReserved={setIsBookReserved}
                  />
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
  }
}
