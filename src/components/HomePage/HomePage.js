import NavBar from "../UiCommon/NavBar";
import styles from "../styles/homePage/homePage.module.css";
import books from "../../models/books.json";
import { Container, Row, Col } from "react-bootstrap";
import UserBookManager from "../../common/UserBookManager";
import HomePageBanner from "./HomePageBanner";
import { useState } from "react";

export default function HomePage({
  handleBorrowClick,
  handleReserveClick,
  handleReturnClick,
  handleCancelClick,
  isBookBorrowed,
  isBookReserved,
  setIsBookBorrowed,
  setIsBookReserved,
}) {
  const recommBooks = [
    books[2676],
    books[65],
    books[3955],
    books[3956],
    books[64],
    books[2677],
  ];
  const bestBooks = [
    books[12],
    books[19],
    books[11],
    books[121],
    books[66],
    books[71],
    books[1],
  ];

  const userBookManager = new UserBookManager();
  const [borrowedBooks, setBorrowedBooks] = useState(
    userBookManager.getAllBorrowedBooks()
  );
  const [reservedBooks, setReservedBooks] = useState(
    userBookManager.getAllReservedBooks()
  );
  userBookManager.setOnBookChangeListener(() => {
    setBorrowedBooks(userBookManager.getAllBorrowedBooks());
    setReservedBooks(userBookManager.getAllReservedBooks());
  });

  const filteredRecommBooks = recommBooks.filter(
    (book) => !borrowedBooks.includes(book) && !reservedBooks.includes(book)
  );
  const filteredBestBooks = bestBooks.filter(
    (book) => !borrowedBooks.includes(book) && !reservedBooks.includes(book)
  );

  return (
    <>
      <NavBar showSearchBar={false} />
      <Container className="mb-5">
        <Row>
          <div className={styles.bannerOuter}>
            <div className={styles.carouselBadge}>
              <h4 className={styles.badgeHeader}>Recommended</h4>
              <HomePageBanner
                books={filteredRecommBooks}
                handleBorrowClick={handleBorrowClick}
                handleCancelClick={handleCancelClick}
                handleReserveClick={handleReserveClick}
                handleReturnClick={handleReturnClick}
                isBookBorrowed={isBookBorrowed}
                isBookReserved={isBookReserved}
                setIsBookBorrowed={setIsBookBorrowed}
                setIsBookReserved={setIsBookReserved}
              />
            </div>
          </div>
        </Row>
        <Row>
          <div className={styles.bannerOuter}>
            <div className={styles.carouselBadge}>
              <h4 className={styles.badgeHeader}>Most Popular Choices</h4>
              <HomePageBanner
                books={filteredBestBooks}
                handleBorrowClick={handleBorrowClick}
                handleCancelClick={handleCancelClick}
                handleReserveClick={handleReserveClick}
                handleReturnClick={handleReturnClick}
                isBookBorrowed={isBookBorrowed}
                isBookReserved={isBookReserved}
                setIsBookBorrowed={setIsBookBorrowed}
                setIsBookReserved={setIsBookReserved}
              />
            </div>
          </div>
        </Row>
        <Row className={styles.userBooksRow}>
          <Col>
            <div className={styles.carouselOuter}>
              <div className={styles.carouselBadge}>
                <h4 className={styles.badgeHeader}>Borrowed</h4>
                <HomePageBanner
                  books={borrowedBooks}
                  handleBorrowClick={handleBorrowClick}
                  handleCancelClick={handleCancelClick}
                  handleReserveClick={handleReserveClick}
                  handleReturnClick={handleReturnClick}
                  isBookBorrowed={isBookBorrowed}
                  isBookReserved={isBookReserved}
                  setIsBookBorrowed={setIsBookBorrowed}
                  setIsBookReserved={setIsBookReserved}
                />
              </div>
            </div>
          </Col>
          <Col>
            <div className={styles.carouselOuter}>
              <div className={styles.carouselBadge}>
                <h4 className={styles.badgeHeader}>Reserved</h4>
                <HomePageBanner
                  books={reservedBooks}
                  handleBorrowClick={handleBorrowClick}
                  handleCancelClick={handleCancelClick}
                  handleReserveClick={handleReserveClick}
                  handleReturnClick={handleReturnClick}
                  isBookBorrowed={isBookBorrowed}
                  isBookReserved={isBookReserved}
                  setIsBookBorrowed={setIsBookBorrowed}
                  setIsBookReserved={setIsBookReserved}
                />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
