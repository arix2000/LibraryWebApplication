import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useState, useEffect } from "react";
import styles from "../styles/searchBar.module.css";
import { BsSearch } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { Col } from "react-bootstrap";
import NavigationPaths from "../../common/NavigationPaths";

function NavBar({ onSubmit, showSearchBar }) {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");

  const handleFormSubmit = (event) => {
    event.preventDefault();
    onSubmit(query);
  };

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      onSubmit(query);
    }, 500);

    return () => clearTimeout(delayDebounceFn);
  }, [query, onSubmit]);

  return (
    <Navbar
      className={`${styles.navbarBody} fixed-top`}
      expand="lg"
      sticky="top"
    >
      <Container fluid>
        <Navbar.Brand className="text-light" href="#">
          Fish Library
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            defaultActiveKey="/home"
            navbarScroll
            fluid
            className={styles.fullWidth}
          >
            <Nav.Link className={"text-light"} href="#">
              Borrowed
            </Nav.Link>
            <Nav.Link className="text-light" href="#action2">
              Your History
            </Nav.Link>
            <Nav.Link className="text-light" href="#action2">
              Contact
            </Nav.Link>
            <Col>
              {showSearchBar
                ? <Form className="d-flex" onSubmit={handleFormSubmit} style={{ disply: 'flex', justifyContent: 'right' }}>
                  <Form.Control
                    value={query}
                    onChange={handleChange}
                    type="search"
                    placeholder="Search for books"
                    className={styles.searchTextField}
                  />
                  <Button className={styles.searchButton} onClick={handleFormSubmit}>Search</Button>
                </Form>
                : <div className="d-flex" style={{ disply: 'flex', justifyContent: 'right' }}>
                  <Button className={styles.searchButtonWithoutField} onClick={() => navigate(NavigationPaths.booksPage)}><BsSearch /></Button></div>}
            </Col>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default NavBar;
