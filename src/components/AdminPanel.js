import { Card, Container } from "react-bootstrap";
import "../components/styles/AdminPanelStyle.css"
import UserListItem from "./UserListItem";

export default function AdminPanel() {
    const texts = ["user1", "user2","user3"];

    return (
      <>
        <Container className='adminPanelHeader'>
          <h3 className="text-center bannerText">Admin Panel</h3>
        </Container>
        <Container className='adminPanelBody'>
            {texts.map((text) => 
              <UserListItem key={text} user={text}/>
            )}
        </Container>
      </>
    )
  }