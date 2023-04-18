import NavBar from "../UiCommon/NavBar";
import UserBookManager from "../../common/UserBookManager";
import { Button, Col } from "react-bootstrap";

export default function HomePage() {
    const userBookManager = new UserBookManager();
    const borrowedBooks = userBookManager.getAllBorrowedBooks().map((book) => <div className="text-light">{book.title}</div>)
    const reservedBooks = userBookManager.getAllReservedBooks().map((book) => <div className="text-light">{book.title}</div>)
    return (
        <>
            <NavBar />
            <h2 className="text-light">Borrowed Books: </h2>
            <div className="text-light">{borrowedBooks}</div>
            <h2 className="text-light">Reserved Books: </h2>
            <div className="text-light">{reservedBooks}</div>
            <span>
                <Button style={{ margin: "10px" }} onClick={() => userBookManager.borrowBook(9780002005883)}>Borrow Book</Button>
                <Button onClick={() => userBookManager.reserviseBook(9780002005883)}>Reserve Book</Button>
            </span>
            <br/>
            <span>
                <Button style={{ margin: "10px" }} onClick={() => userBookManager.returnBook(9780002005883)}>Return Book</Button>
                <Button onClick={() => userBookManager.cancelReservation(9780002005883)}>Cancel Reservation</Button>
            </span>
        </>
    )
}