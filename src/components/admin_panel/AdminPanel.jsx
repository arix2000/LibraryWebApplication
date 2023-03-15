import { Button, Container } from "react-bootstrap";
import "../styles/admin-panel-styles.css"
import UserListItem from "./UserListItem";
import usersJson from '../../models/users.json';
import React, { useState } from "react";
import GridSystem from "./ui_utils/GridSystem";
import { IoMdAdd } from "react-icons/io";
import DeleteUserDialog from "./DeleteUserDialog";
import useWindowDimensions from "./ui_utils/Dimensions";

function isInTwoColumnsRange(width) {
  return width >= 768 && width <= 1200;
}

function AdminPanel() {
  const [modalShow, setModalShow] = useState(false);
  const { width } = useWindowDimensions();
  const users = usersJson;
  return (
    <>
      <Container className='adminPanelHeader'>
        <h4>Panel administratora</h4>
      </Container>
        <br/>
      <GridSystem colCount={ isInTwoColumnsRange(width) ? 2 : 3 } md={isInTwoColumnsRange(width) ? 6 : 4 }>
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