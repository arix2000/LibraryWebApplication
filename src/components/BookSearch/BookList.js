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
                className="card rounded text-center border border-primary"
                bg="dark"
                text="light"
                key={book.isbn13}>
                    <div className="row g-5">
                        <div className="col-md-4 my-0 pt-5">
                            <Card.Img
                            className="book-thumbnail card-img rounded"
                            src={book.thumbnail} 
                            alt={book.title + " Cover"}
                            />
                        </div>
                        <div className="col-md-8">
                            <Card.Body>
                                <Card.Title className="mt-0">{'"' + book.title + '"'}</Card.Title>
                                <Card.Title className="author">{book.authors.replaceAll(';', ", ")}</Card.Title>
                                <Button variant="primary">Borrow</Button>
                            </Card.Body>
                            <Card.Footer className="text-center">
                                <Rating name="half-rating-read" defaultValue={book.average_rating} precision={0.1} readOnly />
                            </Card.Footer>
                        </div>
                        </div>
            </Card>

    )})

    

    return(
        <div className="background-color full-height px-5">
            <div className="d-flex flex-row flex-wrap">
                {renderedBooks}
            </div>
        </div>
    )};