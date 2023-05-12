import NavBar from "../UiCommon/NavBar";
import styles from "../styles/homePage/homePage.module.css";
import books from "../../models/books.json";
import { Container, Row, Col } from "react-bootstrap";
import UserBookManager from "../../common/UserBookManager";
import HomePageBanner from "./HomePageBanner";
import { useState } from "react";

function Banner({
  books,
  title
}) {
  return (
    <div className={styles.bannerOuter}>
      <div className={styles.carouselBadge}>
        <h4 className={styles.badgeHeader}>{title}</h4>
        <HomePageBanner books={books} />
      </div>
    </div>
  );
}

export default function HomePage() {
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
    const borrowedBooksLocal = userBookManager.getAllBorrowedBooks();
    const reservedBooksLocal = userBookManager.getAllReservedBooks();
    setBorrowedBooks([]);
    setReservedBooks([]);
    setRecommBooks([]);
    setBestBooks([]);
    setTimeout(() => {
      setBorrowedBooks(borrowedBooksLocal);
      setReservedBooks(reservedBooksLocal);
      setRecommBooks(recommBooks);
      setBestBooks(bestBooks);
    }, 0);
  });

  const [recommBooksDynamic, setRecommBooks] = useState(recommBooks);
  const [bestBooksDynamic, setBestBooks] = useState(bestBooks);

  return (
    <>
      <NavBar showSearchBar={false} />
      <Container className="mb-5" style={{ minHeight: "1300px" }}>
        <Row>
          <Banner
            books={recommBooksDynamic}
            title="Recommended"
          />
        </Row>
        <Row>
          <Banner
            books={bestBooksDynamic}
            title="Bestsellers"
          />
        </Row>
        <Row className={styles.userBooksRow}>
          <Col>
            <Banner
              books={borrowedBooks}
              title="Recommended"
            />
          </Col>
          <Col>
            <Banner
              books={reservedBooks}
              title="Recommended"
            />
          </Col>
        </Row>
      </Container>
    </>
  );
}
