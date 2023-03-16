import { Button, Container } from "react-bootstrap";
import "../styles/admin-panel-styles.css"
import UserListItem from "./UserListItem";
import usersJson from '../../models/users.json';
import React, { useState } from "react";
import { IoMdAdd } from "react-icons/io";
import DeleteUserDialog from "./DeleteUserDialog";

function AdminPanel() {
  const [modalShow, setModalShow] = useState(false);
  const users = usersJson;
  const userItems = users.map((user) => 
  <UserListItem key={user.id.toString()} user={user} onDeleteClicked={() => setModalShow(true)}/>)

  return (
    <>
      <Container className='adminPanelHeader'>
        <h4>Panel administratora</h4>
      </Container>
        <br/>
        <div className="background-color d-flex flex-wrap justify-content-center full-width">
            {userItems}
        </div>
      <Container style={{height: 50}}></Container>
        <Button className="fab"><IoMdAdd style={{height: 24, width: 24}}/></Button>

      <DeleteUserDialog
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  )
}

  export default AdminPanel;