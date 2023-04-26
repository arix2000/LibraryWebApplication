import styles from "../styles/bookItem.module.css";
import { Col, Row, Card, Container } from "react-bootstrap";
import { Rating } from "@mui/material";
import React, { useState } from "react";
import BookDetailModal from "./BookDetail/BookDetailModal";
import BorrowButton from "./common/BorrowButton";
import UserBookManager from "../../common/UserBookManager";

export default function BookItem({ book, margin, radius }) {
  const [detailShow, setDetailShow] = useState(false);
  const [imgObjectFitStyle, setImgObjectFitStyle] = useState(
    styles.cardImgFitContain
  );
  const userBookManager = new UserBookManager();

  const isBookReserved = userBookManager.isBookReservedByUser(book.isbn13);
  const isBookBorrowed = userBookManager.isBookBorrowedByUser(book.isbn13);

  const handleBorrow = () => {
    userBookManager.borrowBook(book.isbn13);
  };
  const handleReserve = () => {
    userBookManager.reserviseBook(book.isbn13);
  };
  const handleReserveCancel = () => {
    userBookManager.cancelReservation(book.isbn13);
  };
  const handleBookReturn = () => {
    userBookManager.returnBook(book.isbn13);
  };

  return (
    <>
      <Card
        className={`text-center mt-${margin} label-color ${styles.card}`}
        text="light"
        onClick={() => setDetailShow(true)}
        style={{ borderRadius: { radius } }}
      >
        <Row>
          <Col md="auto" xs="auto" className={styles.bookImgWrapperCol}>
            {book.thumbnail.length != 0 ? (
              <img
                className={`${styles.cardImg} ${imgObjectFitStyle}`}
                src={book.thumbnail}
                onLoad={(img) => {
                  if (img.currentTarget.clientWidth == 180) {
                    setImgObjectFitStyle(styles.cardImgFitFill);
                  }
                }}
              />
            ) : (
              <img
                styles={styles.cardImg}
                style={{
                  width: "167px",
                  borderTopLeftRadius: { radius },
                  borderTopRightRadius: "0px",
                  borderBottomLeftRadius: { radius },
                  borderBottomRightRadius: "0px",
                }}
                src="https://linda-hoang.com/wp-content/uploads/2014/10/img-placeholder-dark-vertical.jpg"
              />
            )}
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
                handleBorrow={handleBorrow}
                handleBookReturn={handleBookReturn}
                handleReserve={handleReserve}
                handleReserveCancel={handleReserveCancel}
                isBookBorrowed={isBookBorrowed}
                isBookReserved={isBookReserved}
              />
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
