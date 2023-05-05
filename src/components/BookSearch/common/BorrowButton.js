import { BsFillCartPlusFill } from "react-icons/bs";
import { Button, Row } from "react-bootstrap";
import { RiBookMarkFill, RiHealthBookFill } from "react-icons/ri";
import styles from "../../styles/bookItem.module.css";
import UserBookManager from "../../../common/UserBookManager";
//TODO Restore chagnes!
export default function BorrowButton({rowStyles, bookId}) {
  const userBookManager = new UserBookManager();

  const borrowButtonHandler = (e) => {
    e.stopPropagation();
    userBookManager.borrowBook(bookId);
    
  };

  const reserveButtonHandler = (e) => {
    e.stopPropagation();
    userBookManager.reserviseBook(bookId);
    
  };

  return (
    <Row className={rowStyles}>
      <Button onClick={(e) => reserveButtonHandler(e)} variant="primary" className={`${styles.borrowButton} button-radius`}>
        Reserve <RiBookMarkFill style={{ width: 20, height: 20 }} />
      </Button>
      <Button onClick={(e) => borrowButtonHandler(e)} variant="success" className={`${styles.borrowButton} button-radius`}>
        Borrow <RiHealthBookFill style={{ width: 20, height: 20 }} />
      </Button>
    </Row>
  );
}
