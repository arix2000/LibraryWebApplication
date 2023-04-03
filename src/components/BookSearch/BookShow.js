import "../styles/card-style.css";
import "../styles/global-styles.css";
import { Col, Row, Card, Button } from "react-bootstrap";
import { Rating } from "@mui/material";
import { useState } from "react";
import BookDetail from "./BookDetail/BookDetail";
import BorrowButton from "./common/BorrowButton";

export default function BookShow({ book }) {
  const [detailShow, setDetailShow] = useState(false);

  return (
    <>
      <Card
        className="card text-center mt-5 card-radius label-color"
        text="light"
        onClick={() => setDetailShow(true)}
      >
        <Row g={5}>
          <Col md={4} my={0} pt={5}>
            <Card.Img
              className="card-img"
              src={book.thumbnail}
              alt={book.title + " Cover"}
            />
          </Col>
          <Col md={8}>
            <Card.Body>
              <Card.Title className="mb-2 book-title">
                {'"' + book.title + '"'}
              </Card.Title>
              <Card.Title className="author mt-3 font-italic">
                {book.authors.replaceAll(";", ", ")}
              </Card.Title>
              <Card.Title className="mt-4">
                <Rating
                  name="half-rating-read"
                  defaultValue={book.average_rating}
                  precision={0.1}
                  readOnly
                />
              </Card.Title>
              <Card.Title className="mb-0">
                <BorrowButton width={35} height={35} useIcon={true}/>
              </Card.Title>
            </Card.Body>
          </Col>
        </Row>
      </Card>
      <BookDetail
        show={detailShow}
        onHide={() => setDetailShow(false)}
        book={book}
      />
    </>
  );
}
