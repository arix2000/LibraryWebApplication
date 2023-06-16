import styles from "../styles/emptyList.module.css";
import { ReactComponent as NoItemsIcon } from "../../assets/no-items-icon.svg";
import { Link } from "react-router-dom";
import AppRoutes from "../../common/AppRoutes";

export default function BookListEmptyView() {
  return (
    <div className={styles.emptyListContainer}>
      <NoItemsIcon className={styles.noResultsIcon} />
      <h4>No results for your query</h4>
      <h5>
        Look for interesting titles among our{" "}
        <Link to={AppRoutes.homePage} className={styles.recommendedLink}>
          Recommendations!
        </Link>
      </h5>
    </div>
  );
}
