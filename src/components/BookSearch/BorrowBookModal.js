import { Modal, Button, Table, Form } from "react-bootstrap";
import styles from "../styles/bookItem.module.css";
import UserManager from "../AdminPanel/utils/UserManager";
import { useState, useEffect, useCallback } from "react";

function UserRow({ users, query, selectedUserId, handleClick }) {
  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(query.toLowerCase()) ||
      user.surname.toLowerCase().includes(query.toLowerCase()) ||
      user.login.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <>
      {filteredUsers.map((user) => {
        console.log(user);
        const isSelected = user.id === selectedUserId;
        const rowClass = isSelected ? styles.selectedRow : styles.usersTableRow;
        return (
          <tr className={rowClass} key={user.id} onClick={() => handleClick(user.id)}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.surname}</td>
            <td>{user.login}</td>
            <td>{user.reserved_books.length}</td>
            <td>{user.borrowed_books.length}</td>
          </tr>
        );
      })}
    </>
  );
}

export default function BorrowBookModal({ show, onHide, book }) {
  const userManager = new UserManager();

  const [users, setUsers] = useState([]);
  const [query, setQuery] = useState("");
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [isChecked, setIsChecked] = useState(false);

  const handleClick = (userId) => {
    setSelectedUserId(userId);
    setIsChecked(true);
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
          <h1 className="font-weight-bold">{'"' + book.title + '"'}</h1>
          <h5>Select the user to whom you wish to lend the book.</h5>
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
        <Table responsive className={styles.usersTable}>
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
            <UserRow
              users={users}
              query={query}
              selectedUserId={selectedUserId}
              handleClick={handleClick}
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
        <Button
          className="button-radius"
          variant="success"
          onClick={onHide}
          disabled={!isChecked}
        >
          Hire a book
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
