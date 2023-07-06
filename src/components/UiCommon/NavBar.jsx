import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useState, useEffect } from "react";
import styles from "../styles/navBar.module.css";
import { useNavigate } from "react-router-dom";
import { Col } from "react-bootstrap";
import AppRoutes from "../../common/AppRoutes";
import SessionManager from "../../common/SessionManager";
import ProfileDialog from "../ProfilePage/ProfileDialog";
import blobfish from "../../assets/blobfish.png";
import NavBarPagesEnum from "./NavBarPagesEnum";

function NavBar({
  onSubmit = () => { },
  showSearchBar,
  initialExpand = false,
  searchAutoFocus = false,
  currentPage = NavBarPagesEnum.home,
  forwardedRef,
}) {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [expanded, setExpanded] = useState(initialExpand);
  const sessionManager = new SessionManager();
  const loggedUser = sessionManager.getLoggedUser();
  const [modalProfileShow, setModalProfileShow] = useState(false);
  const selectedPageStyle = { backgroundColor: "#4169E1", borderRadius: "30px" };

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
  }, [query]);

  return (
    <>
      <Navbar
        className={`${styles.navbarBody} fixed-top navbar-dark`}
        expand="lg"
        sticky="top"
        expanded={expanded}
      >
        <Container fluid>
          <Navbar.Brand
            className="text-light py-0 mr-5"
            onClick={() => navigate(AppRoutes.homePage)}
            href="#"
            style={currentPage === NavBarPagesEnum.home ? selectedPageStyle : null}
          >
            <img
              style={{ width: "60px", margin: "0px" }}
              src={blobfish}
              alt="Fish Library"
            />
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="navbarScroll"
            onClick={() => setExpanded(!expanded)}
          />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              defaultActiveKey="/home"
              navbarScroll
              className={styles.fullWidth}
            >
              <Nav.Link
                className="text-light ml-2"
                onClick={() => navigate(AppRoutes.userHistoryPage)}
                style={currentPage === NavBarPagesEnum.history ? selectedPageStyle : null}
              >
                History
              </Nav.Link>
              <Nav.Link
                className="text-light ml-2"
                onClick={() => navigate(AppRoutes.contactPage)}
                style={currentPage === NavBarPagesEnum.contact ? selectedPageStyle : null}
              >
                Contact
              </Nav.Link>
              {loggedUser.role === "admin" ? (
                <Nav.Link
                  className="text-light ml-2"
                  onClick={() => navigate(AppRoutes.adminPanel)}
                  style={currentPage === NavBarPagesEnum.adminPanel ? selectedPageStyle : null}
                >
                  Admin Panel
                </Nav.Link>
              ) : (
                <div />
              )}
              <Nav.Link
                className="text-light ml-2"
                onClick={() => setModalProfileShow(true)}
                style={currentPage === NavBarPagesEnum.profile ? selectedPageStyle : null}
              >
                Profile
              </Nav.Link>
              <Col>
                <Form
                  className="d-flex"
                  onSubmit={handleFormSubmit}
                  style={{ display: "flex", justifyContent: "right" }}
                  ref={forwardedRef}
                >
                  <Form.Control
                    value={query}
                    onChange={handleChange}
                    type="search"
                    placeholder="Search for books"
                    className={styles.searchTextField}
                    onClick={
                      showSearchBar
                        ? null
                        : () => {
                          navigate(AppRoutes.booksPage);
                        }
                    }
                    autoFocus={searchAutoFocus}
                  />
                  <Button
                    className={styles.searchButton}
                    onClick={
                      showSearchBar
                        ? handleFormSubmit
                        : () => {
                          navigate(AppRoutes.booksPage);
                        }
                    }
                  >
                    Search
                  </Button>
                </Form>
              </Col>
            </Nav>
          </Navbar.Collapse>
        </Container>
        <ProfileDialog
          show={modalProfileShow}
          onHide={() => setModalProfileShow(false)}
        />
      </Navbar>
    </>
  );
}
export default NavBar;
