import { BsFillCartPlusFill } from "react-icons/bs";
import { Button } from "react-bootstrap";
import "./common-styles/borrow-button.css";

export default function BorrowButton({ width, height, useIcon }) {
  const buttonHandler = (e) => {
    console.log("borrowed");
    e.stopPropagation();
  };

  return (
    <Button variant="success" className="button-radius">
      {useIcon ? (
        <BsFillCartPlusFill
          style={{ width: width, height: height }}
          onClick={buttonHandler}
        />
      ) : (
        <span onClick={buttonHandler}>Borrow</span>
      )}
    </Button>
  );
}
