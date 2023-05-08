import BookItem from "../BookSearch/BookItem";
import styles from "../styles/homePage/homePage.module.css";

export default function HomePageBanner({ books }) {
  
  return (
    <>
      <div className={styles.homePageBanner}>
        <div className={styles.row}>
          {books.map((book) => (
            <div key={book.isbn13} className={styles.col}>
              <BookItem book={book} margin={0} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
