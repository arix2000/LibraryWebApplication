import { Button, Container } from "react-bootstrap";
import "../styles/admin-panel-styles.css"
import UserListItem from "./UserListItem";
import usersJson from '../../models/users.json';
import React from "react";
import GridSystem from "./GridSystem";
import { IoMdAdd } from "react-icons/io";

class AdminPanel extends React.Component {
    render() {
      const users = usersJson;
      return (
        <>
          <Container className='adminPanelHeader'>
            <h4>Panel administratora</h4>
          </Container>
          <br/>
          <GridSystem colCount={2} md={6}>
            {users.map((user) => 
              <UserListItem key={user.id.toString()} user={user}/>
            )}
          </GridSystem>
          <Container style={{height: 90}}></Container>
          <Button className="fab"><IoMdAdd style={{height: 24, width: 24}}/></Button>
        </>
      )
    }
  }

  export default AdminPanel;