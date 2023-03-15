import { div } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "../styles/card-style.css";
import { Rating } from '@mui/material';
import "../styles/global-styles.css";

export default function BookList({ books }) {

    const renderedBooks = books.map((book) => {
        return(
            <Card
                className="card my-3 mx-5 text-center my-border"
                bg="dark"
                key="dark"
                text="light">
                    <Card.Img
                    className="book-thumbnail img-margin"
                    variant="top" 
                    src={book.thumbnail} 
                    alt={book.title + " Cover"}
                    />
                        <Card.Body>
                            <Card.Title>{'"' + book.title + '"'}</Card.Title>
                            <Card.Title className="rounded author">{book.authors}</Card.Title>
                            <Button variant="primary">Borrow</Button>
                        </Card.Body>
                        <Card.Footer className="text-center label-color">
                            <Rating name="half-rating-read" defaultValue={book.average_rating} precision={0.1} readOnly />
                        </Card.Footer>
            </Card>

    )})

    

    return(
        <div className="background-color full-height">
            <div className="d-flex flex-row flex-wrap">
                {renderedBooks}
            </div>
        </div>
    )};