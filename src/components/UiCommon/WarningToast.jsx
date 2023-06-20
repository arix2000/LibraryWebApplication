import { Toast } from "react-bootstrap";
import styles from "../styles/uiCommon.module.css"

const WarningToast = ({ text, show, setShow }) => {
    return (
        <div className={styles.toastContainer}>
            <Toast bg="warning" className={styles.errorToast} onClose={() => setShow(false)} show={show} delay={3000} autohide>
                <Toast.Body className="text-dark">{text}</Toast.Body>
            </Toast>
        </div>
    );
}

export default WarningToast;