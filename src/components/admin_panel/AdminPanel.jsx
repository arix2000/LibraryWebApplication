import { Button, Container } from "react-bootstrap";
import "../styles/admin-panel-styles.css"
import UserListItem from "./UserListItem";
import usersJson from '../../models/users.json';
import React, { useState } from "react";
import GridSystem from "./ui_utils/GridSystem";
import { IoMdAdd } from "react-icons/io";
import DeleteUserDialog from "./DeleteUserDialog";

function AdminPanel() {
  const [modalShow, setModalShow] = useState(false);
  const users = usersJson;
  return (
    <>
      <Container className='adminPanelHeader'>
        <h4>Panel administratora</h4>
      </Container>
        <br/>
      <GridSystem colCount={2} md={6}>
        {users.map((user) => 
          <UserListItem key={user.id.toString()} user={user} onDeleteClicked={() => setModalShow(true)}/>
        )}
      </GridSystem>
      <Container style={{height: 90}}></Container>
        <Button className="fab"><IoMdAdd style={{height: 24, width: 24}}/></Button>

      <DeleteUserDialog
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  )
}

  export default AdminPanel;