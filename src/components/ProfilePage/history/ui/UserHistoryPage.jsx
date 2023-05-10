import { Container } from "react-bootstrap";
import SessionManager from "../../../../common/SessionManager";
import NavBar from "../../../UiCommon/NavBar";
import HistoryManager from "../../../../common/HistoryManager";
import HistorySideBySideView from "./HistorySideBySideView";
import HistoryPagerView from "./HistoryPagerView";
import { useMediaQuery } from 'react-responsive';
import RolesEnum from "../../../../common/RolesEnum";
import HistoryPanel from "./HistoryPanel";
import { useState } from "react";
import BookDetailModal from "../../../BookSearch/BookDetail/BookDetailModal";
import allBooks from "../../../../models/books.json"

const UserHistoryPage = () => {
    const [detailShow, setDetailShowSetter] = useState(false);
    const loggedUser = (new SessionManager()).getLoggedUser();
    const userHistory = loggedUser.history.reverse();
    const globalHistory = (new HistoryManager()).getGlobalHistory().reverse();
    const isMobile = useMediaQuery({ query: `(max-width: 985px)` });
    const [clickedBook, setClickedBook] = useState(allBooks[0]);

    const setDetailShow = (book) => {
        setDetailShowSetter(true);
        setClickedBook(book);
    }

    return (
        <>
            <NavBar />
            {loggedUser.role != RolesEnum.user
                ? <Container fluid style={{ padding: 0, height: "100%" }}>
                    {isMobile
                        ? <HistoryPagerView globalHistory={globalHistory} userHistory={userHistory} setDetailShow={setDetailShow} />
                        : <HistorySideBySideView globalHistory={globalHistory} userHistory={userHistory} setDetailShow={setDetailShow} />}
                </Container>
                : <Container fluid style={{ maxWidth: "1000px", textAlign: "center", padding: 0 }}>
                    <HistoryPanel title={"Your history"} historyItems={userHistory} showUserName={false} setDetailShow={setDetailShow}/>
                </Container>}
            <BookDetailModal
                show={detailShow}
                onHide={() => setDetailShowSetter(false)}
                book={clickedBook}
            />
        </>
    )
}

export default UserHistoryPage;