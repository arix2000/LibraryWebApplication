import { useState } from "react";
import { Button } from "react-bootstrap";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai"
import "../styles/admin-panel-styles.css"

export default function PasswordText(props) {
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  return (
    <span>
        {passwordShown ? props.pass : "•••••••••"}
        <span size="sm" className="passwordVisibilityButton" onClick={togglePassword}>
            {passwordShown 
            ? <AiFillEyeInvisible style={{width: 20, height: 20}}/> 
            : <AiFillEye style={{width: 20, height: 20}}/>}
        </span>
    </span>
  );
}