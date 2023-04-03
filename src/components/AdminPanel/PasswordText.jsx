import { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai"
import styles from "../styles/adminPanel.module.css"

export default function PasswordText(props) {
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };
  const dotedPass = props.pass.split('').map(letter => '•');

  return (
    <span>
        {passwordShown ? props.pass : dotedPass}
        <span className={styles.passwordVisibilityButton} onClick={togglePassword}>
          <br/>
            {passwordShown 
            ? <AiFillEyeInvisible style={{width: 20, height: 20, marginLeft: 8}}/> 
            : <AiFillEye style={{width: 20, height: 20, marginLeft: 8}}/>}
        </span>
    </span>
  );
}