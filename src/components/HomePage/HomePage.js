import NavBar from "../UiCommon/NavBar";
import styles from "../styles/homePage/homePage.module.css";
import books from "../../models/books.json";
import { Container, Row, Col } from "react-bootstrap";
import UserBookManager from "../../common/UserBookManager";
import HomePageBanner from "./HomePageBanner";
import { useState } from "react";

function Banner({
  books,
  title,
  handleBorrowClick,
  handleReserveClick,
  handleReturnClick,
  handleCancelClick,
}) {
  return (
    <div className={styles.bannerOuter}>
      <div className={styles.carouselBadge}>
        <h4 className={styles.badgeHeader}>{title}</h4>
        <HomePageBanner
          books={books}
          handleBorrowClick={handleBorrowClick}
          handleCancelClick={handleCancelClick}
          handleReserveClick={handleReserveClick}
          handleReturnClick={handleReturnClick}
        />
      </div>
    </div>
  );
}

export default function HomePage({
  handleBorrowClick,
  handleReserveClick,
  handleReturnClick,
  handleCancelClick,
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
          <Banner
            books={filteredRecommBooks}
            title="Recommended"
            handleBorrowClick={handleBorrowClick}
            handleCancelClick={handleCancelClick}
            handleReserveClick={handleReserveClick}
            handleReturnClick={handleReturnClick}
          />
        </Row>
        <Row>
          <Banner
            books={filteredBestBooks}
            title="Bestsellers"
            handleBorrowClick={handleBorrowClick}
            handleCancelClick={handleCancelClick}
            handleReserveClick={handleReserveClick}
            handleReturnClick={handleReturnClick}
          />
        </Row>
        <Row className={styles.userBooksRow}>
          <Col>
            <Banner
              books={borrowedBooks}
              title="Recommended"
              handleBorrowClick={handleBorrowClick}
              handleCancelClick={handleCancelClick}
              handleReserveClick={handleReserveClick}
              handleReturnClick={handleReturnClick}
            />
          </Col>
          <Col>
            <Banner
              books={reservedBooks}
              title="Recommended"
              handleBorrowClick={handleBorrowClick}
              handleCancelClick={handleCancelClick}
              handleReserveClick={handleReserveClick}
              handleReturnClick={handleReturnClick}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
}
