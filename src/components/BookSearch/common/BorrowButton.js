import { Button, Row } from "react-bootstrap";
import { RiBookMarkFill, RiHealthBookFill } from "react-icons/ri";
import styles from "../../styles/bookItem.module.css";
import UserBookManager from "../../../common/UserBookManager";
import { useState } from "react";

export default function BorrowButton({ rowStyles, book }) {
  const userBookManager = new UserBookManager();

  const isBookReserved = userBookManager.isReserved(book.isbn13);
  const isBookBorrowed = userBookManager.isBorrowed(book.isbn13);

  const [isBorrowed, setIsBookBorrowed] = useState(isBookBorrowed);
  const [isReserved, setIsBookReserved] = useState(isBookReserved);

  const handleBorrowClick = (e) => {
    e.stopPropagation();
    userBookManager.borrowBook(book.isbn13);
    setIsBookBorrowed(true);
    setIsBookReserved(false);
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
    setIsBookBorrowed(false);
  };
  const handleCancelClick = (e) => {
    e.stopPropagation();
    userBookManager.cancelReservation(book.isbn13);
    setIsBookReserved(false);
  };

  return (
    <Row className={rowStyles}>
      {isBorrowed ? (
        <>
          <Button
            onClick={handleReserveClick}
            variant="primary"
            className={`${styles.borrowButton} button-radius`}
          >
            Reserve <RiBookMarkFill style={{ width: 20, height: 20 }} />
          </Button>
          <Button
            onClick={handleReturnClick}
            variant="success"
            className={`${styles.borrowButton} button-radius`}
          >
            Return <RiHealthBookFill style={{ width: 20, height: 20 }} />
          </Button>
        </>
      ) : isReserved ? (
        <>
          <Button
            onClick={handleCancelClick}
            variant="primary"
            className={`${styles.borrowButton} button-radius`}
          >
            Cancel Res...{" "}
          </Button>
          <Button
            onClick={handleBorrowClick}
            variant="success"
            className={`${styles.borrowButton} button-radius`}
          >
            Borrow <RiHealthBookFill style={{ width: 20, height: 20 }} />
          </Button>
        </>
      ) : (
        <>
          <Button
            onClick={handleReserveClick}
            variant="primary"
            className={`${styles.borrowButton} button-radius`}
          >
            Reserve <RiBookMarkFill style={{ width: 20, height: 20 }} />
          </Button>
          <Button
            onClick={handleBorrowClick}
            variant="success"
            className={`${styles.borrowButton} button-radius`}
          >
            Borrow <RiHealthBookFill style={{ width: 20, height: 20 }} />
          </Button>
        </>
      )}
    </Row>
  );
}
