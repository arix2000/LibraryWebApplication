import { BsFillCartPlusFill } from "react-icons/bs";
import { Button } from "react-bootstrap";
import styles from "../../styles/bookItem.module.css";

export default function BorrowButton({ width, height, useIcon }) {
  const buttonHandler = (e) => {
    console.log("borrowed");
    /* TODO add borrow button logic */ 
    e.stopPropagation();
  };

  return (
    <Button onClick={buttonHandler} variant="success" className={`${styles.borrowButton} button-radius`}>
      <BsFillCartPlusFill style={{ width: width, height: height }} />
    </Button>
  );
}
