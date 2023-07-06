import { Button, Container, Modal } from "react-bootstrap";
import SessionManager from "../../common/SessionManager";
import styles from "../styles/profile.module.css";
import PasswordText from "../AdminPanel/PasswordText";
import { IoIosLogOut, IoMdArrowRoundForward } from "react-icons/io";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import AppRoutes from "../../common/AppRoutes";

export default function ProfileDialog(props) {
    const navigate = useNavigate();
    const sessionManager = new SessionManager()
    const loggedUser = sessionManager.getLoggedUser();
    var logoutButtonRef = React.createRef();
    const logoutTextDefault = "Log Out"
    const [logoutText, setLogoutText] = useState(logoutTextDefault);

    function logoutClick() {
        setLogoutText("Are you sure?");
        if (logoutText != logoutTextDefault) {
            sessionManager.logout();
            navigate(AppRoutes.root);
        }
        setTimeout(() => {
            setLogoutText(logoutTextDefault);
        }, 5000);
    }

    return (
        <>
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                dialogClassName={styles.modalDialogClass}
                centered>
                <Container fluid className={styles.body}>
                    <div className={styles.profileBasicInfo}>
                        <p className={styles.nameTitleText}>{loggedUser.name} {loggedUser.surname}</p>
                        <div className={styles.contentTextWrapper}>
                            <div className={styles.contentText}>
                                <span>Role: <b>{loggedUser.role}</b></span><br />
                                <span>Login: <b>{loggedUser.login}</b></span><br />
                                <span>Password: <b><PasswordText pass={loggedUser.password} /></b></span>
                            </div>
                            <div className={styles.contentText}>
                                <span>Borrowed books: <b>{loggedUser.borrowed_books.length}</b></span><br />
                                <span>Reserved books: <b>{loggedUser.reserved_books.length}</b></span><br />
                                <span>History count: <b>{loggedUser.history.length}</b></span>
                            </div>
                        </div>
                    </div>
                    <div style={{ maxWidth: "100%", display: "flex", justifyContent: "end" }}>
                        <Button onClick={() => props.onHide()} className={styles.cancelButton}>Cancel</Button>
                        <Button ref={logoutButtonRef} onClick={() => logoutClick()} className={styles.logoutButton}
                            variant="danger" style={{ width: logoutText == logoutTextDefault ? "105px" : "150px" }}>
                            <div className="text-truncate">{logoutText}</div>
                            <IoIosLogOut style={{ width: 20, height: 20 }} />
                        </Button>
                    </div>
                </Container>
            </Modal>
        </>
    )
}