import { Col, Container, Row } from "react-bootstrap";
import SessionManager from "../../common/SessionManager";
import NavBar from "../UiCommon/NavBar";
import styles from "../styles/userHistory.module.css";

const UserHistoryPage = () => {
    const loggedUser = (new SessionManager()).getLoggedUser();
    return (
        <>
            <NavBar />
            <Container fluid style={{ padding: 0 }}>
                
            </Container>
        </>
    )
}

export default UserHistoryPage;