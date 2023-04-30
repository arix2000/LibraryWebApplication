import { Modal, Button } from "react-bootstrap";
import styles from "../../styles/bookItem.module.css";
import BorrowButton from "../common/BorrowButton";
import UserBookManager from "../../../common/UserBookManager";

export default function BookDetailModal({ show, onHide, book }) {
  const userBookManager = new UserBookManager();

  const isBookReserved = userBookManager.isReserved(book.isbn13);
  const isBookBorrowed = userBookManager.isBorrowed(book.isbn13);

  const handleBorrow = () => {
    userBookManager.borrowBook(book.isbn13);
    onHide();
  };
  const handleReserve = () => {
    userBookManager.reserviseBook(book.isbn13);
    onHide();
  };
  const handleReserveCancel = () => {
    userBookManager.cancelReservation(book.isbn13);
    onHide();
  };
  const handleBookReturn = () => {
    userBookManager.returnBook(book.isbn13);
    onHide();
  };

  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header
        className={`custom-header text-light label-color ${styles.upperRadius}`}
      >
        <Modal.Title
          id="contained-modal-title-vcenter"
          className="text-center w-100 pb-2 fade-in"
        >
          <h1 className="font-weight-bold">{'"' + book.title + '"'}</h1>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className={`px-5 text-light ${styles.bookDetailsModalBody}`}>
        <h4 className="font-italic font-weight-semibold my-3 fade-in">
          {book.authors.replaceAll(";", ", ")}
        </h4>
        <h5 className={`my-4 ${styles.grayText} fade-in`}>{book.categories}</h5>
        <p className="mt-4 fade-in">{book.description}</p>
      </Modal.Body>
      <Modal.Footer
        className={`px-3 py-2 label-color bottom-radius ${styles.bottomRadius}`}
      >
        <Button className="button-radius" variant="secondary" onClick={onHide}>
          Close
        </Button>
        <BorrowButton
          onHide={onHide}
          rowStyles={styles.itemButtonSectionModal}
          handleBorrow={handleBorrow}
          handleBookReturn={handleBookReturn}
          handleReserve={handleReserve}
          handleReserveCancel={handleReserveCancel}
          isBookBorrowed={isBookBorrowed}
          isBookReserved={isBookReserved}
        />
      </Modal.Footer>
    </Modal>
  );
}
