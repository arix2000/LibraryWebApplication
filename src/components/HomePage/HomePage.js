import NavBar from "../UiCommon/NavBar";
import HomePageCarousel from "./HomePageCarousel";
import styles from "../styles/homePage/homePage.module.css";
import books from "../../models/books.json";
import { Container, Row, Col } from "react-bootstrap";

export default function HomePage() {
  const recommBooks = [books[2676], books[65], books[3955]];
  const bestBooks = [books[12], books[19]];
  const borrowedBooks = [books[126], books[718], books[351], books[913], books[83]];

  return (
    <>
      <NavBar showSearchBar={false} />
      <Container>
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
      </Container>
    </>
  );
}
