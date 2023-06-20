import { Button, Modal } from "react-bootstrap";
import styles from "../styles/homePage/addEditBooksModal.module.css"
import ToastEventKeys from "../UiCommon/ToastEventKeys"

const DeleteBookDialog = (props) => {
    function onDeleteClicked() {
        window.dispatchEvent(new Event(ToastEventKeys.deleteToast));
        props.onHide();
        //TODO remove book from the storage
    }

    return (<>
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered>
            <div className={styles.modalContent}>
                <Modal.Header>
                    <Modal.Title>
                        Are you sure you want to delete this book?
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <b><i>{props.book.title}</i></b> written by <b><i>{props.book.authors}</i></b> will be deleted permanently.
                </Modal.Body>
                <Modal.Footer>
                    <Button className="button-radius" variant="secondary"
                        onClick={() => props.onHide()}>Cancel</Button>
                    <Button className="button-radius" onClick={onDeleteClicked}>
                        <span>Delete Book</span>
                    </Button>
                </Modal.Footer>
            </div>
        </Modal>
    </>)
}

export default DeleteBookDialog;