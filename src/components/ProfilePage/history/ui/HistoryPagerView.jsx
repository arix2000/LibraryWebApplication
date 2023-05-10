import styles from "../../../styles/userHistory.module.css";
import HistoryPanel from "./HistoryPanel";
import { useState } from "react";

const HistoryPagerView = ({ userHistory, globalHistory, setDetailShow }) => {
    const [selectedBtn, setSelectedBtn] = useState("user");

    const onUserButtonClick = (e) => {
        setSelectedBtn("user")
    }

    const onGlobalButtonClick = (e) => {
        setSelectedBtn("global")
    }

    const isUser = selectedBtn == "user"
    return (
        <>
            <div>
                <div className={styles.pagerTabsWrapper}>
                    <div onClick={isUser ? null : (e) => onUserButtonClick(e)}
                        className={`${styles.pagerTabs} ${styles.leftTabStyle} ${isUser ? styles.selectedTab : ""}`}>
                        Your history
                    </div>
                    <div onClick={isUser ? (e) => onGlobalButtonClick(e) : null}
                        className={`${styles.pagerTabs} ${styles.rightTabStyle} ${isUser ? "" : styles.selectedTab}`}>
                        Global history
                    </div>
                </div>
                {isUser
                    ? <HistoryPanel historyItems={userHistory} showUserName={false} setDetailShow={setDetailShow}/>
                    : <HistoryPanel historyItems={globalHistory} showUserName={true} setDetailShow={setDetailShow}/>}
            </div>
        </>
    )
}

export default HistoryPagerView;