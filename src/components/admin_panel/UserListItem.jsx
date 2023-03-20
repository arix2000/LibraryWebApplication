import { BsTrashFill } from "react-icons/bs";
import { RiEditFill } from "react-icons/ri";
import { Button, Card, Col, OverlayTrigger, Row, Tooltip } from "react-bootstrap";
import "../styles/admin-panel-styles.css"
import PasswordText from "./PasswordText";
import DeleteUserDialog from "./dialogs/DeleteUserDialog";
import { useState } from "react";
import AddEditUserDialog from "./dialogs/AddEditUserDialog";

const UserListItem = ({user}) => {
  const [modalDeleteShow, setModalDeleteShow] = useState(false);
  const [modalEditShow, setModalEditShow] = useState(false);
    return (
      <>
      <div>
        <Card border="primary" className='listItemBody text-light label-color'>
            <Row>
              <Col sm={7} xs={9}><Card.Title>{user.name} {user.surname}</Card.Title></Col>
              <Col> 
              <Card.Subtitle className="text-right" style={{margin: 5}}><b>{user.role}</b></Card.Subtitle>
              </Col>
            </Row>
          
          <Card.Text>
            <Row>
              <Col>Login: {user.login}<br/>Hasło: <PasswordText pass={user.password}/></Col>
            </Row>
          </Card.Text>
          <Card.Footer>
            <Row>
              <Col>
                <Button className="defaultButtonRadius" onClick={() => setModalEditShow(true)}>
                  Edit <RiEditFill style={{marginLeft: 4, marginBottom: 4}}/>
                </Button>
              </Col>
              {user.role == "admin" 
              ? <Col className="text-right">
                  <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Nie można usunąć admina</Tooltip>}>
                  <span className="d-inline-block">
                    <Button className="disabled" variant="secondary" style={{borderRadius: 12}}>
                      <BsTrashFill/>
                    </Button>
                  </span>
                  </OverlayTrigger>
                </Col>
              : <Col className="text-right">
                  <Button className="defaultButtonRadius" variant="danger" onClick={() => setModalDeleteShow(true)}><BsTrashFill/></Button>
                </Col>}
            </Row>
          </Card.Footer>
        </Card>
        </div>

        <DeleteUserDialog
          show={modalDeleteShow}
          onHide={() => setModalDeleteShow(false)}
          user={user}
        />
        <AddEditUserDialog
          show={modalEditShow}
          onHide={() => setModalEditShow(false)}
          user={user}
        />
      </>
    )
  }

  export default UserListItem