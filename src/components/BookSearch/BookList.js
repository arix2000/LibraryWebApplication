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
                className="card my-2 mx-5 text-center border border-primary"
                bg="dark"
                key="dark"
                text="light">
                    <div class="row g-5">
                        <div class="col-md-4">
                            <Card.Img
                            className="book-thumbnail img-margin"
                            variant="top" 
                            src={book.thumbnail} 
                            alt={book.title + " Cover"}
                            />
                        </div>
                        <div class="col-md-8">
                            <Card.Body>
                                <Card.Title>{'"' + book.title + '"'}</Card.Title>
                                <Card.Title className="rounded author">{book.authors}</Card.Title>
                                <Button variant="primary">Borrow</Button>
                            </Card.Body>
                            <Card.Footer className="text-center label-color">
                                <Rating name="half-rating-read" defaultValue={book.average_rating} precision={0.1} readOnly />
                            </Card.Footer>
                        </div>
                        </div>
            </Card>

    )})

    

    return(
        <div className="background-color full-height pl-5">
            <div className="d-flex flex-row flex-wrap">
                {renderedBooks}
            </div>
        </div>
    )};