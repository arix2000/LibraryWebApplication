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
import { CgProfile } from "react-icons/cg";
import { useMediaQuery } from "react-responsive";

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
  const isMobile = useMediaQuery({ query: `(max-width: 991px)` });

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
            onClick={() => navigate(AppRoutes.homePage)}
            href="#"
            className={`${currentPage === NavBarPagesEnum.home ? styles.selectedPageStyle : null} text-light py-0`}
            style={{cursor: "pointer"}}
          >
            <img
              style={{ width: "60px", margin: "0px" }}
              src={blobfish}
              alt="Fish Library"
            />
          </Navbar.Brand>
          <Navbar.Collapse id="navbarScroll">
            <Nav
              defaultActiveKey="/home"
              navbarScroll
              className={styles.fullWidth}
            >
              <Nav.Link
                onClick={() => navigate(AppRoutes.userHistoryPage)}
                className={`${currentPage === NavBarPagesEnum.history ? styles.selectedPageStyle : null} ${styles.navPageLink} text-light`}
              >
                History
              </Nav.Link>
              <Nav.Link
                onClick={() => navigate(AppRoutes.contactPage)}
                className={`${currentPage === NavBarPagesEnum.contact ? styles.selectedPageStyle : null} ${styles.navPageLink} text-light`}
              >
                Contact
              </Nav.Link>
              {loggedUser.role === "admin" ? (
                <Nav.Link
                  onClick={() => navigate(AppRoutes.adminPanel)}
                  className={`${currentPage === NavBarPagesEnum.adminPanel ? styles.selectedPageStyle : null} ${styles.navPageLink} text-light`}
                >
                  Admin Panel
                </Nav.Link>
              ) : (
                <div />
              )}
              <Col>
                <Form
                  className="d-flex"
                  onSubmit={handleFormSubmit}
                  style={{ display: "flex", justifyContent: "center" }}
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
        <Navbar.Brand
          href="#"
          className={`${styles.profileIcon} ${isMobile ? "navbar-toggler" : ""}`}
          onClick={() => setModalProfileShow(true)}>
          <CgProfile style={{ height: "34px", width: "34px" }} />
        </Navbar.Brand>
        <Navbar.Toggle
          className={styles.toggleButton}
          aria-controls="responsive-navbar-nav"
          onClick={() => setExpanded(!expanded)}
        />
        <ProfileDialog
          show={modalProfileShow}
          onHide={() => setModalProfileShow(false)}
        />
      </Navbar>
    </>
  );
}
export default NavBar;
