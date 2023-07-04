import { Modal, Button } from "react-bootstrap";
import styles from "../styles/bookItem.module.css";
import UserBookManager from "../../common/UserBookManager";
import ReturnBookItem from "./ReturnBookItem";
import UserManager from "../AdminPanel/utils/UserManager";

export default function SelectReturnedBookModal({
  onHide,
  show,
  selectedUserId,
}) {
  var borrowedBooks = [];
  if (selectedUserId !== -1) {
    const user = (new UserManager()).getUserBy(selectedUserId);
    const userBookManager = new UserBookManager();
    borrowedBooks = userBookManager.getBorrowedBooksOf(user);
  }

  return (
    <Modal
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
          <h2>Select the book to be returned</h2>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body
        className={`px-5 text-light ${styles.selectReturnedBookModalBody}`}
      >
        {borrowedBooks.length > 0 ? (
          borrowedBooks.map((book) => {
            return (
              <ReturnBookItem onHide={onHide} book={book} key={book.isbn13} userId={selectedUserId} />
            );
          })
        ) : (
          <div className={styles.noBooksToReturnAlert}>
            <h4>User has no remaining books to return</h4>
          </div>
        )}
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
