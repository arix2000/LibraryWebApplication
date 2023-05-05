import styles from "../../../styles/userHistory.module.css";


const HistoryItem = ({ historyItem, showUserName = true }) => {
    return (
        <>
            <div className={`${styles.historyItemContainer}`}>
                {historyItem.action.color}
            </div>
        </>
    );
}

export default HistoryItem;