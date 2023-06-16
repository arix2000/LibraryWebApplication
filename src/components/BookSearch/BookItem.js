import styles from "../styles/bookItem.module.css";
import { Col, Row, Card } from "react-bootstrap";
import { Rating } from "@mui/material";
import React, { useState } from "react";
import BookDetailModal from "./BookDetail/BookDetailModal";
import BorrowButton from "./common/BorrowButton";
import ImageWIthShimmer from "./ImageWithShimmer";

export default function BookItem({ book, margin, radius }) {
  const [detailShow, setDetailShow] = useState(false);

  return (
    <>
      <Card
        className={`text-center mt-${margin} label-color ${styles.card}`}
        style={{ borderRadius: radius }}
        text="light"
        onClick={() => setDetailShow(true)}
      >
        <Row>
          <Col md="auto" xs="auto" className={styles.bookImgWrapperCol}>
            <ImageWIthShimmer book={book} styles={styles}/>
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
              <BorrowButton rowStyles={styles.itemButtonSection} book={book} />
            </Card.Body>
          </Col>
        </Row>
      </Card>
      <BookDetailModal
        show={detailShow}
        onHide={() => setDetailShow(false)}
        book={book}
      />
    </>
  );
}