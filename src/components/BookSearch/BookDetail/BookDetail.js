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
            <Modal.Body className="custom-body px-5">
              <h4 className="font-italic font-weight-bold my-3 fade-in" style={{ "--anim-time": "3s" }}>{book.authors.replaceAll(';', ", ")}</h4>
              <h5 className="my-4 font-weight-bold fade-in" style={{ "--anim-time": "4s" }}>{book.categories}</h5>
              <p className="mt-4 fade-in" style={{ "--anim-time": "5s", "text-align": "justify" }}>{book.description}</p>
            </Modal.Body>
            <Modal.Footer className="custom-footer px-5 py-2 label-color" style={{disply:'flex', justifyContent:'space-between'}}>
              <BorrowButton width={60} height={30}/>
              <Button className="ml-3 button-radius" onClick={onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
      );
}