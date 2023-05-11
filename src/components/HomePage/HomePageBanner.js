import BookItem from "../BookSearch/BookItem";
import styles from "../styles/homePage/homePage.module.css";

export default function HomePageBanner({
  books,
  handleBorrowClick,
  handleReserveClick,
  handleReturnClick,
  handleCancelClick,
  isBookBorrowed,
  isBookReserved,
  setIsBookBorrowed,
  setIsBookReserved,
}) {

  return (
    <>
      <div className={styles.homePageBanner}>
        <div className={styles.row}>
          {books.map((book) => (
            <div key={book.isbn13} className={styles.col}>
              <BookItem
                book={book}
                margin={0}
                handleBorrowClick={handleBorrowClick}
                handleCancelClick={handleCancelClick}
                handleReserveClick={handleReserveClick}
                handleReturnClick={handleReturnClick}
                isBookBorrowed={isBookBorrowed}
                isBookReserved={isBookReserved}
                setIsBookBorrowed={setIsBookBorrowed}
                setIsBookReserved={setIsBookReserved}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
