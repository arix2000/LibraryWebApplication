import { Col } from "react-bootstrap";
import styles from "../../../styles/userHistory.module.css";
import HistoryItem from "./HistoryItem";
import RolesEnum from "../../../../common/RolesEnum";
import SessionManager from "../../../../common/SessionManager";
import { ReactComponent as NoItemsIcon } from '../../../../assets/no-items-icon.svg';

const HistoryPanel = ({ title, historyItems, showUserName, setDetailShow }) => {
    const loggedUser = (new SessionManager()).getLoggedUser();
    const historyItemsUI = historyItems.map((item) =>
        <HistoryItem key={item.historyId} historyItem={item} showUserName={showUserName} setDetailShow={setDetailShow} />);
    const historyPanelStyleBodyStyle = loggedUser.role != RolesEnum.user ? styles.historyListPanel : styles.historyListPanelSingle;
    const historyPanelStyleTwoSides = !title ? "" : styles.historyListPanelInTwoSides;
    return (
        <>
            <div className={`${historyPanelStyleBodyStyle} ${historyPanelStyleTwoSides}`}>
                <h2>{title}</h2>
                <Col>
                    {historyItemsUI}
                </Col>
                {historyItems.length == 0 ? <div className={styles.emptyViewContainer}>
                    <NoItemsIcon style={{ width: "160px", height: "160px" }} />
                    <p style={{ fontSize: "1.2em" }}>There are no history entries yet.</p>
                </div> : <></>}
            </div>
        </>
    );
}

export default HistoryPanel;