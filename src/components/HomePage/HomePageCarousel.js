import { Carousel } from "react-bootstrap";
import styles from "../styles/homePage/homePage.module.css";
import BookDetailModal from "../BookSearch/BookDetail/BookDetailModal";
import { useState } from "react";

export default function HomePageCarousel({ books }) {
  const [detailShow, setDetailShow] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);

  const handleImgClick = (book) => {
    setSelectedBook(book);
    setDetailShow(true);
  };
  

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
            <img
              className={styles.carouselImg}
              src={book.thumbnail}
              alt={book.title}
              onClick={() => handleImgClick(book)}
            />
          </Carousel.Item>
        ))}
      </Carousel>
      {selectedBook && (
        <BookDetailModal
          show={detailShow}
          onHide={() => setDetailShow(false)}
          book={selectedBook}
        />
      )}
    </>
  );
}
