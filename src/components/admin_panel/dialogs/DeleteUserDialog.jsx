import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import "../../styles/admin-panel-styles.css"
import UserManager from '../utils/UserManager';

export default function DeleteUserDialog(props) {
  const userManager = new UserManager();
  const user = props.user;
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
        <Button className="default-button-radius" onClick={props.onHide}>Close</Button>
        <Button className="default-button-radius" onClick={() => { props.onHide(); userManager.removeUser(user); }} variant="danger">Usuń użytkownika</Button>
      </Modal.Footer>
    </Modal>
  );
}