import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState } from 'react';

function SearchBar({ onSubmit }) {

    const [term, setTerm] = useState('');

    const handleFormSubmit = (event) => {
        event.preventDefault();
        onSubmit(term);
        setTerm('');
    };

    const handleChange = (event) => {
        setTerm(event.target.value);
    };

    return (
        <Navbar className="label-color" expand="lg" sticky="top">
        <Container fluid>
            <Navbar.Brand className="text-light" href="#">Fish Library</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
            <Nav
                defaultActiveKey="/home"
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
            >
                <Nav.Link className="text-light" href="#action1">Borrow</Nav.Link>
                <Nav.Link className="text-light" href="#action2">Your History</Nav.Link>
                <Nav.Link className="text-light" href="#">Contact</Nav.Link>
            </Nav>
            <Form className="d-flex" onSubmit={handleFormSubmit}>
                <Form.Control
                value={term}
                onChange={handleChange}
                type="search"
                placeholder="Search"
                className="me-2 bg-secondary border-dark text-light"
                />
                <Button className="button-color text-light">Search</Button>
            </Form>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    );
    }
export default SearchBar;