import HistoryAction from "./HistoryAction";

const HistoryActions = {
    Borrow: new HistoryAction("Borrow", "success", "{book} has been borrowed!"),
    Reserve: new HistoryAction("Reserve", "info", "{book} has been reserved!"),
    CancelReservation: new HistoryAction("CancelReservation", "danger", "Book {book} reservation has been canceled."),
    Return: new HistoryAction("Return", "primary", "{book} has been returned to library.")
}

export default HistoryActions;