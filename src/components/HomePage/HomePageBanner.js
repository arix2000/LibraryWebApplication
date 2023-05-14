import BookItem from "../BookSearch/BookItem";
import styles from "../styles/homePage/homePage.module.css";
import { Alert, Button } from "react-bootstrap";
import AppRoutes from "../../common/AppRoutes";
import { useNavigate } from "react-router-dom";

export default function HomePageBanner({
  books,
  title,
  showSearchBar,
  variant,
}) {
  const navigate = useNavigate();
  return (
    <>
      {books.length > 0 ? (
        <div className={styles.homePageBanner}>
          <div className={styles.row}>
            {books.map((book) => (
              <div key={book.isbn13} className={styles.col}>
                <BookItem book={book} margin={0} radius={0} />
              </div>
            ))}
          </div>
        </div>
      ) : (
        <Alert variant={variant} className="mb-0 px-2">
          <Alert.Heading>
            You haven't {title.toLowerCase()} any books yet!
          </Alert.Heading>
          <hr />
          <div className="d-flex justify-content-center">
            <Button
              onClick={
                showSearchBar
                  ? null
                  : () => {
                      navigate(AppRoutes.booksPage);
                    }
              }
              variant={variant}
            >
              Search for our books!
            </Button>
          </div>
        </Alert>
      )}
    </>
  );
}
