import styles from "../../../styles/userHistory.module.css";
import allBooks from "../../../../models/books.json"
import HistoryBookItem from "./HistoryBookItem";
import { useState } from "react";


const HistoryItem = ({ historyItem, showUserName, setDetailShow }) => {
    const [expanded, setExpanded] = useState(false);
    const book = allBooks.find(book => book.isbn13 == historyItem.bookId);
    console.log(book);
    return (
        <>
            <div className={`${styles.historyItemContainer} ${getHistoryActionStyle(historyItem.action.color)}`}
                onClick={() => setExpanded(!expanded)} style={{height: expanded ? 260 : 98}}>
                <div className={styles.historyItemRowWrapper}>
                    <div className="text-truncate">
                        <b className="text-light">"{book.title}"</b><br />
                        <i className="text-light" style={{ fontSize: "0.9em" }}>{"~" + book.authors.replaceAll(";", ", ")}</i>
                        <div className={styles.historyItemTextSizeSmall}>
                            {historyItem.action.message}
                            {showUserName ? <i>{" - " + historyItem.userName + " " + historyItem.userSurname}</i> : <></>}
                        </div>
                    </div>
                    <div className="text-light" style={{ paddingLeft: "10px", textAlign: "right" }}>
                        {historyItem.date} <br />
                        {historyItem.time}
                    </div>
                </div>
                <div>
                    {<HistoryBookItem book={book} setDetailShow={setDetailShow} />}
                </div>
            </div>
        </>
    );
}

function getHistoryActionStyle(color) {
    switch (color) {
        case "success":
            return styles.successTint;
        case "info":
            return styles.infoTint;
        case "danger":
            return styles.dangerTint;
        case "primary":
            return styles.primaryTint;
    }
}

export default HistoryItem;