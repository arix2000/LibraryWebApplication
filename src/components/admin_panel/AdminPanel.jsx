import { Button, Container } from "react-bootstrap";
import "../styles/admin-panel-styles.css"
import UserListItem from "./UserListItem";
import React, { useReducer, useState } from "react";
import { IoMdAdd } from "react-icons/io";
import UserManager from "./UserManager"
import AddEditUserDialog from "./dialogs/AddEditUserDialog";

function AdminPanel() {
  const userManager = new UserManager();

  const [modalAddShow, setModalAddShow] = useState(false);
  var [users, setUsers] = useState(userManager.getUsers())
  window.addEventListener('storage', (storageEvent) => {
    setUsers(userManager.getUsers());
   })
  const userItems = users.map((user) => <UserListItem key={user.id.toString()} user={user}/>)
  return (
    <>
        <div className='adminPanelHeader'>
          <h4>Panel administratora</h4>
        </div>
        <br/>
        <div className="background-color d-flex flex-wrap justify-content-center">
            {userItems}
        </div>
      <Container style={{height: 70}}></Container>
        <Button className="fab" onClick={() => setModalAddShow(true)}><IoMdAdd style={{height: 24, width: 24}}/></Button>

      <AddEditUserDialog
        show={modalAddShow}
        onHide={() => setModalAddShow(false)}
      />
    </>
  )
}

  export default AdminPanel;