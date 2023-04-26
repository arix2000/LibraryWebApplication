import NavBar from "../UiCommon/NavBar";
import HomePageCarousel from "./HomePageCarousel";
import styles from "../styles/homePage/homePage.module.css";
import books from "../../models/books.json";
import { Container, Row, Col } from "react-bootstrap";
import UserBookManager from "../../common/UserBookManager";

export default function HomePage() {
  const recommBooks = [books[2676], books[65], books[3955]];
  const bestBooks = [books[12], books[19]];

  const userBookManager = new UserBookManager();
  const borrowedBooks = userBookManager.getAllBorrowedBooks();
  const reservedBooks = userBookManager.getAllReservedBooks();

  return (
    <>
      <NavBar showSearchBar={false} />
      <Container className="mb-5">
        <Row>
          <Col>
            <div className={styles.outer}>
              <div className={styles.carouselBadge}>
                <h4>Recommended</h4>
                <HomePageCarousel books={recommBooks} />
              </div>
            </div>
          </Col>
          <Col>
            <div className={styles.outer}>
              <div className={styles.carouselBadge}>
                <h4>Bestsellers</h4>
                <HomePageCarousel books={bestBooks} />
              </div>
            </div>
          </Col>
          <Col>
            <div className={styles.outer}>
              <div className={styles.carouselBadge}>
                <h4>Borrowed</h4>
                <HomePageCarousel books={borrowedBooks} />
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className={styles.outer}>
              <div className={styles.carouselBadge}>
                <h4>Reserved</h4>
                <HomePageCarousel books={reservedBooks} />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
