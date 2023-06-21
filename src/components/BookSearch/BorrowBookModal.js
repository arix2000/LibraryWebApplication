import { Modal, Button, Table } from "react-bootstrap";
import styles from "../styles/bookItem.module.css";
import UserManager from "../AdminPanel/utils/UserManager";
import { useState, useEffect, useCallback } from "react";

export default function BorrowBookModal({ show, onHide, book }) {
  const userManager = new UserManager();

  const [users, setUsers] = useState([]);

  const assignUsersToVar = useCallback(() => {
    setUsers(userManager.getUsers());
  }, [users]);

  useEffect(() => {
    assignUsersToVar();
  }, []);

  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header className={`text-light label-color ${styles.borrowBookModalHeader}`}>
        <Modal.Title
          id="contained-modal-title-vcenter"
          className="text-center w-100 pb-2 fade-in"
        >
          <h1 className="font-weight-bold">Choose user from list below</h1>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className={`px-5 text-light ${styles.borrowBookModalBody}`}>
        <Table responsive className={styles.usersTable}>
          <thead>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Login</th>
            <th>Reserved</th>
            <th>Borrowed</th>
          </thead>
          <tbody>
            {users.map((user) => {
              console.log(user);
              return(
                 <tr className={styles.usersTableRow}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.surname}</td>
                    <td>{user.login}</td>
                    <td>{user.reserved_books.length}</td>
                    <td>{user.borrowed_books.length}</td>
                </tr>);
            })}
          </tbody>
        </Table>
      </Modal.Body>
      <Modal.Footer
        className={`px-3 py-2 label-color bottom-radius ${styles.bottomRadius}`}
      >
        <Button className="button-radius" variant="secondary" onClick={onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
