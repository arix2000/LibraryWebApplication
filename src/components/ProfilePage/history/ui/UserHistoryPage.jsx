import { Container } from "react-bootstrap";
import SessionManager from "../../../../common/SessionManager";
import NavBar from "../../../UiCommon/NavBar";
import styles from "../../../styles/userHistory.module.css";
import HistoryPanel from "./HistoryPanel";
import HistoryManager from "../../../../common/HistoryManager";

const UserHistoryPage = () => {
    const loggedUser = (new SessionManager()).getLoggedUser();
    const userHistory = loggedUser.history;
    const globalHistory = (new HistoryManager()).getGlobalHistory(); 
    return (
        <>
            <NavBar />
            <Container fluid style={{ padding: 0 }}>
                <div className={styles.twoSidesWrapper}>
                    <HistoryPanel title={"Your History"} historyItems={userHistory} showUserName={false}/>
                    <HistoryPanel title={"Global History"} historyItems={globalHistory} showUserName={true}/>
                </div>
            </Container>
        </>
    )
}

export default UserHistoryPage;