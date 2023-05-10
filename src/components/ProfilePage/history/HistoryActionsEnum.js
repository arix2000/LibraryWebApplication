import HistoryAction from "./HistoryAction";

const HistoryActions = {
    Borrow: new HistoryAction("Borrow", "success", "has been borrowed!"),
    Reserve: new HistoryAction("Reserve", "info", "has been reserved!"),
    CancelReservation: new HistoryAction("CancelReservation", "danger", "reservation has been canceled."),
    Return: new HistoryAction("Return", "primary", "has been returned to library.")
}

export default HistoryActions;