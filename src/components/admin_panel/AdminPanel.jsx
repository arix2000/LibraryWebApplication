import { Button, Container } from "react-bootstrap";
import "../styles/admin-panel-styles.css"
import UserListItem from "./UserListItem";
import usersJson from '../../models/users.json';
import React, { useState } from "react";
import { IoMdAdd } from "react-icons/io";
import UserManager from "./UserManager"
import DeleteUserDialog from "./dialogs/DeleteUserDialog";

function AdminPanel() {
  const userManager = new UserManager();
  const [modalShow, setModalShow] = useState(false);
  const users = usersJson;
  const userItems = users.map((user) => 
  <UserListItem key={user.id.toString()} user={user} onDeleteClicked={() => {
    setModalShow(true)
    userManager.removeUser(user)
  }}/>)

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
        <Button className="fab"><IoMdAdd style={{height: 24, width: 24}}/></Button>

      <DeleteUserDialog
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  )
}

  export default AdminPanel;