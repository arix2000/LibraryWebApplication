import { BsFillCartPlusFill } from "react-icons/bs";
import { Button, Row } from "react-bootstrap";
import { RiBookMarkFill, RiHealthBookFill } from "react-icons/ri";
import styles from "../../styles/bookItem.module.css";

export default function BorrowButton({rowStyles}) {
  const borrowButtonHandler = (e) => {
    console.log("borrowed");
    /* TODO add borrow button logic */
    e.stopPropagation();
  };

  return (
    <Row className={rowStyles}>
      <Button onClick={borrowButtonHandler} variant="primary" className={`${styles.borrowButton} button-radius`}>
        Reserve <RiBookMarkFill style={{ width: 20, height: 20 }} />
      </Button>
      <Button onClick={borrowButtonHandler} variant="success" className={`${styles.borrowButton} button-radius`}>
        Borrow <RiHealthBookFill style={{ width: 20, height: 20 }} />
      </Button>
    </Row>
  );
}
