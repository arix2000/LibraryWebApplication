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
            <Modal.Header className="custom-header label-color">
              <Modal.Title id="contained-modal-title-vcenter"
              className="text-center w-100 pb-2 fade-in"
              style={{ "--anim-time": "2s" }}>
                  <h1 className="font-weight-bold">{'"' + book.title + '"'}</h1>
              </Modal.Title>
            </Modal.Header>
            <Modal.Body className="custom-body">
              <h4 className="font-italic font-weight-bold my-3 fade-in" style={{ "--anim-time": "3s" }}>Authors: {book.authors.replaceAll(';', ", ")}</h4>
              <h4 className="my-4 fade-in" style={{ "--anim-time": "4s" }}>Categories: {book.categories}</h4>
              <p className="mt-4 fade-in" style={{ "--anim-time": "5s" }}>{book.description}</p>
            </Modal.Body>
            <Modal.Footer className="custom-footer pr-5 pb-3">
              <BorrowButton width={60} height={30}/>
              <Button className="ml-3" onClick={onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
      );
}