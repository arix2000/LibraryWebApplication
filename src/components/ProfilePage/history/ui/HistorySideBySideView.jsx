import styles from "../../../styles/userHistory.module.css";
import HistoryPanel from "./HistoryPanel";

const HistorySideBySideView = ({ userHistory, globalHistory, setDetailShow }) => {
    return (
        <>
            <div className={styles.twoSidesWrapper}>
                <HistoryPanel title={"Your History"} historyItems={userHistory} showUserName={false} setDetailShow={setDetailShow}/>
                <HistoryPanel title={"Global History"} historyItems={globalHistory} showUserName={true} setDetailShow={setDetailShow}/>
            </div>
        </>
    )
}

export default HistorySideBySideView;