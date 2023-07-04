import { Modal, Button } from "react-bootstrap";
import styles from "../styles/bookItem.module.css";
import UserBookManager from "../../common/UserBookManager";
import ReturnBookItem from "./ReturnBookItem";

export default function SelectReturnedBookModal({
  onHide,
  show,
  selectedUserId,
}) {
  const userBookManager = new UserBookManager();
  const borrowedBooks = userBookManager.getAllBorrowedBooks();

  return (
    <Modal
      onClick={(e) => {
        e.stopPropagation();
      }}
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header
        className={`text-light label-color ${styles.selectReturnedBookModalHeader}`}
      >
        <Modal.Title
          id="contained-modal-title-vcenter"
          className="text-center w-100 pb-2 fade-in"
        >
          <h5>Select the book to be returned</h5>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body
        className={`px-5 text-light ${styles.selectReturnedBookModalBody}`}
      >
        {borrowedBooks.map((book) => {
          return (
            <ReturnBookItem onHide={onHide} book={book} key={book.isbn13} margin={3} radius={24}/>
          );
        })}
      </Modal.Body>
      <Modal.Footer
        className={`px-3 py-2 label-color bottom-radius ${styles.bottomRadius}`}
      >
        <Button className="button-radius" variant="secondary" onClick={onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
