import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "../styles/card-style.css";
import { Rating } from '@mui/material';
import "../styles/global-styles.css";
import { useState, useEffect } from 'react';

export default function BookList({ books }) {

    const itemsPerPage = 9;

    const [currentPage, setCurrentPage] = useState(1);
    const [currentBooks, setCurrentBooks] = useState([]);

    useEffect(() => {
        setCurrentBooks(books.slice(0, currentPage * itemsPerPage));
    }, [books, currentPage]);

    useEffect(() => {
    const observer = new IntersectionObserver(
        (entries) => {
        if (entries[0].isIntersecting) {
            setCurrentPage((prev) => prev + 1);
        }
        },
        { threshold: 1 }
    );
    observer.observe(document.querySelector("#end-of-list"));
    }, []);


    const renderedBooks = currentBooks.map((book) => {
        return(
            <Card
                className="card text-center pb-0 pr-1 card-radius label-color"
                text="light"
                key={book.isbn13}>
                    <div className="row g-5">
                        <div className="col-md-4 my-0 pt-5">
                            <Card.Img
                            className="card-img card-radius"
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
        <div className="background-color full-height px-5 pb-5">
            <div className="d-flex flex-row flex-wrap">
                {renderedBooks}
                <div id="end-of-list" />
            </div>
        </div>
    )};