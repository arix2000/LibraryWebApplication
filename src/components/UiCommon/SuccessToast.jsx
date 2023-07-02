import { Toast } from "react-bootstrap";
import styles from "../styles/uiCommon.module.css"

const SuccessToast = ({ text, show, setShow }) => {
    return (
        <div className={styles.toastContainer}>
            <Toast bg="success" className={styles.errorToast} onClose={() => setShow(false)} show={show} delay={3000} autohide>
                <Toast.Body className="text-light">{text}</Toast.Body>
            </Toast>
        </div>
    );
}

export default SuccessToast;