import styles from "../styles/emptyList.module.css";
import { ReactComponent as NoItemsIcon } from "../../assets/no-items-icon.svg";
import { Link } from "react-router-dom";
import AppRoutes from "../../common/AppRoutes";

export default function EmptyList() {
  return (
    <div className={styles.emptyListContainer}>
      <NoItemsIcon className={styles.noResultsIcon} />
      <h1>No results for your query</h1>
      <h4>
        Find what you are looking for in{" "}
        <Link to={AppRoutes.homePage} className={styles.recommendedLink}>
          Recommendations Panel!
        </Link>
      </h4>
    </div>
  );
}
