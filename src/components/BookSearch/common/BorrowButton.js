import { Button, Row } from "react-bootstrap";
import { RiBookMarkFill, RiHealthBookFill } from "react-icons/ri";
import styles from "../../styles/bookItem.module.css";
import UserBookManager from "../../../common/UserBookManager";
import { useState } from "react";

export default function BorrowButton({ rowStyles, book }) {
  const userBookManager = new UserBookManager();

  const [isBookBorrowed, setIsBookBorrowed] = useState(
    userBookManager.isBorrowed(book.isbn13)
  );
  const [isBookReserved, setIsBookReserved] = useState(
    userBookManager.isReserved(book.isbn13)
  );

  const handleBorrowClick = (e) => {
    e.stopPropagation();
    userBookManager.borrowBook(book.isbn13);
    setIsBookBorrowed(true);
  };
  const handleReturnClick = (e) => {
    e.stopPropagation();
    userBookManager.returnBook(book.isbn13);
    setIsBookBorrowed(false);
  };
  const handleReserveClick = (e) => {
    e.stopPropagation();
    userBookManager.reserviseBook(book.isbn13);
    setIsBookReserved(true);
  };
  const handleCancelClick = (e) => {
    e.stopPropagation();
    userBookManager.cancelReservation(book.isbn13);
    setIsBookReserved(false);
  };

  return (
    <Row className={rowStyles}>
      <Button
        onClick={
          isBookReserved
            ? (e) => handleCancelClick(e)
            : (e) => handleReserveClick(e)
        }
        variant="primary"
        className={`${styles.borrowButton} button-radius`}
      >
        {isBookReserved ? "Cancel Res." : "Reserve"}{" "}
        <RiBookMarkFill style={{ width: 20, height: 20 }} />
      </Button>
      <Button
        onClick={
          isBookBorrowed
            ? (e) => handleReturnClick(e)
            : (e) => handleBorrowClick(e)
        }
        variant="success"
        className={`${styles.borrowButton} button-radius`}
      >
        {isBookBorrowed ? "Return" : "Borrow"}{" "}
        <RiHealthBookFill style={{ width: 20, height: 20 }} />
      </Button>
    </Row>
  );
}
