import styles from "../styles/bookItem.module.css";
import { Col, Row, Card, Container } from "react-bootstrap";
import { Rating } from "@mui/material";
import { useState } from "react";
import BookDetailModal from "./BookDetail/BookDetailModal";
import BorrowButton from "./common/BorrowButton";

export default function BookItem({ book }) {
  const [detailShow, setDetailShow] = useState(false);

  return (
    <>
      <Card
        className={`text-center mt-4 label-color ${styles.card}`}
        text="light"
        onClick={() => setDetailShow(true)}
      > 
        <Row >
          <Col>
            <Card.Img
              className={styles.cardImg}
              src={book.thumbnail}
              alt={book.title + " Cover"}
            />
          </Col>
          <Col>
            <Card.Body>
              <Card.Title className={`mb-2 ${styles.bookTitle}`}>
                {'"' + book.title + '"'}
              </Card.Title>
              <Card.Title className={`${styles.author} mt-3 font-italic`}>
                {book.authors.replaceAll(";", ", ")}
              </Card.Title>
              <Card.Title className="mt-4">
                <Rating
                  name="half-rating-read"
                  defaultValue={book.average_rating}
                  precision={0.1}
                  readOnly
                />
              </Card.Title>
            </Card.Body>
          </Col>
        </Row>
        <BorrowButton width={28} height={28} useIcon={true} />
      </Card>
      <BookDetailModal
        show={detailShow}
        onHide={() => setDetailShow(false)}
        book={book}
      />
    </>
  );
}
