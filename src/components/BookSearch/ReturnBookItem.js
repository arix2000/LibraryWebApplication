import styles from "../styles/bookItem.module.css";
import { Col, Row, Card } from "react-bootstrap";
import React, { useState } from "react";
import ImageWIthShimmer from "./ImageWithShimmer";
import BookManager from "../../common/BooksManager";

export default function ReturnBookItem({
  book,
  margin,
  radius,
  onHide
}) {
  const bookManager = new BookManager();
  const [bookDynamic, setBook] = useState(book);

  window.addEventListener("booksStorage", (_) => {
    setBook(bookManager.getBookBy(bookDynamic.isbn13));
  });

  return (
    <>
      <Card
        className={`text-center mt-${margin} label-color ${styles.card}`}
        style={{ borderRadius: radius }}
        text="light"
        onClick={onHide}
      >
        <Row>
          <Col md="auto" xs="auto" className={styles.bookImgWrapperCol}>
            <ImageWIthShimmer book={bookDynamic} styles={styles} />
          </Col>
          <Col>
            <Card.Body className='mt-5'>
              <Card.Title className={`mb-2 ${styles.bookTitle}`}>
                {'"' + bookDynamic.title + '"'}
              </Card.Title>
              <Card.Title className={`${styles.author} mt-3 font-italic`}>
                {bookDynamic.authors.replaceAll(";", ", ")}
              </Card.Title>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </>
  );
}
