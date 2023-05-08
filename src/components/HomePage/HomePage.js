import NavBar from "../UiCommon/NavBar";
import HomePageCarousel from "./HomePageCarousel";
import styles from "../styles/homePage/homePage.module.css";
import books from "../../models/books.json";
import { Container, Row, Col } from "react-bootstrap";
import UserBookManager from "../../common/UserBookManager";
import HomePageBanner from "./HomePageBanner";
import { useState } from "react";

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
    setBorrowedBooks(userBookManager.getAllBorrowedBooks());
    setReservedBooks(userBookManager.getAllReservedBooks());
 });

  return (
    <>
      <NavBar showSearchBar={false} />
      <Container className="mb-5">
        <Row>
          <div className={styles.bannerOuter}>
            <div className={styles.carouselBadge}>
              <h4 className={styles.badgeHeader}>Recommended</h4>
              <HomePageBanner books={recommBooks} />
            </div>
          </div>
        </Row>
        <Row>
          <div className={styles.bannerOuter}>
            <div className={styles.carouselBadge}>
              <h4 className={styles.badgeHeader}>Most Popular Choices</h4>
              <HomePageBanner books={bestBooks} />
            </div>
          </div>
        </Row>
        <Row className={styles.userBooksRow}>
          <Col>
            <div className={styles.carouselOuter}>
              <div className={styles.carouselBadge}>
                <h4 className={styles.badgeHeader}>Borrowed</h4>
                <HomePageCarousel books={borrowedBooks} setBooks={setBorrowedBooks}/>
              </div>
            </div>
          </Col>
          <Col>
            <div className={styles.carouselOuter}>
              <div className={styles.carouselBadge}>
                <h4 className={styles.badgeHeader}>Reserved</h4>
                <HomePageCarousel books={reservedBooks} setBooks={setReservedBooks} />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
