
export default function UsersTable({ users, query, selectedUserId, handleUserClick, styles }) {
    const filteredUsers = users.filter(
      (user) =>
        user.name.toLowerCase().includes(query.toLowerCase()) ||
        user.surname.toLowerCase().includes(query.toLowerCase()) ||
        user.login.toLowerCase().includes(query.toLowerCase())
    );
  
    return (
      <>
        {filteredUsers.map((user) => {
          const isSelected = user.id === selectedUserId;
          const userRowStyles = isSelected ? styles.selectedRow : styles.usersTableRow;
          return (
            <tr className={userRowStyles} key={user.id} onClick={() => handleUserClick(user.id)}>
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