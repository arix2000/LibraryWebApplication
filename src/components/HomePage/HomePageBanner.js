import BookItem from "../BookSearch/BookItem";
import styles from "../styles/homePage/homePage.module.css";
import { Alert, Button } from "react-bootstrap";
import AppRoutes from "../../common/AppRoutes";
import { useNavigate } from "react-router-dom";
import SessionManager from "../../common/SessionManager";

export default function HomePageBanner({ books, title, variant }) {
  const navigate = useNavigate();
  const userRole = (new SessionManager()).getLoggedUser().role;
  return (
    <>
      {books.length > 0 ? (
        <div className={styles.homePageBanner}>
          <div className={styles.row}>
            {books.map((book) => (
              <div key={book.isbn13} className={styles.col}>
                <BookItem book={book} margin={0} radius={0} userRole={userRole} />
              </div>
            ))}
          </div>
        </div>
      ) : (
        <Alert className={styles.alert} variant="secondary">
          <Alert.Heading className={styles.alertHeading}>
            You haven't {title.toLowerCase()} any books yet!
          </Alert.Heading>
          <hr />
          <div className="d-flex justify-content-center">
            <Button
              onClick={() => {
                navigate(AppRoutes.booksPage);
              }}
              variant={variant}
            >
              Search for available books!
            </Button>
          </div>
        </Alert>
      )}
    </>
  );
}
