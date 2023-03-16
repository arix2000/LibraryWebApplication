import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "../styles/card-style.css";
import { Rating } from '@mui/material';
import "../styles/global-styles.css";

export default function BookList({ books }) {

    const renderedBooks = books.map((book) => {
        return(
            <Card
                className="card rounded text-center border border-primary pb-0"
                bg="dark"
                text="light"
                key={book.isbn13}>
                    <div className="row g-5">
                        <div className="col-md-4 my-0 pt-5">
                            <Card.Img
                            className="card-img rounded"
                            src={book.thumbnail} 
                            alt={book.title + " Cover"}
                            />
                        </div>
                        <div className="col-md-8">
                            <Card.Body className="p-0">
                                <Card.Title className="mt-2 mb-3">{'"' + book.title + '"'}</Card.Title>
                                <Card.Title className="author mb-1">{book.authors.replaceAll(';', ", ")}</Card.Title>
                                <Button variant="primary mt-3 mb-2">Reserve a book</Button>
                            </Card.Body>
                            <Card.Footer className="text-center">
                                <h3>{book.average_rating}</h3>
                                <Rating name="half-rating-read" defaultValue={book.average_rating} precision={0.1} readOnly/>
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