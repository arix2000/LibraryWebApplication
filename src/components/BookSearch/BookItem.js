import styles from "../styles/bookItem.module.css";
import { Col, Row, Card, Container } from "react-bootstrap";
import { Rating } from "@mui/material";
import React, { useState, useEffect } from "react";
import BookDetailModal from "./BookDetail/BookDetailModal";
import BorrowButton from "./common/BorrowButton";
import UserBookManager from "../../common/UserBookManager";

export default function BookItem({
  book,
  margin,
  handleBorrowClick,
  handleReserveClick,
  handleReturnClick,
  handleCancelClick,
  isBookBorrowed,
  isBookReserved,
}) {
  const [detailShow, setDetailShow] = useState(false);
  const [imgObjectFitStyle, setImgObjectFitStyle] = useState(
    styles.cardImgFitContain
  );

  const userBookManager = new UserBookManager();

  const isBorrowed = userBookManager.isBorrowed(book.isbn13);
  const isReserved = userBookManager.isReserved(book.isbn13);

  return (
    <>
      <Card
        className={`text-center mt-${margin} label-color ${styles.card}`}
        text="light"
        onClick={() => setDetailShow(true)}
      >
        <Row>
          <Col md="auto" xs="auto" className={styles.bookImgWrapperCol}>
            <img
              className={`${styles.cardImg} ${imgObjectFitStyle}`}
              src={book.thumbnail}
              onLoad={(img) => {
                if (img.currentTarget.clientWidth == 180) {
                  setImgObjectFitStyle(styles.cardImgFitFill);
                }
              }}
              onError={({ currentTarget }) => {
                currentTarget.onerror = null;
                currentTarget.src =
                  "https://linda-hoang.com/wp-content/uploads/2014/10/img-placeholder-dark-vertical.jpg";
              }}
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
              <BorrowButton
                rowStyles={styles.itemButtonSection}
                book={book}
                handleBorrowClick={handleBorrowClick}
                handleCancelClick={handleCancelClick}
                handleReserveClick={handleReserveClick}
                handleReturnClick={handleReturnClick}
                isBookBorrowed={isBorrowed}
                isBookReserved={isReserved}
              />
            </Card.Body>
          </Col>
        </Row>
      </Card>
      <BookDetailModal
        show={detailShow}
        onHide={() => setDetailShow(false)}
        book={book}
        handleBorrowClick={handleBorrowClick}
        handleCancelClick={handleCancelClick}
        handleReserveClick={handleReserveClick}
        handleReturnClick={handleReturnClick}
        isBookBorrowed={isBookBorrowed}
        isBookReserved={isBookReserved}
      />
    </>
  );
}
