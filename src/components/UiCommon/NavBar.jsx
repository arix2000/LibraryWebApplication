import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useState, useEffect } from "react";
import styles from "../styles/searchBar.module.css";
import { useNavigate } from "react-router-dom";
import { Col } from "react-bootstrap";
import AppRoutes from "../../common/AppRoutes";

function NavBar({ onSubmit, showSearchBar, initialExpand = false, searchAutoFocus = false }) {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [expanded, setExpanded] = useState(initialExpand);

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
      className={`${styles.navbarBody} fixed-top navbar-dark`}
      expand="lg"
      sticky="top"
      expanded={expanded}
    >
      <Container fluid>
        <Navbar.Brand className="text-light" onClick={() => navigate(AppRoutes.homePage)} href="#">
          Fish Library
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" onClick={() => setExpanded(!expanded)} />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            defaultActiveKey="/home"
            navbarScroll
            fluid
            className={styles.fullWidth}
          >
            <Nav.Link className={"text-light"}>
              Borrowed
            </Nav.Link>
            <Nav.Link className="text-light" href="#action2">
              Your History
            </Nav.Link>
            <Nav.Link className="text-light" href="#action2">
              Contact
            </Nav.Link>
            <Col>
              <Form className="d-flex" onSubmit={handleFormSubmit} style={{ disply: 'flex', justifyContent: 'right' }}>
                <Form.Control
                  value={query}
                  onChange={handleChange}
                  type="search"
                  placeholder="Search for books"
                  className={styles.searchTextField}
                  onClick={showSearchBar ? () => { } : () => { navigate(AppRoutes.booksPage) }}
                  autoFocus={searchAutoFocus}
                />
                <Button className={styles.searchButton} onClick={showSearchBar ? handleFormSubmit : () => { navigate(AppRoutes.booksPage) }}>Search</Button>
              </Form>
            </Col>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default NavBar;
