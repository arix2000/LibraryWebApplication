import { Carousel } from "react-bootstrap";
import styles from "../styles/homePage/homePage.module.css";
import BookItem from "../BookSearch/BookItem";

export default function HomePageCarousel({ books }) {
  return (
    <>
      <Carousel
        className={styles.carousel}
        nextLabel=""
        variant="dark"
        prevLabel=""
      >
        {books.map((book) => (
          <Carousel.Item key={book.isbn13}>
            <BookItem book={book} margin={0} radius={0} />
          </Carousel.Item>
        ))}
      </Carousel>
    </>
  );
}
