import { BsFillCartPlusFill } from "react-icons/bs";
import { Button } from "react-bootstrap";
import "./common-styles/borrow-button.css";

export default function BorrowButton({ width, height }) {

    const buttonHandler = (e) => {
        console.log("borrowed");
        e.stopPropagation();
      };
      
    return(
        <Button variant="success" className="border-radius">
            <BsFillCartPlusFill 
            style={{width: width, height: height}}
            onClick={buttonHandler}/>
        </Button>
    );
}