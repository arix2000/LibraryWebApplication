import NavBar from "../UiCommon/NavBar";
import styles from "../styles/homePage/homePage.module.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import UserBookManager from "../../common/UserBookManager";
import HomePageBanner from "./HomePageBanner";
import { useState } from "react";
import { IoMdAdd } from "react-icons/io";
import { MdOutlineAssignmentReturned } from "react-icons/md";
import AddEditBooksDialog from "./AddEditBooksDialog";
import SuccessToast from "../UiCommon/SuccessToast";
import SessionManager from "../../common/SessionManager";
import RolesEnum from "../../common/RolesEnum";
import WarningToast from "../UiCommon/WarningToast";
import ToastEventKeys from "../UiCommon/ToastEventKeys";
import BookManager from "../../common/BooksManager";
import ReturnBookModal from "../BookSearch/ReturnBookModal";
import NavBarPagesEnum from "../UiCommon/NavBarPagesEnum";

function Banner({ books, title, variant, border, background }) {
  return (
    <div className={styles.bannerOuter}>
      <div
        className={styles.carouselBadge}
        style={{ border: border, backgroundColor: background }}
      >
        <h4 className={styles.badgeHeader} style={{ borderBottom: border }}>
          {title}
        </h4>
        <HomePageBanner books={books} title={title} variant={variant} />
      </div>
    </div>
  );
}

export default function HomePage() {
  const bookManager = new BookManager();
  const books = bookManager.getBooks();

  const recommBooks = [
    books[2676],
    books[65],
    books[3955],
    books[3956],
    books[64],
    books[2677],
  ];

  const bestBooks = [
    books[12],
    books[19],
    books[11],
    books[121],
    books[66],
    books[71],
    books[1],
  ];

  const loggedUserRole = new SessionManager().getLoggedUser().role;

  const isAdminOrLibrarianRole = loggedUserRole != RolesEnum.user;
  const isLibrarianRole = loggedUserRole === RolesEnum.librarian;
  const userBookManager = new UserBookManager();
  const [borrowedBooks, setBorrowedBooks] = useState(
    userBookManager.getAllBorrowedBooks()
  );
  const [reservedBooks, setReservedBooks] = useState(
    userBookManager.getAllReservedBooks()
  );
  userBookManager.setOnBookChangeListener(() => {
    const borrowedBooksLocal = userBookManager.getAllBorrowedBooks();
    const reservedBooksLocal = userBookManager.getAllReservedBooks();
    setBorrowedBooks([]);
    setReservedBooks([]);
    setRecommBooks([]);
    setBestBooks([]);
    setTimeout(() => {
      setBorrowedBooks(borrowedBooksLocal);
      setReservedBooks(reservedBooksLocal);
      setRecommBooks(recommBooks);
      setBestBooks(bestBooks);
    }, 0);
  });

  const [recommBooksDynamic, setRecommBooks] = useState(recommBooks);
  const [bestBooksDynamic, setBestBooks] = useState(bestBooks);
  const [modalAddEditShow, setModalAddEditShow] = useState(false);
  const [returnBookModalShow, setReturnBookModalShow] = useState(false);
  const [showSuccessMassage, setShowSuccessMassage] = useState(false);
  const [showWarningMassage, setShowWarningMassage] = useState(false);
  const [isBookInEditMode, setIsBookInEditMode] = useState(false);

  window.addEventListener(ToastEventKeys.editToast, (_) => {
    setIsBookInEditMode(true);
    setShowSuccessMassage(true);
  });
  window.addEventListener(ToastEventKeys.addToast, (_) => {
    setIsBookInEditMode(false);
    setShowSuccessMassage(true);
  });
  window.addEventListener(ToastEventKeys.deleteToast, (_) => {
    setShowWarningMassage(true);
  });

  return (
    <div className={styles.pageContainer}>
      <NavBar showSearchBar={false} currentPage={NavBarPagesEnum.home} />
      <Container fluid className="mb-5">
        <Row>
          <Banner
            books={recommBooksDynamic}
            title="Recommended"
            variant="primary"
            background="#0275d8"
          />
        </Row>
        <Row>
          <Banner
            books={bestBooksDynamic}
            title="Bestsellers"
            variant="primary"
            background="#0275d8"
          />
        </Row>
        <Row>
          <Col xs={{ order: 'first' }} className={styles.fixColWidth}>
            <Banner
              books={borrowedBooks}
              title="Borrowed"
              variant="success"
              background="#5cb85c"
            />
          </Col>
          <Col xs={{ order: 'last' }} className={styles.fixColWidth}>
            <Banner
              books={reservedBooks}
              title="Reserved"
              variant="primary"
              background="#0275d8"
            />
          </Col>
        </Row>
      </Container>
      {isAdminOrLibrarianRole ?
        <Button className={styles.addBookToLibraryFab} onClick={() => setModalAddEditShow(true)}>
          Add book to library <div style={{ width: "8px" }}></div><IoMdAdd style={{ height: 24, width: 24 }} />
        </Button> : <></>}
      {isLibrarianRole ?
        <Button className={styles.acceptReturnFab} onClick={() => setReturnBookModalShow(true)} variant="success">
          Accept the return <div style={{ width: "8px" }}></div><MdOutlineAssignmentReturned style={{ height: 24, width: 24 }} />
        </Button> : <></>}
      <AddEditBooksDialog
        show={modalAddEditShow}
        onHide={() => setModalAddEditShow(false)}
      />
      <ReturnBookModal show={returnBookModalShow} onHide={() => setReturnBookModalShow(false)} />
      <SuccessToast
        text={isBookInEditMode ? "Changes has been applied!" : "Book has been added successfully!"}
        show={showSuccessMassage}
        setShow={setShowSuccessMassage} />

      <WarningToast
        text={"Book has been removed."}
        show={showWarningMassage}
        setShow={setShowWarningMassage} />
    </div>
  );
}
