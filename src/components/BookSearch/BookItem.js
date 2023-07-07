import styles from "../styles/bookItem.module.css";
import { Col, Row, Card, Button } from "react-bootstrap";
import { Rating } from "@mui/material";
import React, { useState } from "react";
import BookDetailModal from "./BookDetail/BookDetailModal";
import BorrowButton from "./common/BorrowButton";
import ImageWIthShimmer from "./ImageWithShimmer";
import AddEditBooksDialog from "../HomePage/AddEditBooksDialog";
import { RiEditFill } from "react-icons/ri";
import RolesEnum from "../../common/RolesEnum";
import DeleteBookDialog from "../HomePage/DeleteBookDialog";
import { BsTrashFill } from "react-icons/bs";
import BookManager from "../../common/BooksManager";
import SessionManager from "../../common/SessionManager";
import BorrowBookModal from "./BorrowBookModal";

export default function BookItem({ book, margin, radius, userRole, shouldShowControls = true }) {
  const bookManager = new BookManager();
  const [detailShow, setDetailShow] = useState(false);
  const [modalAddEditShow, setModalAddEditShow] = useState(false);
  const [modalDeleteShow, setModalDeleteShow] = useState(false);
  const [bookControlsShow, setBookControlsShow] = useState(false);
  const [showBorrowModal, setShowBorrowModal] = useState(false);
  const [bookDynamic, setBook] = useState(book);
  const isAdminOrLibrarianRole = userRole != RolesEnum.user;

  window.addEventListener("booksStorage", (_) => {
    setBook(bookManager.getBookBy(bookDynamic.isbn13));
  });

  const sessionManager = new SessionManager();
  const loggedUser = sessionManager.getLoggedUser();
  let isLibrarian = loggedUser.role === RolesEnum.librarian;

  return (
    <>
      <Card
        className={`text-center mt-${margin} label-color ${styles.card}`}
        style={{ borderRadius: radius }}
        text="light"
        onClick={() => { setDetailShow(true); }}
        onMouseEnter={() => isAdminOrLibrarianRole ? setBookControlsShow(shouldShowControls) : null}
        onMouseLeave={() => isAdminOrLibrarianRole ? setBookControlsShow(false) : null}
      >
        <Row>
          <Col md="auto" xs="auto" className={styles.bookImgWrapperCol}>
            <ImageWIthShimmer book={bookDynamic} styles={styles} />
          </Col>
          <Col>
            <Card.Body>
              <Card.Title className={`mb-2 ${styles.bookTitle}`}>
                {'"' + bookDynamic.title + '"'}
              </Card.Title>
              <Card.Title className={`${styles.author} mt-3 font-italic`}>
                {bookDynamic.authors.replaceAll(";", ", ")}
              </Card.Title>
              <Card.Title className="mt-4">
                <Rating
                  name="half-rating-read"
                  value={bookDynamic.average_rating}
                  precision={0.1}
                  readOnly
                />
              </Card.Title>
              <BorrowButton
                rowStyles={styles.itemButtonSection}
                book={bookDynamic}
                isLibrarian={isLibrarian}
                onBorrowBookClicked={() => setShowBorrowModal(true)}
              />
            </Card.Body>
          </Col>
        </Row>
        {bookControlsShow ?
          <Button className={styles.editBookFab} onClick={(event) => { event.stopPropagation(); setModalAddEditShow(true); }}>
            <RiEditFill style={{ height: 24, width: 24 }} />
          </Button> : <></>}
        {bookControlsShow ?
          <Button className={styles.deleteBookFab} variant="danger" onClick={(event) => { event.stopPropagation(); setModalDeleteShow(true); }}>
            <BsTrashFill style={{ height: 24, width: 24 }} />
          </Button> : <></>}
      </Card>
      <BookDetailModal
        show={detailShow}
        onHide={() => setDetailShow(false)}
        book={bookDynamic}
        isLibrarian={isLibrarian}
      />
      <AddEditBooksDialog
        show={modalAddEditShow}
        onHide={() => setModalAddEditShow(false)}
        book={bookDynamic}
      />
      <DeleteBookDialog
        show={modalDeleteShow}
        onHide={() => setModalDeleteShow(false)}
        book={bookDynamic}
      />
      <BorrowBookModal
        show={showBorrowModal}
        onHide={() => setShowBorrowModal(false)}
        book={bookDynamic} />
    </>
  );
}
