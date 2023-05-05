import { Col } from "react-bootstrap";
import styles from "../../../styles/userHistory.module.css";
import HistoryItem from "./HistoryItem";

const HistoryPanel = ({ title, historyItems, showUserName }) => {


    const historyItemsUI = historyItems.map((item) => <HistoryItem key={item.historyId} historyItem={item}/>);
    return (
        <>
            <div className={styles.historyListPanel}>
                <h2>{title}</h2>
                <Col>
                    {historyItemsUI}
                </Col>
            </div>
        </>
    );
}

export default HistoryPanel;