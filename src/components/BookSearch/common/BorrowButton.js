import { Button, Row } from "react-bootstrap";
import { RiBookMarkFill, RiHealthBookFill } from "react-icons/ri";
import styles from "../../styles/bookItem.module.css";
import UserBookManager from "../../../common/UserBookManager";

export default function BorrowButton({
  rowStyles,
  book,
  handleBorrowClick,
  handleReserveClick,
  handleReturnClick,
  handleCancelClick,
}) {
  const userBookManager = new UserBookManager();

  const isBorrowed = userBookManager.isBorrowed(book.isbn13);
  const isReserved = userBookManager.isReserved(book.isbn13);
  return (
    <Row className={rowStyles}>
      {isBorrowed ? (
        <>
          <Button
            onClick={(e) => {
              handleReserveClick(book);
              e.stopPropagation();
            }}
            variant="primary"
            className={`${styles.borrowButton} button-radius`}
          >
            Reserve <RiBookMarkFill style={{ width: 20, height: 20 }} />
          </Button>
          <Button
            onClick={(e) => {
              handleReturnClick(book);
              e.stopPropagation();
            }}
            variant="success"
            className={`${styles.borrowButton} button-radius`}
          >
            Return <RiHealthBookFill style={{ width: 20, height: 20 }} />
          </Button>
        </>
      ) : isReserved ? (
        <>
          <Button
            onClick={(e) => {
              handleCancelClick(book);
              e.stopPropagation();
            }}
            variant="primary"
            className={`${styles.borrowButton} button-radius`}
          >
            Cancel Res...{" "}
          </Button>
          <Button
            onClick={(e) => {
              handleBorrowClick(book);
              e.stopPropagation();
            }}
            variant="success"
            className={`${styles.borrowButton} button-radius`}
          >
            Borrow <RiHealthBookFill style={{ width: 20, height: 20 }} />
          </Button>
        </>
      ) : (
        <>
          <Button
            onClick={(e) => {
              handleReserveClick(book.isbn13);
              e.stopPropagation();
            }}
            variant="primary"
            className={`${styles.borrowButton} button-radius`}
          >
            Reserve <RiBookMarkFill style={{ width: 20, height: 20 }} />
          </Button>
          <Button
            onClick={(e) => {
              handleBorrowClick(book.isbn13);
              e.stopPropagation();
            }}
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
