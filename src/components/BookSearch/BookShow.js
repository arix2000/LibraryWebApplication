import "../styles/card-style.css";
import "../styles/global-styles.css";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Col, Row } from 'react-bootstrap';
import { Rating } from '@mui/material';
import { BsFillCartPlusFill } from "react-icons/bs";
import { FiMoreHorizontal } from "react-icons/fi";
import { useState } from "react";
import BookDetail from "../BookDetail/BookDetail";

export default function BookShow({ book }) {

    const [detailShow, setDetailShow] = useState(false);

    return(
        <>
            <Card
            className="card text-center mt-5 card-radius label-color"
            text="light">
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
                                <Card.Title className="mb-2">{'"' + book.title + '"'}</Card.Title>
                                <Card.Title className="author mt-2 font-italic">{book.authors.replaceAll(';', ", ")}</Card.Title>
                                <Card.Title><Button variant="success mt-2 mb-2" px={3}><BsFillCartPlusFill style={{width: 24, height: 24}}/></Button></Card.Title>
                                <Card.Title><Rating name="half-rating-read" defaultValue={book.average_rating} precision={0.1} readOnly/></Card.Title>
                                <Button variant="primary detail-button text-center mt-4"
                                        onClick={() => setDetailShow(true)}>
                                            <FiMoreHorizontal style={{width: 40, height: 16}}/>
                                    </Button>
                                <BookDetail
                                show={detailShow}
                                onHide={() => setDetailShow(false)}
                                book={book}/>
                            </Card.Body>
                        </Col>
                    </Row>
            </Card>
        </>
        )
};