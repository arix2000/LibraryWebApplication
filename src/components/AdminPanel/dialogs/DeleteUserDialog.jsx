import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import styles from "../../styles/adminPanel.module.css"
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
      dialogClassName={`${styles.modal500w}`}
    >
      <div className={`${styles.adminPanelModalContent}`}>
        <Modal.Header className={styles.adminPanelModalHeader}>
          <Modal.Title>
            Are you sure you want to delete this user?
          </Modal.Title>
        </Modal.Header>
        <Modal.Footer className={styles.adminPanelModalFooter}>
          <Button className={styles.defaultButtonRadius} onClick={props.onHide}>Cancel</Button>
          <Button className={styles.defaultButtonRadius} onClick={() => { props.onHide(); userManager.removeUser(user); }} variant="danger">Delete user</Button>
        </Modal.Footer>
      </div>
    </Modal>
  );
}