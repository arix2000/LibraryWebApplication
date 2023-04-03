import "../../styles/book-detail.css";
import { Modal, Button } from "react-bootstrap";
import BorrowButton from "../common/BorrowButton";

export default function BookDetail({ show, onHide, book }) {
  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header className="custom-header label-color upper-radius">
        <Modal.Title
          id="contained-modal-title-vcenter"
          className="text-center w-100 pb-2 fade-in"
        >
          <h1 className="font-weight-bold">{'"' + book.title + '"'}</h1>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="custom-body px-5">
        <h4 className="font-italic font-weight-semibold my-3 fade-in">
          {book.authors.replaceAll(";", ", ")}
        </h4>
        <h5 className="my-4 gray-text fade-in">{book.categories}</h5>
        <p className="mt-4 fade-in">{book.description}</p>
      </Modal.Body>
      <Modal.Footer className="custom-footer px-3 py-2 label-color bottom-radius">
        <Button className="mr-3 button-radius" onClick={onHide}>
          Close
        </Button>
        <BorrowButton width={35} height={21} useIcon={false} />
      </Modal.Footer>
    </Modal>
  );
}
