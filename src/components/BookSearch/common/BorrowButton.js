import { Button, Row } from "react-bootstrap";
import { RiBookMarkFill, RiHealthBookFill } from "react-icons/ri";
import styles from "../../styles/bookItem.module.css";

export default function BorrowButton({
  rowStyles,
  isBookBorrowed,
  isBookReserved,
  handleBorrow,
  handleBookReturn,
  handleReserve,
  handleReserveCancel,
}) {
  const handleBorrowClick = () => {
    handleBorrow();
  };
  const handleReturnClick = () => {
    handleBookReturn();
  };
  const handleReserveClick = () => {
    handleReserve();
  };
  const handleCancelClick = () => {
    handleReserveCancel();
  };
  return (
    <Row className={rowStyles}>
      {isBookBorrowed ? (
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
      ) : isBookReserved ? (
        <>
          <Button
            onClick={handleCancelClick}
            variant="primary"
            className={`${styles.borrowButton} button-radius`}
          >
            Cancel Reservation{" "}
            <RiBookMarkFill style={{ width: 20, height: 20 }} />
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
