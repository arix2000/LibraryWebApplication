import { Carousel } from "react-bootstrap";
import styles from "../styles/homePage/homePage.module.css";
import BookDetailModal from "../BookSearch/BookDetail/BookDetailModal";
import { useState } from "react";

export default function RecommCarousel({ books }) {
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
        nextIcon=""
        nextLabel=""
        variant="dark"
        prevIcon=""
        prevLabel=""
      >
        <Carousel.Item key={books[2676].isbn13}>
          <img
            className={styles.carouselImg}
            src={books[2676].thumbnail}
            alt={books[2676].title}
            onClick={() => handleImgClick(books[2676])}
          />
        </Carousel.Item>
        <Carousel.Item key={books[65].isbn13}>
          <img
            className={styles.carouselImg}
            src={books[65].thumbnail}
            alt={books[65].title}
            onClick={() => handleImgClick(books[65])}
          />
        </Carousel.Item>
        <Carousel.Item key={books[3955].isbn13}>
          <img
            className={styles.carouselImg}
            src={books[3955].thumbnail}
            alt={books[3955].title}
            onClick={() => handleImgClick(books[3955])}
          />
        </Carousel.Item>
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
