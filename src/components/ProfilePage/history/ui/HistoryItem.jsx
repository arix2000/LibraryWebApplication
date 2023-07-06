import styles from "../../../styles/userHistory.module.css";
import HistoryBookItem from "./HistoryBookItem";
import { useState } from "react";
import BookManager from "../../../../common/BooksManager";


const HistoryItem = ({ historyItem, showUserName, setDetailShow }) => {
    const [expanded, setExpanded] = useState(false);
    const booksManager = new BookManager();
    const book = booksManager.getBooks().find(book => book.isbn13 == historyItem.bookId);
    return (
        <>
            <div className={`${styles.historyItemContainer} ${getHistoryActionStyle(historyItem.action.color)}`}
                onClick={() => setExpanded(!expanded)} style={{height: expanded ? 277 : 98}}>
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
                <div className={styles.historyItemDivider}/>
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