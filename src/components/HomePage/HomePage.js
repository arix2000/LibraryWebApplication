import NavBar from "../UiCommon/NavBar";
import RecommCarousel from "./RecommCarousel";
import styles from "../styles/homePage/homePage.module.css";
import books from "../../models/books.json";

export default function HomePage() {
  return (
    <>
      <NavBar showSearchBar={false} />
      <div className={styles.outer}>
        <div className={styles.recommBadge}>
          <h4>Recommended</h4>
          <RecommCarousel books={books}/>
        </div>
      </div>
      
    </>
  );
}
