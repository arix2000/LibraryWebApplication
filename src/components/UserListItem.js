import { Card } from "react-bootstrap";
import "../components/styles/AdminPanelStyle.css"

function UserListItem(props) {
    var user = props.user;
    return (
      <>
        <Card className='listItemBody text-light'>
            <p>{user}</p>
        </Card>
      </>
    )
  }

  export default UserListItem;