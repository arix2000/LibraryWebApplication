import { Button } from "react-bootstrap";

import { RiBookMarkFill, RiHealthBookFill } from "react-icons/ri";
import styles from "../../styles/bookItem.module.css";
import UserBookManager from "../../../common/UserBookManager";
import { useState } from "react";

export default function BorrowButton({ rowStyles, book, isLibrarian, onBorrowBookClicked }) {
  const userBookManager = new UserBookManager();

  const [isBookReserved, setIsBookReserved] = useState(
    userBookManager.isReserved(book.isbn13)
  );
  
  const [isBookBorrowed, setIsBookBorrowed] = useState(
    userBookManager.isBorrowed(book.isbn13)
  );

  const handleBorrowClick = (e) => {
    e.stopPropagation();
    onBorrowBookClicked();
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
    <>
      <div className={rowStyles}>
        <Button
          onClick={
            isBookReserved
              ? (e) => handleCancelClick(e)
              : (e) => handleReserveClick(e)
          }
          variant="primary"
          className={`${styles.borrowButton} button-radius`}
          disabled={isBookBorrowed}
        >
          <div className={styles.buttonTextWrapper}>
            {isBookReserved ? "Cancel Reservation" : "Reserve"}{" "}
          </div>
          <RiBookMarkFill className={styles.buttonIcon} />
        </Button>
        {isLibrarian && (
          <Button
            onClick={(e) => handleBorrowClick(e)}
            variant="success"
            className={`${styles.borrowButton} button-radius`}
          >
            Lend{" "}
            <RiHealthBookFill className={styles.buttonIcon} />
          </Button>
        )}
      </div>
    </>
  );
}
