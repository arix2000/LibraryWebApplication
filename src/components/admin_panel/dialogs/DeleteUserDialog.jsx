import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import "../../styles/admin-panel-styles.css"

export default function DeleteUserDialog(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      dialogClassName="modal-500w"
    >
      <Modal.Header>
        <Modal.Title>
          Czy napewno chcesz usunąć tego użytkownika?
        </Modal.Title>
      </Modal.Header>
      <Modal.Footer >
        <Button className="defaultButtonRadius" onClick={props.onHide}>Close</Button>
        <Button className="defaultButtonRadius" onClick={props.onHide} variant="danger">Usuń użytkownika</Button>
      </Modal.Footer>
    </Modal>
  );
}