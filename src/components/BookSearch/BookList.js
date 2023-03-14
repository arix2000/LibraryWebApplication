import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function BookList({ books }) {

    const renderedBooks = books.map((book) => {
        return(
            <a href="#">
                <Card
                bg="dark"
                key="dark"
                text="light">
                    <Card.Img
                    className=""
                    variant="top" 
                    src={book.thumbnail} 
                    alt={book.title + " Cover"}
                    />
                        <Card.Body>
                            <Card.Title>{book.title}</Card.Title>
                            <Card.Title>{book.authors}</Card.Title>
                            <Button variant="primary">Borrow</Button>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">{book.average_rating}</small>
                        </Card.Footer>
                </Card>
            </a>

    )})

    

    return(
        <Container flex>
            <div className="card-columns">
                {renderedBooks}
            </div>
        </Container>
    )};