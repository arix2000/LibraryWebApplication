import { Modal, Button, Table, Form } from "react-bootstrap";
import styles from "../styles/bookItem.module.css";
import UserManager from "../AdminPanel/utils/UserManager";
import { useState, useEffect, useCallback } from "react";
import UsersTable from "./UsersTable";
import SelectReturnedBookModal from "./SelectReturnedBookModal";

export default function ReturnBookModal({ show, onHide }) {
  const userManager = new UserManager();

  const [users, setUsers] = useState([]);
  const [query, setQuery] = useState("");
  const [selectReturnedBookShow, setSelectReturnedBookShow] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState(-1);

  window.addEventListener('storage', (_) => {
    setUsers(userManager.getUsers());
  });

  const handleUserClick = (userId) => {
    setSelectedUserId(userId);
    setSelectReturnedBookShow(true);
    onHide();
  };

  const handleQueryChange = (e) => {
    const inputValue = e.target.value;
    setQuery(inputValue);
  };

  const assignUsersToVar = useCallback(() => {
    setUsers(userManager.getUsers());
  }, []);

  useEffect(() => {
    assignUsersToVar();
  }, []);

  return (
    <>
    <Modal
      onClick={(e) => {
        e.stopPropagation();
      }}
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header
        className={`text-light label-color ${styles.borrowBookModalHeader}`}
      >
        <Modal.Title
          id="contained-modal-title-vcenter"
          className="text-center w-100 pb-2 fade-in"
        >
          <h5>Select the user who intends to return the book</h5>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className={`px-5 text-light ${styles.borrowBookModalBody}`}>
        <Form>
          <Form.Control
            type="search"
            placeholder="Search"
            className={styles.userSearchForm}
            aria-label="Search"
            onChange={handleQueryChange}
            value={query}
          />
        </Form>
        <Table responsive className={styles.usersTable} borderless>
          <thead>
            <tr>
              <th>ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Login</th>
              <th>Reserved</th>
              <th>Borrowed</th>
            </tr>
          </thead>
          <tbody>
            <UsersTable
              users={users}
              query={query}
              selectedUserId={selectedUserId}
              handleUserClick={handleUserClick}
              styles={styles}
            />
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
    <SelectReturnedBookModal selectedUserId={selectedUserId} show={selectReturnedBookShow} onHide={() => {setSelectReturnedBookShow(false)}}/>
    </>
  );
}