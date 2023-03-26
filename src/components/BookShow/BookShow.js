import "../styles/card-style.css";
import "../styles/global-styles.css";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Col, Row } from 'react-bootstrap';
import { Rating } from '@mui/material';
import { BsFillCartPlusFill } from "react-icons/bs";

export default function BookShow({ book }) {
    
    return(
        <Card
        className="card text-center pb-0 pr-0 mt-5 card-radius label-color"
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
                        <Card.Body className="p-0">
                            <Card.Title className="mt-2 mb-3">{'"' + book.title + '"'}</Card.Title>
                            <Card.Title className="author mb-1">{book.authors.replaceAll(';', ", ")}</Card.Title>
                            <Button variant="primary mt-3 mb-3 px-3"><BsFillCartPlusFill style={{width: 24, height: 24}}/></Button>
                        </Card.Body>
                        <Card.Footer className="text-center">
                            <h4>{book.average_rating}</h4>
                            <Rating name="half-rating-read" defaultValue={book.average_rating} precision={0.1} readOnly/>
                        </Card.Footer>
                    </Col>
                </Row>
        </Card>
        )
};