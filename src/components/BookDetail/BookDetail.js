import Modal from "react-bootstrap/Modal";
import Button from 'react-bootstrap/Button';
import "../styles/book-detail.css";

export default function BookDetail({ show, onHide, book }) {

    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header className="custom-header label-color">
              <Modal.Title id="contained-modal-title-vcenter" className="text-center w-100 pb-2">
                  <h1 className="font-weight-bold">{'"' + book.title + '"'}</h1>
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <h4 className="font-italic font-weight-bold mb-2">Authors: {book.authors.replaceAll(';', ", ")}</h4>
              <h4>Categories: {book.categories}</h4>
              <p>{book.description}</p>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
      );
}