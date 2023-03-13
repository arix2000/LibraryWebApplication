import { Card, Container } from "react-bootstrap";
import UserListItem from "./UserListItem";
import usersJson from '../models/users.json';
import "./styles/AdminPanelStyle.css";

export default function AdminPanel() {
    const users = usersJson;

    return (
      <div>
        <Container className='adminPanelHeader'>
          <h3 className="text-center bannerText">Admin Panel</h3>
        </Container>
        <Container className='adminPanelBody'>
            {users.map((user) => 
              <UserListItem key={user.id.toString()} user={user}/>
            )}
        </Container>
      </div>
    )
  }